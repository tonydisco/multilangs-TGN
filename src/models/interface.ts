import React from 'react';
import {HttpMethod, ImageMode, TtypeId, TtypeNews} from './types';
import {Locale} from 'next-intl';

export interface ApiResult<T> {
  isSuccess: boolean;
  result: T;
  statusCode: number;
  failureReason: string;
  data: object;
}
export interface ICardProps {
  title: string | React.ReactNode;
  content: React.ReactNode;
  image: string;
  linkTo: string;
  btnText?: string;
  cardStyle?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
  className?: string;
  cardClassName?: string;
  desClassName?: string;
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

export interface ISliderItem {
  description?: string;
  name?: string;
  title?: string;
  id: string;
  url: string;
}
export interface IAlbumProps {
  description?: string;
  files?: Array<ISliderItem>;
  name?: string;
  id: string;
  numberOfItems?: number;
}

export interface ITimelineProps {
  roadMap: {
    posts: Array<{
      title: string;
      id: string;
      contents: Array<{
        language: string;
        title: string;
        excerpt: string;
        blocks: Array<{
          content: string;
        }>,
      }>;
      featuredImageUrl: string;
    }>;
  };
}

export interface IGetPostsOption {
  language?: string;
  page?: number;
  pageSize?: number;
  query?: string;
  orderBy?: string;
  direction?: string;
  typeId?: TtypeId;
  categories?: TtypeNews;
  attributes?: string;
  [key: string]: any;
}

export interface ApiRequestOptions {
  method?: HttpMethod;
  body?: any;
  headers?: Record<string, string>;
  params?: Record<string, string | number | boolean | undefined>;
}

export interface IProjects {
  id: string;
  title: string;
  slug: string;
  featuredImageId: string;
  featuredImageUrl: string;
  publicationDate: string;
  typeCode: string;
  stylesheets: any[];
  contents: Array<{
    language: string;
    title: string;
    excerpt: string;
    blocks?: Array<{
      index: number;
      name: string;
      content: string;
    }>;
  }>;
}
export interface IGetPostResponse {
  total: number;
  posts: Array<IProjects>;
}

export interface INewsListProps {
  allNews: {
    highlight: IGetPostResponse;
    market: IGetPostResponse;
  };
  noPagin?: boolean;
}

export interface IJobList {
  data: Array<any> | null;
  loading: boolean;
  total: number;
  page: number;
  limit: number;
}
