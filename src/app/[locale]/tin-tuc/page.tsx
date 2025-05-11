import {getEvents} from '@/apis/events';
import {getNews} from '@/apis/news';
import {CardBorder} from '@/components/Common/Card';
import {SingleTab} from '@/components/Common/News';
import {SectionBase} from '@/components/Common/Section';
import {TitlePageView} from '@/components/Hero';
import CalendarList from '@/components/Opening/News/CalendarList';
import NewsList from '@/components/Opening/News/NewsList';
import PageLayout from '@/components/PageLayout';
import {IPageDefaultProps} from '@/models/interface';
import '@/styles/news.scss';
import {LIMIT_BASE_ITEMS} from '@/utils/config';
import {getTranslations} from 'next-intl/server';

export default async function Page({params}: Readonly<IPageDefaultProps>) {
  const {locale} = await params;
  const t = await getTranslations({locale});
  const newHighlight = await getNews({categories: 'News_Highlight'});
  const newMarket = await getNews({categories: 'News_Market'});
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
              <NewsList
                allNews={{
                  highlight: newHighlight,
                  market: newMarket
                }}
              />
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
