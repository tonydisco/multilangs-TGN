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
    allNews: {
      highlight: {
        posts: Array<IProjects>;
        total: number;
      };
      market: {
        posts: Array<IProjects>;
        total: number;
      };
    };
    events: {
      posts: Array<IProjects>;
      total: number;
    };
  }>({
    allNews: {
      highlight: {
        posts: [],
        total: 0
      },
      market: {
        posts: [],
        total: 0
      }
    },
    events: {
      posts: [],
      total: 0
    }
  });

  useEffect(() => {
    (async () => {
      const events = await getEvents({pageSize: LIMIT_BASE_ITEMS});
      const newHighlight = await getNews({
        pageSize: LIMIT_BASE_ITEMS,
        categories: 'News_Highlight'
      });
      const newMarket = await getNews({
        pageSize: LIMIT_BASE_ITEMS,
        categories: 'News_Market'
      });
      setMixData((prev) => {
        return {
          ...prev,
          allNews: {
            highlight: newHighlight,
            market: newMarket
          },
          events
        };
      });
    })();
  }, []);

  return (
    <section className="tgn-news-section">
      <div className="tgn-news-circle">
        <PureImage url="/icon/CIRCLE-FULL-ICO.svg" />
      </div>

      <SectionBase contentClassName="tgn-news-section-content">
        <SectionTitles title="tin tức" style={{textAlign: 'center'}} />
        <CardBorder style={{height: 'auto', marginTop: 50}}>
          <div className="d-flex gap-5">
            <NewsList
              allNews={{
                ...mixData.allNews
              }}
              noPagin
            />
            {(() => {
              if (mixData.events.posts.length === 0) {
                return null;
              }
              return (
                <div className="tgn-pc-only tgn-news-events">
                  <SingleTab titleTab="Lịch sự kiện" />
                  <div className="tgn-news-event-content">
                    <CalendarList events={mixData.events} />
                  </div>
                </div>
              );
            })()}
          </div>
        </CardBorder>
      </SectionBase>
    </section>
  );
};

export default News;
