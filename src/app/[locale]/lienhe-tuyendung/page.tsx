import {TitlePageView} from '@/components/Hero';
import PageLayout from '@/components/PageLayout';
import NangLucSXPage from '@/components/FieldOfConstruction';
import {Locale} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {use} from 'react';

type Props = {
  params: Promise<{locale: Locale}>;
};

export default function PathnamesPage({params}: Readonly<Props>) {
  const {locale} = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <PageLayout
      title={<TitlePageView title="liên hệ tuyển dụng" />}
      className="lhtd-wrapper"
    >
      <NangLucSXPage />
    </PageLayout>
  );
}
