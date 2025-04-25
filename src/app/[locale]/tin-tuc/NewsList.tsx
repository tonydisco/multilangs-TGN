'use client';

import {NewsItem, NewsTabs} from '@/components/Common/News';
import Pagination from '@/components/Common/Pagination';
import {newsTabs} from '@/utils/config';
import {newsItems} from '@/mockData';
import React, {useState} from 'react';

const NewsList = () => {
  const [projectData, setProjectData] = useState({
    data: newsItems,
    loading: false,
    total: newsItems.length,
    page: 1,
    limit: 3
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
          {data.map((item) => (
            <div key={item.id} className="tgn-news-item">
              <NewsItem
                title={item.title}
                date={item.date}
                imageUrl={item.imageUrl}
                shortDescription="Trong quá trình xây dựng, việc chọn vật liệu phù hợp đóng vai trò quan trọng trong việc đảm bảo chất lượng và độ bền của công trình xây dựng. Bê tông tươi là một trong những vật liệu xây dựng phổ biến nhất hiện nay, được sử dụng rộng rãi trong các"
              />
            </div>
          ))}
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
