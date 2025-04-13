import {TitlePageView} from '@/components/Hero';
import PageLayout from '@/components/PageLayout';
import FieldOfConstruction from '@/components/FieldOfConstruction';
import {getLvhd} from '@/apis/pages';

export default async function Page() {
  const content = await getLvhd('linh-vuc-hoat-dong');

  console.log('====================================');
  console.log({content});
  console.log('====================================');

  return (
    <PageLayout
      title={<TitlePageView title="Lĩnh vực hoạt động" />}
      className="lvhd-wrapper"
    >
      <FieldOfConstruction />
    </PageLayout>
  );
}
