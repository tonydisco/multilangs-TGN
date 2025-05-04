'use client';
import React, {useState} from 'react';
import {PureImage} from './Images';

const NewsTabs = ({
  tabs,
  onCb
}: {
  tabs: Array<{
    title: string;
    value: string;
    id: string;
  }>;
  onCb?: (tab: string | number) => void;
}) => {
  const [tabSelected, setTabSelected] = useState(0);

  if (!tabs || tabs.length === 0) {
    return null;
  }

  const handleTabClick = (index: number, id: string) => {
    setTabSelected(index);
    onCb?.(id);
  };

  return (
    <div className="tgn-newslist-tabs">
      {tabs.map((item, index) => {
        const actived = index === tabSelected;
        return (
          <div key={item?.id}>
            <button onClick={() => handleTabClick(index, item?.id)}>
              <h3
                className={`tgn-newslist-tab tgn-title m-0 ${actived ? 'tgn-newslist-tab-active' : 'tgn-newslist-tab-inactive'}`}
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
  );
};

const NewsItem = ({
  title,
  date,
  imageUrl,
  shortDescription
}: {
  title: string;
  date: string;
  imageUrl: string;
  shortDescription?: string;
}) => {
  return (
    <div className="tgn-newsitem-container">
      <div className="tgn-newsitem-image-container">
        <PureImage url={imageUrl} mode="cover" />
      </div>
      <div className="tgn-newsitem-content">
        <div>
          <h5 className="tgn-newsitem-title">{title}</h5>
          <p className="tgn-newsitem-description tgn-base-limit-lines tgn-base-limit-two-lines">
            {shortDescription}
          </p>
        </div>
        <div className="tgn-newsitem-footer">
          <PureImage url="/icon/ICON-CALENDAR.svg" style={{width: 12}} />
          <div>{date}</div>
        </div>
      </div>
    </div>
  );
};

const SingleTab = ({
  titleTab,
  style
}: {
  titleTab: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div style={{position: 'relative', ...style}}>
      <h3 className="tgn-news-event-title tgn-title m-0">{titleTab}</h3>
      <div className="tgn-news-event-line" />
    </div>
  );
};

export {NewsItem, NewsTabs, SingleTab};
