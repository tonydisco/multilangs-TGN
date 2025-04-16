import React from 'react';
import {PureImage} from './Images';

interface PaginationProps {
  total: number;
  limit: number;
  page: number;
  onPrev: () => void;
  onNext: () => void;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  total,
  limit,
  page,
  onPrev,
  onNext,
  onPageChange
}) => {
  const totalPages = Math.ceil(total / limit);
  return (
    <div style={{display: 'flex', gap: 20, alignItems: 'center'}}>
      <button className="tgn-partners-btn" onClick={onPrev}>
        <PureImage url="/icon/ARROW-ICON.svg" />
      </button>

      {Array.from({length: totalPages}).map((_, idx) => {
        const active = page === idx + 1;
        return (
          <div key={idx}>
            <button
              onClick={() => onPageChange(idx + 1)}
              style={{
                fontSize: 16,
                width: 30,
                height: 30,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '100%',
                color: active ? '#834e3d' : '#616161',
                fontWeight: 500,
                border: `1px solid ${active ? '#834e3d' : 'transparent'}`,
                transition: 'all 0.3s ease'
              }}
            >
              {idx + 1}
            </button>
          </div>
        );
      })}
      <button
        className="tgn-partners-btn tgn-partners-btn-next"
        style={{
          transform: 'rotate(180deg)'
        }}
        onClick={onNext}
      >
        <PureImage url="/icon/ARROW-ICON.svg" />
      </button>
    </div>
  );
};

export default Pagination;
