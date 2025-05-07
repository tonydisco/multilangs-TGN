'use client';
import {IGetPostResponse} from '@/models/interface';
import {useAppContext} from '@/Providers';
import {parseDate} from '@/utils/common';
import {dayOnlyFormat, monthOnlyFormat} from '@/utils/dayjs';
import React from 'react';

const CalendarList = (props: {events: IGetPostResponse}) => {
  const {events} = props;
  const {locale} = useAppContext();
  return (
    <div className="tgn-calendarlist-container">
      {events.posts.map((item) => {
        const contentByLocale = item?.contents?.find(
          (content) => content.language === locale
        );
        return (
          <div key={item.id} className="tgn-calendar-item">
            <CalendarItem
              date={item.publicationDate}
              shortDescription={contentByLocale?.excerpt}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CalendarList;

const CalendarItem = (props: {date: string; shortDescription?: string}) => {
  const {date, shortDescription} = props;
  return (
    <div className="tgn-calendar-container">
      <div className="tgn-calendar-card">
        <div className="tgn-calendar-content">
          <div className="tgn-calendar-month">
            {parseDate(date, monthOnlyFormat)}
          </div>
          <div className="tgn-calendar-day">
            {parseDate(date, dayOnlyFormat)}
          </div>
        </div>
      </div>
      <div className="tgn-calendar-text tgn-base-limit-lines tgn-base-limit-two-lines">
        {shortDescription || 'N/A'}
      </div>
    </div>
  );
};
