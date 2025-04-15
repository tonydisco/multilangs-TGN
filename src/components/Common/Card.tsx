'use client';
import {Button} from './Button';
import {PureImage} from './Images';
import React, {ReactNode} from 'react';
import {ICardProps} from '@/models/interface';

interface ICardBorderProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
const CardBorder = (props: ICardBorderProps) => {
  const {children, className, style} = props;

  return (
    <div
      className={`base-card-full-border ${className}`}
      style={{
        padding: 24,
        height: 300,
        ...style
      }}
    >
      {children}
    </div>
  );
};

const CardBase = (props: {item: ICardProps}) => {
  const {item} = props;

  return (
    <CardBorder
      style={{
        ...item?.cardStyle
      }}
    >
      <div
        className={`d-flex align-items-stretch h-100 gap-3 ${item?.isReverse ? 'flex-row-reverse' : ''}`}
      >
        <div
          className="field-of-production-item__content h-100 w-100"
          style={{
            flex: item?.flex?.left ?? 1
          }}
        >
          <div className="d-flex flex-column justify-content-between h-100">
            <div>
              <h3 className="tgn-box-title text-start">{item?.title}</h3>
              <div
                style={{
                  color: '#616161',
                  marginTop: 20
                }}
                className="text-start fs-12px md:fs-14px"
              >
                {item?.content}
              </div>
            </div>
            <div>
              <Button
                btnProps={{
                  text: item?.btnText ?? 'Xem thêm',
                  linkTo: item?.linkTo
                }}
              />
            </div>
          </div>
        </div>
        <div
          className="field-of-production-item__image w-100"
          style={{
            flex: item?.flex?.right ?? 1
          }}
        >
          <div className="w-100 h-100 overflow-hidden rounded-4">
            <PureImage
              url={item?.image}
              mode={item?.imgMode ?? 'cover'}
              style={{
                ...item?.imageStyle
              }}
            />
          </div>
        </div>
      </div>
    </CardBorder>
  );
};

export {CardBase, CardBorder};
