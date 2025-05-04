import React from 'react';

const CalendarList = () => {
  return (
    <div className="tgn-calendarlist-container">
      {[1, 2, 3, 4, 5].map((_, idx) => {
        return (
          <div key={idx} className="tgn-calendar-item">
            <CalendarItem />
          </div>
        );
      })}
    </div>
  );
};

export default CalendarList;

const CalendarItem = () => {
  return (
    <div className="tgn-calendar-container">
      <div className="tgn-calendar-card">
        <div className="tgn-calendar-content">
          <div className="tgn-calendar-month">03/2025</div>
          <div className="tgn-calendar-day">01</div>
        </div>
      </div>
      <div className="tgn-calendar-text tgn-base-limit-lines tgn-base-limit-two-lines">
        TGN Group - Chào Xuân 2025 Sinh nhật 16 tuổi TGN Group
      </div>
    </div>
  );
};
