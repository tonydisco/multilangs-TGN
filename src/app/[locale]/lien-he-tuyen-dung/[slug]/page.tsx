import {getPage} from '@/apis/pages';
import {SectionBase} from '@/components/Common/Section';
import NotFoundPage from '@/components/NotFoundPage';
import {IPageDefaultProps} from '@/models/interface';
import JobDetail from './Detail';

const JobDescription = async ({params}: Readonly<IPageDefaultProps>) => {
  const {slug, locale} = await params;

  const pageData = await getPage(slug);

  if (!pageData?.contents?.length) {
    return <NotFoundPage />;
  }

  const dataByLocale = pageData?.contents?.find(
    (item: any) => item.language === locale
  );

  return (
    <SectionBase
      contentClassName="wrapper-for-lastchild"
      className="tgn-bkg-grayish-blue"
    >
      <JobDetail data={dataByLocale} />
    </SectionBase>
  );
};
export default JobDescription;
