import {TitlePageView} from '@/components/Hero';
import PageLayout from '@/components/PageLayout';
import FieldOfConstruction from '@/components/FieldOfConstruction';

export default function PathnamesPage() {
  // Enable static rendering
  return (
    <PageLayout
      title={<TitlePageView title="Lĩnh vực hoạt động" />}
      className="lvhd-wrapper"
    >
      <FieldOfConstruction />
    </PageLayout>
  );
}
