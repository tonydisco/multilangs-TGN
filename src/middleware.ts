import {NextRequest, NextResponse} from 'next/server';
import {reverseRouteTranslations, routeTranslations} from './utils/config';
import {getLangs} from './apis/langs';

const initLocales = ['vi', 'en'];
const initDefaultLocale = 'vi';

export default async function middleware(request: NextRequest) {
  const {pathname} = new URL(request.url);

  const langs = await getLangs();
  const findDefaultLocale = langs?.result?.languages?.find(
    (item) => item.isDefault
  );
  const locales =
    langs?.result?.languages?.map((item) => item.code) ?? initLocales;
  const defaultLocale = findDefaultLocale?.code ?? initDefaultLocale;

  console.log({locales});

  // Skip middleware for API, _next, static files, etc.
  const shouldHandle =
    !pathname.startsWith('/api') &&
    !pathname.startsWith('/_next') &&
    !pathname.includes('.');

  if (!shouldHandle) return NextResponse.next();

  // Extract the locale from the pathname (e.g., /en/contact-us -> locale = 'en')
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
    ? pathSegments[1]
    : pathSegments[2] || '';

  // If no locale is present in the URL, redirect to the default locale (without prefix for 'vi')
  if (isDefaultLocaleOmitted && locale === defaultLocale) {
    // If the route segment needs translation for the default locale, rewrite it
    if (routeSegment && reverseRouteTranslations[locale][routeSegment]) {
      const fileSystemSegment = reverseRouteTranslations[locale][routeSegment];
      const newPathname = `/${fileSystemSegment}${pathSegments.slice(2).join('/') || ''}`;
      return NextResponse.rewrite(
        new URL(`/${defaultLocale}${newPathname}`, request.url)
      );
    }
    // Rewrite the URL to include the default locale internally for rendering
    return NextResponse.rewrite(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }

  // If the route segment exists in the routeMap for the current locale, rewrite to the file system path
  if (
    routeSegment &&
    reverseRouteTranslations[locale] &&
    reverseRouteTranslations[locale][routeSegment]
  ) {
    const fileSystemSegment = reverseRouteTranslations[locale][routeSegment];
    const newPathname = `/${locale}/${fileSystemSegment}${pathSegments.slice(3).join('/') || ''}`;
    return NextResponse.rewrite(new URL(newPathname, request.url));
  }

  // Handle the reverse case: if the user accesses the file system path directly
  if (
    routeSegment &&
    routeTranslations[locale] &&
    routeTranslations[locale][routeSegment]
  ) {
    const translatedSegment = routeTranslations[locale][routeSegment];
    const newPathname =
      locale === defaultLocale
        ? `/${translatedSegment}${pathSegments.slice(2).join('/') || ''}`
        : `/${locale}/${translatedSegment}${pathSegments.slice(3).join('/') || ''}`;
    return NextResponse.redirect(new URL(newPathname, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
