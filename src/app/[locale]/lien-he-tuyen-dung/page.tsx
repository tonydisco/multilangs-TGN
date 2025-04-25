import {TitlePageView} from '@/components/Hero';
import PageLayout from '@/components/PageLayout';
import ContactUs from './ContactUs';
import RecruitMent from './Recruitment';
import {getTranslations} from 'next-intl/server';
import {IPageDefaultProps} from '@/models/interface';
import '@/styles/contactUs.scss';

export default async function Page({params}: Readonly<IPageDefaultProps>) {
  const {locale} = await params;
  const t = await getTranslations({locale});
  return (
    <PageLayout
      title={<TitlePageView title={t('HeaderNavContactRecruitment')} />}
      className="contact-us-wrapper"
    >
      <ContactUs />
      <RecruitMent />
    </PageLayout>
  );
}
