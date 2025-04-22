import Link from 'next/link';
import React from 'react';
import {PureImage} from './Images';
import {IButtonProps} from '@/models/interface';

const Button = (props: {btnProps?: IButtonProps}) => {
  const {btnProps = {}} = props;
  const {text, content, linkTo, onBtn, style, ...rest} = btnProps;
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
  const BtnInner = () => {
    return (
      <div className="app-btn-default-flex">
        {text && <span style={{fontWeight: 500}}>{text}</span>}
        <PureImage style={{width: 12}} url="/landing/ICON-ARROW.svg" />
      </div>
    );
  };
  if (linkTo) {
    return (
      <button className="app-btn-default" style={{...style}}>
        <Link href={linkTo ?? '#'}>
          <BtnInner />
        </Link>
      </button>
    );
  }
  return (
    <button
      className="app-btn-default"
      onClick={() => onBtn?.() ?? null}
      style={{...style}}
    >
      <BtnInner />
    </button>
  );
};

export {Button};
