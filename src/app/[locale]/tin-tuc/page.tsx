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

export default async function Page({params}: Readonly<IPageDefaultProps>) {
  const {locale} = await params;
  const t = await getTranslations({locale});

  return (
    <PageLayout
      title={<TitlePageView title={t('HeaderNavNews')} />}
      className="news-page-wrapper"
    >
      <SectionBase contentStyle={{paddingBottom: 300}}>
        <CardBorder style={{height: 'auto', marginTop: 50}}>
          <div className="news-flex-box">
            <NewsList />
            <div className="tgn-news-events-page tgn-news-events ">
              <SingleTab titleTab="Lịch sự kiện" />
              <div className="tgn-news-event-content">
                <CalendarList />
              </div>
              <div style={{marginTop: 30}}>
                <SingleTab titleTab="tin tức khác" />
              </div>
            </div>
          </div>
        </CardBorder>
      </SectionBase>
    </PageLayout>
  );
}
