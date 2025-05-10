import {getPage} from '@/apis/pages';
import {TitlePageView} from '@/components/Hero';
import NotFoundPage from '@/components/NotFoundPage';
import PageLayout from '@/components/PageLayout';
import {IPageDefaultProps} from '@/models/interface';
import {getTranslations} from 'next-intl/server';
import '@/styles/newsDetail.scss';

const NewsPage = async ({params}: Readonly<IPageDefaultProps>) => {
  const {slug, locale} = await params;
  const t = await getTranslations({locale});

  const pageData = await getPage(slug);
  console.log({pageData});

  if (!pageData?.contents?.length) {
    return <NotFoundPage />;
  }

  const dataByLocale = pageData?.contents?.find(
    (item: any) => item.language === locale
  );

  return (
    <PageLayout
      title={<TitlePageView title={t('HeaderNavNews')} />}
      className="news-page-details-wrapper"
    >
      <div className="tgn-bkg-grayish-blue">
        <div className="news-page-details-content">
          <div className="container">
            <div className="news-page-details-content-inner">
              <div className="content-inner-flex">
                <div className="news-page-details-content-block">
                  {dataByLocale?.blocks?.map((block: any, index: number) => {
                    return (
                      <div key={index}>
                        <div
                          className="news-page-details-content-block-inner"
                          dangerouslySetInnerHTML={{__html: block.content}}
                        />
                      </div>
                    );
                  })}
                </div>
                {/* <div className="news-page-relative-content-block">
                  tin tuc moi nhat
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default NewsPage;
