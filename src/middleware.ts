import createMiddleware from 'next-intl/middleware';
// import {NextRequest, NextResponse} from 'next/server';
import {
  // getRoutingConfig,
  routing
} from './i18n/routing';

// let cachedConfig: Awaited<ReturnType<typeof getRoutingConfig>> | null = null;

export default createMiddleware({...routing});

/*export default async function middleware(request: NextRequest) {
  if (!cachedConfig) {
    cachedConfig = await getRoutingConfig();
  }
  const {locales, defaultLocale} = cachedConfig;

  console.log('====================================');
  console.log({locales});
  console.log('====================================');
  const {pathname} = request.nextUrl;
  const localeMatch = pathname.match(/^\/([a-z]{2})(\/|$)/);
  const currentLocale = localeMatch ? localeMatch[1] : null;

  if (
    !currentLocale ||
    !locales.includes(currentLocale) ||
    currentLocale !== defaultLocale
  ) {
    const newPath =
      pathname.replace(/^\/[a-z]{2}/, `/${defaultLocale}`) ||
      `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(new URL(newPath, request.url));
  }

  const intlMiddleware = createMiddleware(cachedConfig);
  return intlMiddleware(request);
}
  */

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
