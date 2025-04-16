import './news.css';
import NewsList from './NewsList';
import CalendarList from './CalendarList';
import {PureImage} from '@/components/Common/Images';
import {SectionTitles} from '@/components/Common/Titles';
import {SectionBase} from '@/components/Common/Section';
import {CardBorder} from '@/components/Common/Card';

const News = () => {
  return (
    <section className="tgn-news-section">
      <div className="tgn-news-circle">
        <PureImage url="/icon/CIRCLE-FULL-ICO.svg" />
      </div>

      <SectionBase contentStyle={{paddingTop: 50}}>
        <SectionTitles title="tin tức" style={{textAlign: 'center'}} />
        <CardBorder style={{height: 'auto', marginTop: 50}}>
          <div className="d-flex gap-5">
            <NewsList />
            <div className="tgn-news-event-header">
              <div style={{padding: '16px 0', position: 'relative'}}>
                <h3 className="tgn-news-event-title tgn-title m-0">
                  Lịch sự kiện
                </h3>
                <div className="tgn-news-event-line" />
              </div>
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
