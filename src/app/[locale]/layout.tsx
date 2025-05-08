import {getSettings} from '@/apis/settings';
import {routing} from '@/i18n/routing';
import {hasLocale, Locale} from 'next-intl';
import {notFound} from 'next/navigation';
import {ReactNode} from 'react';

import {fetchTranslations} from '@/apis/langs';
import RootLayout from '@/components/Layout';
import {Montserrat} from 'next/font/google';
import {GoogleAnalytics} from '@next/third-parties/google';
import {getBySetting} from '@/utils/common';

type Props = {
  children: ReactNode;
  params: Promise<{locale: Locale}>;
};

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'], // Specify desired weights
  style: ['normal', 'italic'], // Optional: include italic if needed
  subsets: ['latin'], // Optimize for Latin characters
  display: 'swap' // Prevent layout shift
});

export async function generateMetadata() {
  return {
    title: 'TGN - Thế Giới Nhà'
  };
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<Props>) {
  const {locale} = await params;
  const {result, translations} = await fetchTranslations();
  let GGkey = '';
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const setting = await getSettings();
  const findGGKey = getBySetting('General', setting?.result?.data);

  if (findGGKey?.value) {
    const findGGKeyValue = JSON.parse(findGGKey.value);
    if (findGGKeyValue?.gA4Id) {
      GGkey = findGGKeyValue.gA4Id;
    }
  }

  const findDefaultLocale = result?.languages?.find((item) => item.isDefault);

  return (
    <html lang={locale}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          rel="stylesheet"
          href="https://tgn-api.vikiworld.vn/styles/bs-utilities.min.css"
        />
        {/* <link
          rel="stylesheet"
          href="https://tgn-api.vikiworld.vn/styles/tgn-styles.min.css"
        /> */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />

        {GGkey && <GoogleAnalytics gaId={'G-328938273897'} />}
      </head>

      <body className={montserrat.className}>
        {(() => {
          if (findDefaultLocale?.code) {
            return (
              <RootLayout
                locale={locale}
                setting={setting?.result}
                locales={result.languages}
                messages={translations[locale]}
                defaultLocale={findDefaultLocale?.code}
              >
                {children}
              </RootLayout>
            );
          }
          return null;
        })()}
      </body>
    </html>
  );
}
