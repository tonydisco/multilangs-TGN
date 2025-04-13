import AboutUsView from '@/components/About-us';
import {HeaderTitleView} from '@/components/Hero';
import PageLayout from '@/components/PageLayout';

export default function PathnamesPage() {
  return (
    <PageLayout title={<HeaderTitleView />} className="about-us-wrapper">
      <AboutUsView />
    </PageLayout>
  );
}
