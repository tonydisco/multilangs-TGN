import {routing} from '@/i18n/routing';

// {
//   NotFoundPageDescription:'NotFoundPageDescription',
// }
declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: {[key: string]: string};
  }
}
