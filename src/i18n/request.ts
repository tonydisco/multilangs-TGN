import {hasLocale} from 'next-intl';
import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
// import {fetchTranslations} from '@/apis/langs';

export default getRequestConfig(async ({requestLocale}) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  // const translations = await fetchTranslations();

  const getMess = await import(`../../messages/${locale}.json`);
  console.log({getMess});

  return {
    locale,
    messages: getMess.default
    // messages: translations[locale]
  };
});
