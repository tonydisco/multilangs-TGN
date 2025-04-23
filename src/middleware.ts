import {NextRequest, NextResponse} from 'next/server';
import {reverseRouteTranslations, routeTranslations} from './utils/config';
import {getLangs} from './apis/langs';

const initLocales = ['vi', 'en'];
const initDefaultLocale = 'vi';

// Define routes that have dynamic segments (e.g., /tin-tuc/[slug])
const dynamicRoutes = ['tin-tuc', 'san-pham']; // Add other dynamic routes if needed

export default async function middleware(request: NextRequest) {
  const {pathname, searchParams} = new URL(request.url);

  const langs = await getLangs();
  const findDefaultLocale = langs?.result?.languages?.find(
    (item) => item.isDefault
  );
  const locales =
    langs?.result?.languages?.map((item) => item.code) ?? initLocales;
  const defaultLocale = findDefaultLocale?.code ?? initDefaultLocale;

  // Skip middleware for API, _next, static files, etc.
  const shouldHandle =
    !pathname.startsWith('/api') &&
    !pathname.startsWith('/_next') &&
    !pathname.includes('.');

  if (!shouldHandle) return NextResponse.next();

  // Extract the locale from the pathname (e.g., /en/news/abc -> locale = 'en')
  const pathSegments = pathname.split('/');
  let locale = pathSegments[1]; // First segment after the root (e.g., 'en' or 'vi')

  // If the first segment is not a locale, treat it as the default locale (vi)
  let isDefaultLocaleOmitted = false;
  if (!locales.includes(locale)) {
    locale = defaultLocale;
    isDefaultLocaleOmitted = true;
  }

  // Get the route segment after the locale
  const routeSegment = isDefaultLocaleOmitted
    ? pathSegments[1] // No locale in URL, so first segment is the route
    : pathSegments[2] || ''; // Locale present, so second segment is the route

  // Check if the route is a dynamic route (e.g., 'tin-tuc', 'san-pham')
  const isDynamicRoute = dynamicRoutes.includes(routeSegment);

  // Extract the dynamic segment (e.g., 'abc' in /en/news/abc)
  const dynamicSegment = isDynamicRoute ? pathSegments[3] || '' : '';

  // If no locale is present in the URL, redirect to the default locale (without prefix for 'vi')
  if (isDefaultLocaleOmitted && locale === defaultLocale) {
    // If the route segment needs translation for the default locale, rewrite it
    if (routeSegment && reverseRouteTranslations[locale]?.[routeSegment]) {
      const fileSystemSegment = reverseRouteTranslations[locale][routeSegment];
      const remainingSegments = pathSegments.slice(2).join('/') || '';
      const newPathname = `/${fileSystemSegment}${remainingSegments ? `/${remainingSegments}` : ''}`;
      return NextResponse.rewrite(
        new URL(`/${defaultLocale}${newPathname}`, request.url)
      );
    }
    // Rewrite the URL to include the default locale internally for rendering
    return NextResponse.rewrite(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }

  // Handle route translation (for both dynamic and static routes)
  let fileSystemSegment;
  let translatedSegment;

  // If the user accesses the file system path (e.g., /en/tin-tuc), redirect to the translated path (e.g., /en/news)
  if (routeTranslations?.[locale]?.[routeSegment]) {
    translatedSegment = routeTranslations[locale][routeSegment];
    const remainingSegments = pathSegments.slice(3).join('/') || '';
    const newPathname = `/${locale}/${translatedSegment}${remainingSegments ? `/${remainingSegments}` : ''}`;
    return NextResponse.redirect(new URL(newPathname, request.url));
  }

  // If the user accesses the translated path (e.g., /en/news), rewrite to the file system path (e.g., /en/tin-tuc)
  if (reverseRouteTranslations?.[locale]?.[routeSegment]) {
    fileSystemSegment = reverseRouteTranslations[locale][routeSegment];
    const remainingSegments = pathSegments.slice(3).join('/') || '';
    const newPathname = `/${locale}/${fileSystemSegment}${remainingSegments ? `/${remainingSegments}` : ''}`;
    return NextResponse.rewrite(new URL(newPathname, request.url));
  }

  // Handle locale switch (e.g., from /en/news/abc to /vi/tin-tuc/abc)
  const targetLocale = searchParams.get('locale') ?? locale; // Check if a locale switch is requested
  if (targetLocale !== locale && locales.includes(targetLocale)) {
    // Map the current route segment to the file system path for the current locale
    const currentFileSystemSegment =
      reverseRouteTranslations[locale]?.[routeSegment] || routeSegment;

    // Translate the file system path to the target locale's URL-friendly segment
    const targetTranslatedSegment =
      routeTranslations[targetLocale]?.[currentFileSystemSegment] ||
      currentFileSystemSegment;

    // Construct the new URL with the target locale and translated segment
    let newPathname = `/${targetLocale}/${targetTranslatedSegment}`;
    if (isDynamicRoute && dynamicSegment) {
      newPathname += `/${dynamicSegment}`; // Ensure the dynamic segment is preserved (e.g., /vi/tin-tuc/abc)
    }

    // Preserve query parameters if any
    const newUrl = new URL(newPathname, request.url);
    searchParams.forEach((value, key) => {
      if (key !== 'locale') newUrl.searchParams.set(key, value);
    });

    return NextResponse.redirect(newUrl);
  }

  // If the route is dynamic and no translation applies, let Next.js handle it
  if (isDynamicRoute) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
