import {TitlePageView} from '@/components/Hero';
import PageLayout from '@/components/PageLayout';
import ContactUs from './ContactUs';
import RecruitMent from './Recruitment';

export default function Page() {
  return (
    <PageLayout
      title={<TitlePageView title="liên hệ tuyển dụng" />}
      className="lhtd-wrapper"
    >
      <ContactUs />
      <RecruitMent />
    </PageLayout>
  );
}
