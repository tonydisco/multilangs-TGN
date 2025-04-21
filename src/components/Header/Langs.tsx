'use client';
import {useAppContext} from '@/Providers';
import {ILanguages} from '@/models/interface';
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

  const onUpdateLang = (lang: ILanguages) => {
    setActivedLang(lang.code);
    let newPathname = pathname;
    if (lang.code === defaultLocale) {
      // If the selected language is the default locale, remove the locale prefix
      if (pathname.startsWith(`/${locale}`)) {
        newPathname = pathname.replace(`/${locale}`, '');
      }
    } else if (!pathname.startsWith(`/${lang.code}`)) {
      const updatedPathname = pathname.startsWith(`/${locale}`)
        ? pathname.replace(`/${locale}`, '')
        : pathname;
      newPathname = `/${lang.code}${updatedPathname}`;
    }

    router.push(newPathname);
  };

  return (
    <div className="position-relative">
      {/* <select name="locale" id="locale">
        {locales?.map((item, idx) => {
          return (
            <option value="audi" key={idx}>
              <div onClick={() => onUpdateLang(item)}>
                <PureImage
                  url={item.icon}
                  style={{
                    width: '20px',
                    height: 'auto',
                    borderRadius: '2px'
                  }}
                />
              </div>
            </option>
          );
        })}
      </select> */}
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
