import {TRootLayout} from '@/models/types';
import {AppProvider} from '@/Providers';
import '@/styles/global.css';
import {GoogleAnalytics} from '@next/third-parties/google';
import {NextIntlClientProvider} from 'next-intl';
import Footer from '../Footer';
import Header from '../Header';

const RootLayout = ({children, locale, GGkey}: Readonly<TRootLayout>) => {
  return (
    <>
      <NextIntlClientProvider>
        <AppProvider locale={locale}>
          <>
            <Header locale={locale} />
            {children}
            <Footer />
          </>
        </AppProvider>
      </NextIntlClientProvider>
      {GGkey && <GoogleAnalytics gaId={GGkey} />}
    </>
  );
};

export default RootLayout;
