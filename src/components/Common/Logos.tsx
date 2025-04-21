'use client';
import {useAppContext} from '@/Providers';
import {getBySetting} from '@/utils/common';
import React from 'react';
import LocaleLink from './LinkByLocale';
import {routes} from '@/utils/config';
import {PureImage} from './Images';

const Logos = () => {
  const {utilSetting, locale} = useAppContext();
  let LOGO = '';
  const findInfos = getBySetting('General', utilSetting?.data);

  if (findInfos?.value) {
    const findInfosValue = JSON.parse(findInfos.value);
    if (findInfosValue?.siteLogo) {
      LOGO = findInfosValue.siteLogo;
    }
  }
  return LOGO ? (
    <LocaleLink href={routes.home} locale={locale}>
      <PureImage url={LOGO} />
    </LocaleLink>
  ) : null;
};

export default Logos;
