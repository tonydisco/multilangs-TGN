import React from 'react';

const CalendarList = () => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((item, idx) => {
        return (
          <div
            key={idx}
            style={{
              padding: '10px 0'
            }}
          >
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
    <div
      style={{
        display: 'flex',
        gap: 30,
        color: '#212121'
      }}
    >
      <div
        style={{
          width: 56,
          backgroundColor: '#DFDFDF',
          borderRadius: 2
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            padding: '0 1px'
          }}
        >
          <div style={{}}>
            <div style={{fontSize: 10, padding: '2px 6px'}}>03/2025</div>
          </div>
          <div
            style={{
              fontSize: 20,
              color: '#212121',
              fontWeight: 700,
              textAlign: 'center',
              backgroundColor: '#fff',
              width: '100%',
              position: 'relative',
              borderBottomRightRadius: 2,
              borderBottomLeftRadius: 2,
              top: -1
            }}
          >
            01
          </div>
        </div>
      </div>
      <div style={{fontSize: 14}}>
        TGN Group - Chào Xuân 2025 Sinh nhật 16 tuổi TGN Group
      </div>
    </div>
  );
};
