'use client';
import {PureImage} from '@/components/Common/Images';
import React, {useState} from 'react';

const tabs = [
  {
    title: 'tất cả',
    value: 'all'
  },
  {
    title: 'tin tức nổi bật',
    value: 'all'
  },
  {
    title: 'tin tức thị trường',
    value: 'all'
  }
];

const NewsList = () => {
  const [tabSelected, setTabSelected] = useState(0);

  return (
    <div style={{}}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 30,
          padding: '0 20px',
          position: 'relative'
        }}
      >
        {tabs.map((item, index) => {
          const actived = index === tabSelected;
          return (
            <div key={index}>
              <button style={{}} onClick={() => setTabSelected(index)}>
                <h3
                  style={{
                    fontWeight: 'bold',
                    textTransform: 'capitalize',
                    transition: 'all 0.3s ease',
                    color: actived ? '#000' : '#828282',
                    padding: '15px 0'
                  }}
                >
                  {item.title}
                </h3>
              </button>
              {actived && (
                <div
                  className="ink-line-bottom"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: 2,
                    backgroundColor: '#6D3E2F',
                    transition: 'all 0.3s ease'
                    // transform: `translateX(${index * 100}%)`
                  }}
                />
              )}
            </div>
          );
        })}
        <div
          className="ink-line-bottom"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: 1,
            backgroundColor: '#828282',
            transition: 'all 0.3s ease'
          }}
        />
      </div>

      <div className="news-content">
        <div style={{paddingTop: 16}}>
          <div style={{}}>
            {Array.from({length: 5}).map((_, index) => {
              return (
                <div
                  key={index}
                  className="news-item"
                  style={{padding: '15px'}}
                >
                  <NewsItem />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsList;

const NewsItem = () => {
  return (
    <div
      style={{
        display: 'flex',
        gap: 30
      }}
    >
      <div
        style={{
          overflow: 'hidden',
          borderRadius: 8,
          width: 300,
          height: 140
        }}
      >
        <PureImage url="/landing/NEWS/NEWS-THUMB.png" mode="cover" />
      </div>
      <div
        style={{
          color: '#212121',
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          justifyContent: 'space-between'
        }}
      >
        <div>
          <h5 style={{fontSize: 15, fontWeight: 700, marginBottom: 10}}>
            Cung cấp bê tông tươi cho dự án ABC tại Biên Hòa, Đồng Nai
          </h5>
          <p
            className="elipses-2-lines"
            style={{
              fontSize: 14,
              color: '#828282',
              lineHeight: '20px',
              maxWidth: 600,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2
            }}
          >
            Trong quá trình xây dựng, việc chọn vật liệu phù hợp đóng vai trò
            quan trọng trong việc đảm bảo chất lượng và độ bền của công trình
            xây dựng. Bê tông tươi là một trong những vật liệu xây dựng phổ biến
            nhất hiện nay, được sử dụng rộng rãi trong các
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            gap: 10,
            alignItems: 'center',
            fontSize: 12,
            color: '#616161'
          }}
        >
          <div
            style={{
              width: 12,
              height: 12
            }}
          >
            <PureImage url="/icon/ICON-CALENDAR.svg" />
          </div>
          <div>1/3/2025</div>
        </div>
      </div>
    </div>
  );
};
