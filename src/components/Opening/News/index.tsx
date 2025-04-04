import {PureImage} from '@/components/Common/Images';
import CalendarList from './CalendarList';
import NewsList from './NewsList';

const News = () => {
  return (
    <section
      style={{
        backgroundColor: '#FFF6F2',
        position: 'relative',
        padding: '75px',
        overflow: 'hidden'
      }}
      className="section-news"
    >
      <div
        style={{
          position: 'absolute',
          width: 500,
          height: 500,
          bottom: -200,
          right: -100
        }}
      >
        <PureImage url="/icon/CIRCLE-FULL-ICO.svg" />
      </div>
      <div className="app-container" style={{position: 'relative', zIndex: 2}}>
        <div style={{textAlign: 'center'}}>
          <h2
            style={{
              fontWeight: '700',
              fontSize: '32px',
              textTransform: 'uppercase'
            }}
          >
            tin tức
          </h2>
        </div>
        <div
          style={{
            position: 'relative',
            padding: '75px 0'
          }}
        >
          <div
            className="base-card-full-border"
            style={{
              padding: 16,
              backgroundColor: 'rgba(255, 255, 255, 0.8)'
            }}
          >
            <div style={{display: 'flex', gap: 20}}>
              <div style={{flex: 2.8}}>
                <NewsList />
              </div>
              <div style={{flex: 1.2}}>
                <div>
                  <div style={{position: 'relative'}}>
                    <h3
                      style={{
                        fontWeight: 'bold',
                        textTransform: 'capitalize',
                        transition: 'all 0.3s ease',
                        color: '#6D3E2F',
                        padding: '15px 0'
                      }}
                    >
                      Lịch sự kiện
                    </h3>
                    <div
                      className="ink-line-bottom"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: 1,
                        backgroundColor: '#6D3E2F',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  </div>
                  <div style={{paddingTop: 16}}>
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
