'use client';
import {useAppContext} from '@/Providers';
import {ILanguages} from '@/models/interface';
import {usePathname, useRouter} from 'next/navigation';
import {useEffect, useState} from 'react';
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

  const [onBoxFocus, setOnBoxFocus] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const onUpdateLang = (lang: ILanguages) => {
    let newPathname = pathname;
    if (lang.code === defaultLocale) {
      if (pathname.startsWith(`/${locale}`)) {
        newPathname = pathname.replace(`/${locale}`, '');
      }
    } else if (!pathname.startsWith(`/${lang.code}`)) {
      const updatedPathname = pathname.startsWith(`/${locale}`)
        ? pathname.replace(`/${locale}`, '')
        : pathname;
      newPathname = `/${lang.code}${updatedPathname}`;
    }
    setActivedLang(lang.code);
    router.push(newPathname);
  };

  console.log({locales});

  const handleClickOutside = (event: MouseEvent) => {
    const selectBox = document.getElementById('tgn-select-box-overflow');
    if (selectBox && !selectBox.contains(event.target as Node)) {
      setOnBoxFocus(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="position-relative">
      <button
        className="position-relative"
        onClick={() => {
          setOnBoxFocus(!onBoxFocus);
        }}
      >
        {locales?.map((item, idx) => {
          return (
            <div key={idx}>
              <PureImage
                url={item.icon}
                style={{
                  width: '20px',
                  height: 'auto',
                  borderRadius: '2px'
                }}
                className={`default-lang ${item?.code === activedLang ? 'active-lang' : ''}`}
              />
            </div>
          );
        })}
      </button>
      <div
        id="tgn-select-box-overflow"
        className={`tgn-select-box-overflow ${onBoxFocus ? 'tgn-select-box-overflow-active' : ''}`}
      >
        {locales?.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`tgn-select-item ${item?.code === activedLang ? 'tgn-select-item-active' : ''}`}
            >
              <button onClick={() => onUpdateLang(item)}>
                <div className="d-flex align-items-center gap-2">
                  <PureImage
                    url={item.icon}
                    style={{
                      width: '20px',
                      height: 'auto',
                      borderRadius: '2px'
                    }}
                  />
                  <div style={{whiteSpace: 'nowrap'}}>{item.name}</div>
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
