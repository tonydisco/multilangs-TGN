import {CardBorder} from '@/components/Common/Card';
import {SingleTab} from '@/components/Common/News';
import {SectionBase} from '@/components/Common/Section';
import {TitlePageView} from '@/components/Hero';
import CalendarList from '@/components/Opening/News/CalendarList';
import PageLayout from '@/components/PageLayout';
import {IPageDefaultProps} from '@/models/interface';
import {getTranslations} from 'next-intl/server';
import NewsList from './NewsList';

export default async function Page({params}: Readonly<IPageDefaultProps>) {
  const {locale} = await params;
  const t = await getTranslations({locale});

  return (
    <PageLayout
      title={<TitlePageView title={t('HeaderNavNews')} />}
      className="news-wrapper"
    >
      <SectionBase contentStyle={{paddingBottom: 300}}>
        <CardBorder style={{height: 'auto', marginTop: 50}}>
          <div className="d-flex gap-5">
            <NewsList />
            <div className="tgn-news-event-header">
              <SingleTab
                titleTab="Lịch sự kiện"
                style={{
                  padding: '16px 0'
                }}
              />
              <div className="tgn-news-event-content">
                <CalendarList />
              </div>
              <SingleTab
                titleTab="tin tức khác"
                style={{
                  padding: '16px 0'
                }}
              />
            </div>
          </div>
        </CardBorder>
      </SectionBase>
    </PageLayout>
  );
}
