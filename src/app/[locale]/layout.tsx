/* eslint-disable @next/next/no-page-custom-font */
import './styles.css';
import {ReactNode} from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import {routing} from '@/i18n/routing';
import {notFound} from 'next/navigation';
import {getSettings} from '@/apis/settings';
import {GoogleAnalytics} from '@next/third-parties/google';
import {hasLocale, Locale, NextIntlClientProvider} from 'next-intl';
import {getTranslations, setRequestLocale} from 'next-intl/server';

type Props = {
  children: ReactNode;
  params: Promise<{locale: Locale}>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata(props: Omit<Props, 'children'>) {
  const {locale} = await props.params;

  const t = await getTranslations({locale, namespace: 'LocaleLayout'});

  return {
    title: t('title')
  };
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<Props>) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;

  let GGkey = '';
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const setting = await getSettings();
  const findGGKey = setting?.result?.data.find(
    (item) => item.key === 'General'
  );
  if (findGGKey) {
    const findGGKeyValue = JSON.parse(findGGKey.value);
    if (findGGKeyValue?.gA4Id) {
      GGkey = findGGKeyValue.gA4Id;
    }
  }
  // "{\"siteTitle\":\"TNG Group\",\"siteIcon\":\"\",\"tagline\":\"Sự hài lòng của bạn là thước đo sự tồn tại và phát triển của chúng tôi!\",\"gA4Id\":\"-\"}"

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html className="h-full" lang={locale}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
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
      </head>
      <body>
        <NextIntlClientProvider>
          <Header locale={locale} />
          {children}
          <Footer />
        </NextIntlClientProvider>
        {GGkey && <GoogleAnalytics gaId={GGkey} />}
      </body>
    </html>
  );
}
