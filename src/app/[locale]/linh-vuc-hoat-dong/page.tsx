import {TitlePageView} from '@/components/Hero';
import PageLayout from '@/components/PageLayout';
import FieldOfConstruction from './FieldOfConstruction';
import {getPage} from '@/apis/pages';

export default async function Page({params}: any) {
  const getPageResult = await getPage('linh-vuc-hoat-dong');
  const {locale} = await params;
  console.dir(locale);
  const content = getPageResult.contents.find((x: any) => x.language == locale);
  return (
    <PageLayout
      title={<TitlePageView title={content?.title} />}
      className="lvhd-wrapper"
    >
      <FieldOfConstruction pageContent={getPageResult} />
    </PageLayout>
  );
}
