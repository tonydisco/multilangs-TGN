import {fetchTranslations} from '@/apis/langs';
import {hasLocale} from 'next-intl';
import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({requestLocale}) => {
  // Typically corresponds to the `[locale]` segment
  const {translations, result} = await fetchTranslations();

  const defaultLocale: any = result?.languages?.find((item) => item.isDefault);
  const supportedLocales: any[] = result?.languages?.map((item) => item.code);

  const requested = await requestLocale;
  const locale = hasLocale(supportedLocales, requested)
    ? requested
    : defaultLocale;

  return {
    locale,
    // messages: getMess.default
    messages: translations[locale]
  };
});
