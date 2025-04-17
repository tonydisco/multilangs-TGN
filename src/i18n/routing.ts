import {fetchTranslations} from '@/apis/langs';
import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['vi', 'en'],
  defaultLocale: 'vi',
  pathnames: {
    '/': '/',
    '/pathnames': {
      vi: '/'
    }
  }
});

export async function getRoutingConfig() {
  const {result} = await fetchTranslations();
  const locale = result.languages.find((item) => item.isDefault);

  const supportedLocales: any[] = result.languages.map((item) => item.code);

  return defineRouting({
    locales: supportedLocales, // ['en', 'vi'] từ backend
    defaultLocale: locale?.code, // 'vi' từ backend
    pathnames: {
      '/': '/',
      '/pathnames': {
        vi: '/',
        en: '/'
      }
    }
  });
}
