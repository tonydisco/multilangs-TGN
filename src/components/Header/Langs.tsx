'use client';
import {useAppContext} from '@/Providers';
import {Languages} from '@/models/interface';
import {usePathname, useRouter} from 'next/navigation';
import {useState} from 'react';
import {PureImage} from '../Common/Images';
import './style.css';

const mapping = {
  vi: 'vi',
  en: 'en'
};

export const onMappingLocale = (locale: string) => {
  return mapping[locale as keyof typeof mapping];
};

const LanguageSwitcher = (props: {locale: string}) => {
  const {locale} = props;
  const [activedLang, setActivedLang] = useState<string>(locale);
  const {defaultLocale, locales} = useAppContext();

  const router = useRouter();
  const pathname = usePathname();

  const onUpdateLang = (lang: Languages) => {
    let newPathname = '';
    setActivedLang(lang.code);

    console.log({lang}, {defaultLocale}, {locale}, {pathname});
    if (lang.code === defaultLocale) {
      const foundLocale = locales?.find((item) => item.code !== locale);
      if (foundLocale && pathname === '/') {
        newPathname = pathname.replace(pathname, foundLocale?.code);
      }
      // `/${foundLocale?.code}${pathname}`;
    } else if (lang.code === activedLang) {
      if (lang.code !== defaultLocale) {
        newPathname = `/${lang.code}${newPathname}`;
      }
      const foundLocale = locales?.find((item) => item.code !== locale);
      if (foundLocale) {
        newPathname = pathname.replace(locale, foundLocale.code);
      }
    } else if (lang.code !== defaultLocale) {
      console.log('lang.code !== defaultLocale');
      newPathname = `/${lang.code}${newPathname}`;
    }
    console.log('newPathname', newPathname);

    router.push(newPathname);
  };

  return (
    <div className="position-relative">
      {locales?.map((item, idx) => {
        return (
          <button onClick={() => onUpdateLang(item)} key={idx}>
            <PureImage
              url={item.icon}
              style={{
                width: '20px',
                height: 'auto',
                borderRadius: '2px'
              }}
              className={`default-lang ${item?.code === activedLang ? 'active-lang' : ''}`}
            />
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
