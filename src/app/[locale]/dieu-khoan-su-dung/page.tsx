import {getPage} from '@/apis/pages';
import {SectionTitles} from '@/components/Common/Titles';
import {IPageDefaultProps} from '@/models/interface';
import NotFoundPage from '../not-found';
import {pageBySlug} from '@/utils/config';

const Page = async ({params}: Readonly<IPageDefaultProps>) => {
  const {locale} = await params;
  const pageData = await getPage(pageBySlug.term);

  const findContentByLocale = pageData?.contents?.find(
    (item: any) => item.language === locale
  );

  return (
    <div className="tgn-terms-of-use-page">
      <div className="container">
        <div style={{padding: '75px 0 150px 0'}}>
          {(() => {
            if (findContentByLocale?.blocks?.length > 0) {
              return (
                <div>
                  <SectionTitles
                    style={{textAlign: 'center', padding: '25px 0'}}
                    title={findContentByLocale?.title}
                  />
                  {findContentByLocale.blocks.map((item: any) => {
                    return (
                      <div
                        key={item.id}
                        className="tgn-terms-of-use-block"
                        dangerouslySetInnerHTML={{__html: item.content}}
                      />
                    );
                  })}
                </div>
              );
            }
            return <NotFoundPage />;
          })()}
        </div>
      </div>
    </div>
  );
};

export default Page;
