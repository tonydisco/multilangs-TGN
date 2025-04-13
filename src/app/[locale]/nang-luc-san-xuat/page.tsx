import {TitlePageView} from '@/components/Hero';
import PageLayout from '@/components/PageLayout';

export default function PathnamesPage() {
  return (
    <PageLayout
      title={<TitlePageView title="Năng lực sản xuất" />}
      className="nlsx-wrapper"
    >
      <div style={{height: 300}}></div>
    </PageLayout>
  );
}
