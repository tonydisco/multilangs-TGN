import {PureImage} from '@/components/Common/Images';
import CalendarList from './CalendarList';
import NewsList from './NewsList';
import './news.css';

const News = () => {
  return (
    <section className="tgn-news-section">
      <div className="tgn-news-circle">
        <PureImage url="/icon/CIRCLE-FULL-ICO.svg" />
      </div>
      <div className="app-container tgn-news-container">
        <div className="tgn-news-header">
          <h2 className="tgn-news-title">tin tức</h2>
        </div>
        <div className="tgn-news-content-wrapper">
          <div className="base-card-full-border tgn-news-card">
            <div className="tgn-news-flex-container">
              <div className="tgn-news-list-container">
                <NewsList />
              </div>
              <div className="tgn-news-calendar-container">
                <div className="tgn-news-event-header">
                  <div style={{padding: '15px 0', position: 'relative'}}>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
