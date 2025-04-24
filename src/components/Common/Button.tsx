'use client';
import {IButtonProps} from '@/models/interface';
import {useAppContext} from '@/Providers';
import {PureImage} from './Images';
import LocaleLink from './LinkByLocale';
import React from 'react';

const BtnInner = ({
  text,
  style
}: {
  text: string | undefined;
  style?: React.CSSProperties;
}) => {
  return (
    <div className="app-btn-default-flex">
      {text && (
        <span style={{fontWeight: 500, fontSize: 14, ...style}}>{text}</span>
      )}
      <PureImage style={{width: 12}} url="/landing/ICON-ARROW.svg" />
    </div>
  );
};

const Button = (props: {btnProps?: IButtonProps}) => {
  const {btnProps = {}} = props;
  const {text, content, linkTo, onBtn, style, textStyle, ...rest} = btnProps;

  const {locale} = useAppContext();
  if (content) {
    return (
      <button
        onClick={() => onBtn?.() ?? null}
        className="app-btn-default"
        style={{...style}}
        {...rest}
      >
        {content}
      </button>
    );
  }

  if (linkTo) {
    return (
      <button className="app-btn-default" style={{...style}}>
        <LocaleLink href={linkTo ?? '#'} locale={locale}>
          <BtnInner text={text} style={textStyle} />
        </LocaleLink>
      </button>
    );
  }
  return (
    <button
      className="app-btn-default"
      onClick={() => onBtn?.() ?? null}
      style={{...style}}
    >
      <BtnInner text={text} style={textStyle} />
    </button>
  );
};

export {Button};
