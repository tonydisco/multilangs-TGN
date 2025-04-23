import AboutUsView from './About-us';
import {HeaderTitleView} from '@/components/Hero';
import PageLayout from '@/components/PageLayout';

export default function Page() {
  return (
    <PageLayout title={<HeaderTitleView />} className="about-us-wrapper">
      <AboutUsView />
    </PageLayout>
  );
}
