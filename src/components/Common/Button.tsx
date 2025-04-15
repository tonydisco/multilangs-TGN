import Link from 'next/link';
import React from 'react';
import {PureImage} from './Images';
import {IButtonProps} from '@/models/interface';

const Button = (props: {btnProps?: IButtonProps}) => {
  const {btnProps} = props;
  if (btnProps?.content) {
    return (
      <button
        onClick={() => btnProps?.onBtn?.() ?? null}
        className="app-btn-default"
        style={{...btnProps?.style}}
      >
        {btnProps.content}
      </button>
    );
  }
  const BtnInner = () => {
    return (
      <div className="app-btn-default-flex">
        {btnProps?.text && (
          <span style={{fontWeight: 500}}>{btnProps?.text}</span>
        )}

        <PureImage style={{width: 12}} url="/landing/ICON-ARROW.svg" />
      </div>
    );
  };
  if (btnProps?.linkTo) {
    return (
      <button className="app-btn-default" style={{...btnProps?.style}}>
        <Link href={btnProps?.linkTo ?? '#'}>
          <BtnInner />
        </Link>
      </button>
    );
  }
  return (
    <button
      className="app-btn-default"
      onClick={() => btnProps?.onBtn?.() ?? null}
      style={{...btnProps?.style}}
    >
      <BtnInner />
    </button>
  );
};

export {Button};
