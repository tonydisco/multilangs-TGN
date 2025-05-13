import {getPage} from '@/apis/pages';
import {SectionBase} from '@/components/Common/Section';
import {SectionTitles} from '@/components/Common/Titles';
import NotFoundPage from '@/components/NotFoundPage';
import PageLayout from '@/components/PageLayout';
import {IPageDefaultProps} from '@/models/interface';

const JobDescription = async ({params}: Readonly<IPageDefaultProps>) => {
  const {slug, locale} = await params;

  const pageData = await getPage(slug);

  console.log('====================================');
  console.log({pageData});
  console.log('====================================');

  if (!pageData?.contents?.length) {
    return <NotFoundPage />;
  }

  const dataByLocale = pageData?.contents?.find(
    (item: any) => item.language === locale
  );

  return (
    <PageLayout className="job-page-details-wrapper">
      <SectionBase style={{paddingTop: 100}}>
        <SectionTitles title={dataByLocale.title} />
        {dataByLocale?.blocks?.map((block: any, index: number) => {
          return (
            <section
              key={index}
              className="job-page-details-content"
              dangerouslySetInnerHTML={{__html: block.content}}
            />
          );
        })}
      </SectionBase>
    </PageLayout>
  );
};
export default JobDescription;
