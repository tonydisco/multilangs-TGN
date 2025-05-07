'use client';
import {getEvents} from '@/apis/events';
import {getNews} from '@/apis/news';
import {CardBorder} from '@/components/Common/Card';
import {PureImage} from '@/components/Common/Images';
import {SingleTab} from '@/components/Common/News';
import {SectionBase} from '@/components/Common/Section';
import {SectionTitles} from '@/components/Common/Titles';
import {IProjects} from '@/models/interface';
import '@/styles/news.scss';
import {LIMIT_BASE_ITEMS} from '@/utils/config';
import {useEffect, useState} from 'react';
import CalendarList from './CalendarList';
import NewsList from './NewsList';

const News = () => {
  const [mixData, setMixData] = useState<{
    news: {
      posts: Array<IProjects>;
      total: number;
    };
    events: {
      posts: Array<IProjects>;
      total: number;
    };
  }>({
    news: {
      posts: [],
      total: 0
    },
    events: {
      posts: [],
      total: 0
    }
  });

  useEffect(() => {
    (async () => {
      const events = await getEvents({pageSize: LIMIT_BASE_ITEMS});
      const news = await getNews({pageSize: LIMIT_BASE_ITEMS});
      if (events?.total > 0) {
        setMixData((prev) => {
          return {
            ...prev,
            news,
            events
          };
        });
      }
    })();
  }, []);

  if (mixData.news.posts.length === 0) {
    return null;
  }
  return (
    <section className="tgn-news-section">
      <div className="tgn-news-circle">
        <PureImage url="/icon/CIRCLE-FULL-ICO.svg" />
      </div>

      <SectionBase contentClassName="tgn-news-section-content">
        <SectionTitles title="tin tức" style={{textAlign: 'center'}} />
        <CardBorder style={{height: 'auto', marginTop: 50}}>
          <div className="d-flex gap-5">
            <NewsList news={mixData.news} />
            <div className="tgn-pc-only tgn-news-events">
              <SingleTab titleTab="Lịch sự kiện" />
              <div className="tgn-news-event-content">
                <CalendarList events={mixData.events} />
              </div>
            </div>
          </div>
        </CardBorder>
      </SectionBase>
    </section>
  );
};

export default News;
