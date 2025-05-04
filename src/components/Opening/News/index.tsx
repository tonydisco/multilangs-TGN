import '@/styles/news.scss';
import NewsList from './NewsList';
import CalendarList from './CalendarList';
import {PureImage} from '@/components/Common/Images';
import {SectionTitles} from '@/components/Common/Titles';
import {SectionBase} from '@/components/Common/Section';
import {CardBorder} from '@/components/Common/Card';
import {SingleTab} from '@/components/Common/News';

const News = () => {
  return (
    <section className="tgn-news-section">
      <div className="tgn-news-circle">
        <PureImage url="/icon/CIRCLE-FULL-ICO.svg" />
      </div>

      <SectionBase contentClassName="tgn-news-section-content">
        <SectionTitles title="tin tức" style={{textAlign: 'center'}} />
        <CardBorder style={{height: 'auto', marginTop: 50}}>
          <div className="d-flex gap-5">
            <NewsList />
            <div className="tgn-pc-only tgn-news-events">
              <SingleTab
                titleTab="Lịch sự kiện"
                style={{
                  padding: '16px 0'
                }}
              />
              <div className="tgn-news-event-content">
                <CalendarList />
              </div>
            </div>
          </div>
        </CardBorder>
      </SectionBase>
    </section>
  );
};

export default News;
