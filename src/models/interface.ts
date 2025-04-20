import React from 'react';
import {ImageMode} from './types';

export interface ApiResult<T> {
  isSuccess: boolean;
  result: T;
  statusCode: number;
  failureReason: string;
  data: object;
}
export interface ICardProps {
  title: string;
  content: React.ReactNode;
  image: string;
  linkTo: string;
  btnText?: string;
  cardStyle?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
  className?: string;
  imgMode?: ImageMode;
  flex?: {
    left: number | string;
    right: number | string;
  };
  isReverse?: boolean;
}
export interface IButtonProps {
  text?: string;
  content?: React.ReactNode;
  linkTo?: string;
  onBtn?: () => void;
  style?: React.CSSProperties;
}

export interface Translation {
  key: string;
  value: string;
}

export interface Languages {
  code: string;
  translations: Translation[];
  icon?: string;
  name?: string;
  isDefault?: boolean;
  isDisabled?: boolean;
}
