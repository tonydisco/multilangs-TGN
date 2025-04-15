import {getSettings} from '@/apis/settings';
import {routing} from '@/i18n/routing';
import {hasLocale, Locale} from 'next-intl';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {ReactNode} from 'react';

import RootLayout from '@/components/Layout';
import {Montserrat} from 'next/font/google';

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
  // Enable static rendering
  setRequestLocale(locale);

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
      </head>
      <body className={montserrat.className}>
        <RootLayout locale={locale} GGkey={GGkey}>
          {children}
        </RootLayout>
      </body>
    </html>
  );
}
