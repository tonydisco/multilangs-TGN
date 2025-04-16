import {CardBorder} from '@/components/Common/Card';
import {SectionBase} from '@/components/Common/Section';
import {TitlePageView} from '@/components/Hero';
import CalendarList from '@/components/Opening/News/CalendarList';
import PageLayout from '@/components/PageLayout';
import {Locale} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {use} from 'react';
import NewsList from './NewsList';

type Props = {
  params: Promise<{locale: Locale}>;
};

export default function Page({params}: Readonly<Props>) {
  const {locale} = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <PageLayout
      title={<TitlePageView title="tin tức" />}
      className="news-wrapper"
    >
      <SectionBase contentStyle={{paddingBottom: 300}}>
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
    </PageLayout>
  );
}
