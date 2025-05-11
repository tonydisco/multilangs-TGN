'use client';

import {NewsItem, NewsTabs} from '@/components/Common/News';
import Nodata from '@/components/Common/Nodata';
import Pagination from '@/components/Common/Pagination';
import {IGetPostResponse, INewsListProps, IProjects} from '@/models/interface';
import {useAppContext} from '@/Providers';
import {parseDate} from '@/utils/common';
import {LIMIT_BASE_ITEMS, newsTabs, routes} from '@/utils/config';
import {useEffect, useMemo, useState} from 'react';

const NewsList = (props: INewsListProps) => {
  const {
    allNews: {highlight, market},
    noPagin
  } = props;

  const newsAll = useMemo(() => {
    return [highlight, market].reduce((acc: any, cur) => {
      if (cur?.posts?.length > 0) {
        return {
          ...acc,
          posts: [...(acc?.posts || []), ...(cur?.posts || [])],
          total: (acc?.total || 0) + (cur?.total || 0)
        };
      }
      return acc;
    }, []);
  }, [highlight, market]);

  const [dataList, setDataList] = useState(newsAll);

  const onUpdateTab = (tab: string | number) => {
    setDataList([]);
    if (tab === 'News_All') {
      setDataList(newsAll);
    }
    if (tab === 'News_Highlight') {
      setDataList(highlight);
    }
    if (tab === 'News_Market') {
      setDataList(market);
    }
  };

  useEffect(() => {
    setDataList(newsAll);
  }, [newsAll]);

  return (
    <div className="position-relative">
      <NewsTabs tabs={newsTabs} onCb={onUpdateTab} />
      {(() => {
        if (dataList?.posts?.length > 0) {
          return (
            <div className="tgn-news-list">
              <ListNewsByTab list={dataList} noPagin={noPagin} />
            </div>
          );
        }
        return (
          <div className="tgn-news-list">
            <Nodata />
          </div>
        );
      })()}
    </div>
  );
};

export default NewsList;

const ListNewsByTab = (props: {list: IGetPostResponse; noPagin?: boolean}) => {
  const {list, noPagin} = props;
  const {locale} = useAppContext();

  const [projectData, setProjectData] = useState({
    data: list.posts,
    loading: false,
    total: list.total,
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

  if (list.total === 0) {
    return <Nodata />;
  }

  return (
    <div className="tgn-newslist-content position-relative">
      {data.map((item: IProjects) => {
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
      {noPagin ? null : (
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
      )}
    </div>
  );
};
