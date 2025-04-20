import {Locale} from 'next-intl';
import {ReactNode} from 'react';
import {ISetting, ILanguages} from './interface';

export type TSetting = 'General' | 'SocialNetworks' | 'Media';

export type ImageMode = 'contain' | 'fill' | 'cover' | 'none' | 'scale-down';
export type ImagePositionType =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'center'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-center'
  | 'bottom-center'
  | 'left-center'
  | 'right-center';

export type TRootLayout = {
  children: ReactNode;
  locale: Locale;
  defaultLocale: string;
  locales: ILanguages[];
  messages: any;
  setting: ISetting;
};
