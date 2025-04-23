'use client';
import {useAppContext} from '@/Providers';
import {ILanguages} from '@/models/interface';
import {usePathname, useRouter} from 'next/navigation';
import {useEffect, useMemo, useState} from 'react';
import {PureImage} from '../Common/Images';
import './style.css';
import {reverseRouteTranslations, routeTranslations} from '@/utils/config';

const LanguageSwitcher = (props: {locale: string}) => {
  const {locale} = props;
  const [activedLang, setActivedLang] = useState<string>(locale);
  const {defaultLocale, locales} = useAppContext();

  const [onBoxFocus, setOnBoxFocus] = useState(false);
  console.log({locales});

  const router = useRouter();
  const pathname = usePathname();

  const supportedLocales = useMemo(
    () => locales?.map((item) => item.code) ?? [],
    [locales]
  );

  const onSwitchLocale = (lang: ILanguages) => {
    if (lang.code === activedLang) {
      return;
    }

    const pathSegments = pathname.split('/');
    const isDefaultLocaleOmitted = !supportedLocales.includes(pathSegments[1]);

    const currentSegment = isDefaultLocaleOmitted
      ? pathSegments[1] // No locale in URL, so first segment is the route
      : pathSegments[2] || ''; // Locale present, so second segment is the route

    // Check if the route is dynamic (e.g., 'tin-tuc', 'san-pham')
    const dynamicRoutes = ['tin-tuc', 'san-pham'];
    const isDynamicRoute = dynamicRoutes.includes(currentSegment);

    // Extract the dynamic segment (e.g., 'abc' in /en/news/abc)
    const dynamicSegment = isDynamicRoute
      ? pathSegments[isDefaultLocaleOmitted ? 2 : 3] || ''
      : '';

    const getTranslatedRoute = (newLocale: string, currentSegment: string) => {
      const fileSystemSegment =
        reverseRouteTranslations[locale]?.[currentSegment] || currentSegment;
      return (
        routeTranslations[newLocale]?.[fileSystemSegment] || fileSystemSegment
      );
    };

    const translatedSegment = getTranslatedRoute(lang.code, currentSegment);

    let newPathname = '';
    if (lang.code === defaultLocale) {
      newPathname = `/${translatedSegment}`;
      if (isDynamicRoute && dynamicSegment) {
        newPathname += `/${dynamicSegment}`; // Preserve dynamic segment (e.g., /tin-tuc/abc)
      }
      const remainingSegments =
        pathSegments
          .slice(
            isDefaultLocaleOmitted
              ? isDynamicRoute
                ? 3
                : 2
              : isDynamicRoute
                ? 4
                : 3
          )
          .join('/') || '';
      newPathname += remainingSegments ? `/${remainingSegments}` : '';
    } else {
      newPathname = `/${lang.code}/${translatedSegment}`;
      if (isDynamicRoute && dynamicSegment) {
        newPathname += `/${dynamicSegment}`; // Preserve dynamic segment (e.g., /vi/tin-tuc/abc)
      }
      const remainingSegments =
        pathSegments.slice(isDynamicRoute ? 4 : 3).join('/') || '';
      newPathname += remainingSegments ? `/${remainingSegments}` : '';
    }

    setActivedLang(lang.code);
    router.push(newPathname);
  };

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
              <button onClick={() => onSwitchLocale(item)}>
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
