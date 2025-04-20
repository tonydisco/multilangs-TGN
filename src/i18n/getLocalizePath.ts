export function getLocalizedPath(
  path: string,
  locale: string,
  defaultLocale?: string
): string {
  if (locale === defaultLocale) {
    return path;
  }
  return `/${locale}${path}`;
}
