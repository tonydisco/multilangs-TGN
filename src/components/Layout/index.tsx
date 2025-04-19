import {TRootLayout} from '@/models/types';
import {AppProvider} from '@/Providers';
import '@/styles/global.css';
import {NextIntlClientProvider} from 'next-intl';
import Footer from '../Footer';
import Header from '../Header';

const RootLayout = ({children, locale}: Readonly<TRootLayout>) => {
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
    </>
  );
};

export default RootLayout;
