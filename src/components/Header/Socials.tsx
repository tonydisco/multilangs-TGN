'use client';
import {useAppContext} from '@/Providers';
import React, {useMemo} from 'react';
import {PureImage} from '../Common/Images';
import {getBySetting} from '@/utils/common';
import {socialMapping} from '@/utils/config';
import {ISocialItem, ISocialLink} from '@/models/interface';

const Socials = () => {
  const {utilSetting} = useAppContext();

  const getSocialLink: ISocialLink = useMemo(() => {
    const found = getBySetting('SocialNetworks', utilSetting?.data);
    return found?.value ? JSON.parse(found.value) : null;
  }, [utilSetting]);

  const mappingSolicalByName = useMemo(() => {
    const result = getSocialLink?.items?.reduce((acc, item) => {
      if (item.name) {
        const iconUrl = socialMapping[item.name];
        if (iconUrl) {
          acc.push({
            ...item,
            iconUrl
          });
        }
      }
      return acc;
    }, [] as Array<ISocialItem>);
    return result;
  }, [getSocialLink]);

  return (
    <>
      {mappingSolicalByName?.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              opacity: 1,
              width: '20px',
              cursor: 'pointer',
              transition: 'opacity 0.3s ease'
            }}
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <PureImage url={item.iconUrl} />
            </a>
          </div>
        );
      })}
    </>
  );
};

export default Socials;
