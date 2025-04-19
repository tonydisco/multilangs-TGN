export function getLocalizedPath(path: string, locale: string): string {
  if (locale === 'vi') {
    return path; // Không thêm tiền tố cho locale mặc định
  }
  return `/${locale}${path}`;
}
