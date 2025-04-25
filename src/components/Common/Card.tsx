'use client';
import {ICardProps} from '@/models/interface';
import {ImageMode} from '@/models/types';
import {useAppContext} from '@/Providers';
import '@/styles/cards.css';
import {routes} from '@/utils/config';
import React, {ReactNode} from 'react';
import {Button} from './Button';
import {PureImage} from './Images';
import LocaleLink from './LinkByLocale';

interface ICardBorderProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const CardBase = (props: {item: ICardProps}) => {
  const {item} = props;

  return (
    <CardBorder
      style={{
        ...item?.cardStyle
      }}
    >
      <div
        className={`d-flex align-items-stretch h-100 gap-3 ${item?.isReverse ? 'flex-row-reverse' : ''} ${item?.className ?? ''}`}
      >
        <div
          className="field-of-production-item__content h-100 w-100"
          style={{
            flex: item?.flex?.left ?? 1
          }}
        >
          <div className="d-flex flex-column justify-content-between h-100 gap-5">
            <div>
              <h3 className="tgn-box-title text-start tgn-base-limit-two-lines">
                {item?.title}
              </h3>
              <div
                style={{
                  color: '#616161',
                  marginTop: 20
                }}
                className="text-start fs-12px md:fs-14px tgn-base-limit-two-lines tgn-limit-four-lines"
              >
                {item?.content}
              </div>
            </div>
            <div
              style={{
                textAlign: 'left'
              }}
            >
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
          <div
            className={`w-100 h-100 overflow-hidden rounded-4 ${item?.imgClassName ?? ''}`}
          >
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

const CardBorder = (props: ICardBorderProps) => {
  const {children, className, style} = props;

  return (
    <div
      className={`base-card-full-border ${className ?? ''}`}
      style={{
        padding: 24,
        minHeight: 300,
        ...style
      }}
    >
      {children}
    </div>
  );
};

const CardNoBorderLine = (props: ICardBorderProps) => {
  const {children, className, style} = props;

  return (
    <div
      className={`base-card-no-outline ${className}`}
      style={{
        padding: 16,
        height: 300,
        ...style
      }}
    >
      {children}
    </div>
  );
};

const CardProduct = (props: {item: {title: string; image: string}}) => {
  const {item} = props;

  const {locale} = useAppContext();
  return (
    <div className="tgn-product-grid-item grid-item base-card-full-border">
      <div className="tgn-product-item-content">
        <div className="tgn-product-item-header">
          <div className="tgn-product-item-title">{item.title}</div>
          <div className="tgn-btn-wrapper">
            <button className="app-btn-default tgn-product-item-btn">
              <LocaleLink locale={locale} href={routes.product}>
                <div className="tgn-product-item-btn-content">
                  <PureImage
                    className="tgn-product-item-arrow"
                    url="/landing/ICON-ARROW.svg"
                  />
                </div>
              </LocaleLink>
            </button>
          </div>
        </div>
        <div className="tgn-product-item-image-wrapper card-img-wrapper">
          <PureImage url={item.image} />
        </div>
        <div className="tgn-btn-wrapper-mobile">
          <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <div
              style={{
                fontSize: 12,
                whiteSpace: 'nowrap'
              }}
            >
              Xem thêm
            </div>
            <button className="app-btn-default tgn-product-item-btn">
              <LocaleLink locale={locale} href={routes.product}>
                <div className="tgn-product-item-btn-content">
                  <PureImage
                    url="/landing/ICON-ARROW.svg"
                    style={{
                      width: 10
                    }}
                  />
                </div>
              </LocaleLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardItem = (props: {
  item: {
    title: string;
    image: string;
    style?: React.CSSProperties;
    imgMode?: ImageMode;
  };
}) => {
  const {item} = props;
  return (
    <div
      className="card-item-wrapper base-card-full-border"
      style={{...item?.style}}
    >
      <div className="card-item-content">
        <div className="card-item-header">
          <div style={{flex: 2}} className="card-item-title">
            {item.title}
          </div>
          <div>
            <Button
              btnProps={{
                style: {
                  borderRadius: '100%',
                  width: 40,
                  height: 40,
                  padding: 0
                }
              }}
            />
          </div>
        </div>
        <div className="card-image-wrapper">
          <PureImage url={item.image} mode={item?.imgMode} />
        </div>
      </div>
    </div>
  );
};

export {CardBase, CardBorder, CardItem, CardNoBorderLine, CardProduct};
