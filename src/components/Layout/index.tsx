import '@/styles/global.scss';
import Footer from '../Footer';
import Header from '../Header';
import {AppProvider} from '@/Providers';
import {TRootLayout} from '@/models/types';
import {NextIntlClientProvider} from 'next-intl';

const RootLayout = ({
  children,
  locale,
  defaultLocale,
  locales,
  messages,
  setting
}: Readonly<TRootLayout>) => {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <AppProvider
        locale={locale}
        locales={locales}
        utilSetting={setting}
        defaultLocale={defaultLocale}
      >
        <>
          <Header locale={locale} />
          {children}
          <Footer />
        </>
      </AppProvider>
    </NextIntlClientProvider>
  );
};

export default RootLayout;
