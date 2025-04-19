import {NextRequest, NextResponse} from 'next/server';

const locales = ['vi', 'en'];
const defaultLocale = 'vi';

export default async function middleware(request: NextRequest) {
  const {pathname} = new URL(request.url);

  const shouldHandle =
    !pathname.startsWith('/api') &&
    !pathname.startsWith('/_next') &&
    !pathname.includes('.');

  if (!shouldHandle) return NextResponse.next();

  const locale = locales.find(
    (loc) => pathname.startsWith(`/${loc}/`) || pathname === `/${loc}`
  );

  if (!locale) {
    return NextResponse.rewrite(
      new URL(
        `/${defaultLocale}${pathname === '/' ? '' : pathname}`,
        request.url
      )
    );
  }

  return NextResponse.next();
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  // matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
