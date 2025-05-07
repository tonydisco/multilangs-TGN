'use client';

import {NewsItem, NewsTabs} from '@/components/Common/News';
import Pagination from '@/components/Common/Pagination';
import {IGetPostResponse} from '@/models/interface';
import {useAppContext} from '@/Providers';
import {parseDate} from '@/utils/common';
import {newsTabs, routes} from '@/utils/config';
import {useState} from 'react';

const NewsList = (props: {news: IGetPostResponse}) => {
  const {news} = props;
  const {locale} = useAppContext();

  const [projectData, setProjectData] = useState({
    data: news.posts,
    loading: false,
    total: news.total,
    page: 1,
    limit: 10
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
