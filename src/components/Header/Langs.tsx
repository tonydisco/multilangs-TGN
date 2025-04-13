'use client';
import React, {useRef, useState} from 'react';
import {PureImage} from '../Common/Images';
import './style.css';
import {useRouter} from 'next/navigation';
import {usePathname} from 'next/navigation';

const mapping = {
  'vi-VN': 'vi',
  'en-US': 'en'
};

const onMappingLocale = (locale: string) => {
  return mapping[locale as keyof typeof mapping];
};

const Languages = (props: {data: Array<any>; locale: string}) => {
  const {data, locale} = props;
  const [activedLang, setActivedLang] = useState<string>(locale);

  const refLang = useRef(data);

  const router = useRouter();
  const pathname = usePathname();

  const onUpdateLang = (lang: any) => {
    if (onMappingLocale(lang.code) === activedLang) {
      return;
    }
    setActivedLang(onMappingLocale(lang?.code));
    const newPathname = pathname.replace(
      `/${onMappingLocale(locale)}`,
      `/${onMappingLocale(lang.code)}`
    );
    router.push(newPathname);
  };

  return (
    <div className="position-relative">
      {refLang.current?.map((item, idx) => {
        return (
          <button onClick={() => onUpdateLang(item)} key={idx}>
            <PureImage
              url={item.icon}
              style={{
                width: '20px',
                height: 'auto',
                borderRadius: '2px'
              }}
              className={`default-lang ${onMappingLocale(item?.code) === activedLang ? 'active-lang' : ''}`}
            />
          </button>
        );
      })}
    </div>
  );
};

export default Languages;
