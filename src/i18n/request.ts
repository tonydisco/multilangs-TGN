import {hasLocale} from 'next-intl';
import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
import {fetchTranslations} from '@/apis/langs';

export default getRequestConfig(async ({requestLocale}) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const {translations} = await fetchTranslations();

  return {
    locale,
    messages: translations[locale]
  };
});
