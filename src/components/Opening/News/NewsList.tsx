'use client';
import {PureImage} from '@/components/Common/Images';
import React, {useState} from 'react';
import '../News/news.css';

const tabs = [
  {
    title: 'tất cả',
    value: 'all',
    id: 'tab-all'
  },
  {
    title: 'tin tức nổi bật',
    value: 'featured',
    id: 'tab-featured'
  },
  {
    title: 'tin tức thị trường',
    value: 'market',
    id: 'tab-market'
  }
];

// Define news items with unique IDs
const newsItems = [
  {
    id: 'news-1',
    title: 'Cung cấp bê tông tươi cho dự án ABC tại Biên Hòa, Đồng Nai',
    date: '1/3/2025',
    imageUrl: '/landing/NEWS/NEWS-THUMB.png'
  },
  {
    id: 'news-2',
    title: 'Khai trương showroom tại quận 9, TP.HCM',
    date: '5/3/2025',
    imageUrl: '/landing/NEWS/NEWS-THUMB.png'
  },
  {
    id: 'news-3',
    title: 'Ký kết hợp tác với đối tác chiến lược mới',
    date: '10/3/2025',
    imageUrl: '/landing/NEWS/NEWS-THUMB.png'
  },
  {
    id: 'news-4',
    title: 'Giới thiệu sản phẩm mới - Bê tông chất lượng cao',
    date: '15/3/2025',
    imageUrl: '/landing/NEWS/NEWS-THUMB.png'
  },
  {
    id: 'news-5',
    title: 'Tham gia triển lãm vật liệu xây dựng quốc tế 2025',
    date: '20/3/2025',
    imageUrl: '/landing/NEWS/NEWS-THUMB.png'
  }
];

const NewsList = () => {
  const [tabSelected, setTabSelected] = useState(0);

  return (
    <div className="tgn-newslist-container">
      <div className="tgn-newslist-tabs">
        {tabs.map((item, index) => {
          const actived = index === tabSelected;
          return (
            <div key={item.id}>
              <button onClick={() => setTabSelected(index)}>
                <h3
                  className={`tgn-newslist-tab ${actived ? 'tgn-newslist-tab-active' : 'tgn-newslist-tab-inactive'}`}
                >
                  {item.title}
                </h3>
              </button>
              {actived && <div className="tgn-active-ink-line" />}
            </div>
          );
        })}
        <div className="tgn-newslist-bottom-line" />
      </div>

      <div className="tgn-newslist-content">
        <div>
          <div>
            {newsItems.map((item) => (
              <div key={item.id} className="tgn-news-item">
                <NewsItem
                  title={item.title}
                  date={item.date}
                  imageUrl={item.imageUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsList;

const NewsItem = ({
  title,
  date,
  imageUrl
}: {
  title: string;
  date: string;
  imageUrl: string;
}) => {
  return (
    <div className="tgn-newsitem-container">
      <div className="tgn-newsitem-image-container">
        <PureImage url={imageUrl} mode="cover" />
      </div>
      <div className="tgn-newsitem-content">
        <div>
          <h5 className="tgn-newsitem-title">{title}</h5>
          <p className="tgn-newsitem-description">
            Trong quá trình xây dựng, việc chọn vật liệu phù hợp đóng vai trò
            quan trọng trong việc đảm bảo chất lượng và độ bền của công trình
            xây dựng. Bê tông tươi là một trong những vật liệu xây dựng phổ biến
            nhất hiện nay, được sử dụng rộng rãi trong các
          </p>
        </div>
        <div className="tgn-newsitem-footer">
          <div className="tgn-newsitem-calendar-icon">
            <PureImage url="/icon/ICON-CALENDAR.svg" />
          </div>
          <div>{date}</div>
        </div>
      </div>
    </div>
  );
};
