import React from 'react';
import {ImageMode} from './types';
import {Locale} from 'next-intl';

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
  imgClassName?: string;
}
export interface IButtonProps {
  text?: string;
  content?: React.ReactNode;
  linkTo?: string;
  onBtn?: () => void;
  style?: React.CSSProperties;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  textStyle?: React.CSSProperties;
}

export interface Translation {
  key: string;
  value: string;
}

export interface ILanguages {
  code: string;
  translations: Translation[];
  icon?: string;
  name?: string;
  isDefault?: boolean;
  isDisabled?: boolean;
  id: string;
}

export interface ISetting {
  data: Array<{
    id: string;
    key: string;
    value: string;
  }>;
}

export interface ISocialItem {
  enable?: boolean;
  link?: string;
  name?: string;
  iconUrl?: string;
}

export interface ISocialLink {
  items: Array<ISocialItem>;
}

export interface IPageDefaultProps {
  params: Promise<{locale: Locale; slug: string}>;
}
