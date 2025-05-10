'use client';

import {useState} from 'react';
import {parseDate} from '@/utils/common';
import {useAppContext} from '@/Providers';
import {LIMIT_BASE_ITEMS, newsTabs, routes} from '@/utils/config';
import {IGetPostResponse} from '@/models/interface';
import Pagination from '@/components/Common/Pagination';
import {NewsItem, NewsTabs} from '@/components/Common/News';

const NewsList = (props: {news: IGetPostResponse}) => {
  const {news} = props;
  const {locale} = useAppContext();

  console.log('====================================');
  console.log({news});
  console.log('====================================');

  const [projectData, setProjectData] = useState({
    data: news.posts,
    loading: false,
    total: news.total,
    page: 1,
    limit: LIMIT_BASE_ITEMS
  });

  const handleNext = () => {
    if (projectData.page * projectData.limit < projectData.total) {
      setProjectData({
        ...projectData,
        page: projectData.page + 1
      });
    }
  };

  const handlePrev = () => {
    if (projectData.page > 1) {
      setProjectData({
        ...projectData,
        page: projectData.page - 1
      });
    }
  };

  const onPaginationChange = (page: number) => {
    setProjectData({
      ...projectData,
      page
    });
  };
  const startIndex = (projectData.page - 1) * projectData.limit;
  const endIndex = startIndex + projectData.limit;
  const data = projectData.data.slice(startIndex, endIndex);

  return (
    <div className="position-relative">
      <div>
        <NewsTabs tabs={newsTabs} />
        <div className="tgn-newslist-content">
          {data.map((item) => {
            const contentByLocale = item?.contents?.find(
              (content) => content.language === locale
            );
            if (contentByLocale) {
              return (
                <div key={item.id} className="tgn-news-item">
                  <NewsItem
                    locale={locale}
                    linkTo={routes.news + `/${item.slug}`}
                    title={contentByLocale.title}
                    imageUrl={item.featuredImageUrl}
                    date={parseDate(item.publicationDate)}
                    shortDescription={contentByLocale.excerpt}
                  />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
      <div className="news-pagination">
        <Pagination
          total={projectData.total}
          limit={projectData.limit}
          page={projectData.page}
          onPrev={handlePrev}
          onNext={handleNext}
          onPageChange={onPaginationChange}
        />
      </div>
    </div>
  );
};

export default NewsList;
