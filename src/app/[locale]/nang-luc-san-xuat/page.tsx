import {TitlePageView} from '@/components/Hero';
import PageLayout from '@/components/PageLayout';
import NangLucSXPage from '@/components/FieldOfConstruction';

export default function PathnamesPage() {
  return (
    <PageLayout
      title={<TitlePageView title="Năng lực sản xuất" />}
      className="nlsx-wrapper"
    >
      <NangLucSXPage />
    </PageLayout>
  );
}
