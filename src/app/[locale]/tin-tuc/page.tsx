import {CardBorder} from '@/components/Common/Card';
import {SingleTab} from '@/components/Common/News';
import {SectionBase} from '@/components/Common/Section';
import {TitlePageView} from '@/components/Hero';
import CalendarList from '@/components/Opening/News/CalendarList';
import PageLayout from '@/components/PageLayout';
import {IPageDefaultProps} from '@/models/interface';
import {getTranslations} from 'next-intl/server';
import NewsList from './NewsList';
import '@/styles/news.scss';
import {getNews} from '@/apis/news';
import {getEvents} from '@/apis/events';
import {LIMIT_BASE_ITEMS} from '@/utils/config';

export default async function Page({params}: Readonly<IPageDefaultProps>) {
  const {locale} = await params;
  const t = await getTranslations({locale});
  const news = await Promise.all([
    getNews({categories: 'News_Highlight'}),
    getNews({categories: 'News_Market'})
  ]).then((res) => {
    return res.reduce((acc: any, cur) => {
      if (cur?.posts?.length > 0) {
        return {
          ...acc,
          posts: [...(acc?.posts || []), ...(cur?.posts || [])],
          total: (acc?.total || 0) + (cur?.total || 0)
        };
      }
      return acc;
    }, []);
  });
  // const news = await getNews({categories: 'News_Highlight'});
  const events = await getEvents({pageSize: LIMIT_BASE_ITEMS});

  return (
    <PageLayout
      title={<TitlePageView title={t('HeaderNavNews')} />}
      className="news-page-wrapper"
    >
      <SectionBase contentStyle={{paddingBottom: 300}}>
        <CardBorder style={{height: 'auto', marginTop: 50}}>
          <div className="news-flex-box">
            <div className="tgn-news-list-wrapper">
              <NewsList news={news} />
            </div>
            {(() => {
              if (events?.posts?.length > 0) {
                return (
                  <div className="tgn-news-events-page tgn-news-events ">
                    <SingleTab titleTab="Lịch sự kiện" />
                    <div className="tgn-news-event-content">
                      <CalendarList events={events} />
                    </div>
                    {/* <div style={{marginTop: 30}}>
                      <SingleTab titleTab="tin tức khác" />
                    </div> */}
                  </div>
                );
              }
              return null;
            })()}
          </div>
        </CardBorder>
      </SectionBase>
    </PageLayout>
  );
}
