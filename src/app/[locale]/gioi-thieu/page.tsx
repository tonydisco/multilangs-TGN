import AboutUsView from './About-us';
import {HeaderTitleView} from '@/components/Hero';
import PageLayout from '@/components/PageLayout';
import {IPageDefaultProps} from '@/models/interface';
import {getTranslations} from 'next-intl/server';
import '@/styles/aboutUs.scss';

export default async function Page({params}: Readonly<IPageDefaultProps>) {
  const {locale} = await params;
  const t = await getTranslations({locale});
  return (
    <PageLayout
      title={<HeaderTitleView text={t('Slogan')} />}
      className="about-us-wrapper"
    >
      <AboutUsView />
    </PageLayout>
  );
}
