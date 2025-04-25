'use client';
import {useAppContext} from '@/Providers';
import {ILanguages} from '@/models/interface';
import {usePathname, useRouter} from 'next/navigation';
import {useEffect, useMemo, useState} from 'react';
import {PureImage} from '../Common/Images';
import {
  dynamicRoutes,
  reverseRouteTranslations,
  routeTranslations
} from '@/utils/config';

const LanguageSwitcher = (props: {locale: string; iconW?: string}) => {
  const {locale, iconW} = props;
  const [activedLang, setActivedLang] = useState<string>(locale);
  const {defaultLocale, locales} = useAppContext();

  const [onBoxFocus, setOnBoxFocus] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const supportedLocales = useMemo(
    () => locales?.map((item) => item.code) ?? [],
    [locales]
  );

  const onSwitchLocale = (lang: ILanguages) => {
    if (lang.code === activedLang) return;

    // Split and filter out empty segments (handles leading/trailing slashes)
    const pathSegments = pathname.split('/').filter(Boolean);

    // Determine if the current URL omits the default locale
    const isDefaultLocaleOmitted = !supportedLocales.includes(pathSegments[0]);

    // Identify the route segment and dynamic segment if present
    const routeIdx = isDefaultLocaleOmitted ? 0 : 1;
    const currentSegment = pathSegments[routeIdx] || '';
    const isDynamicRoute = dynamicRoutes.includes(currentSegment);
    const dynamicSegment = isDynamicRoute
      ? pathSegments[routeIdx + 1] || ''
      : '';

    // Helper to translate route segment
    const getTranslatedRoute = (targetLocale: string, segment: string) => {
      const fileSystemSegment =
        reverseRouteTranslations[locale]?.[segment] || segment;
      return (
        routeTranslations[targetLocale]?.[fileSystemSegment] ||
        fileSystemSegment
      );
    };

    const translatedSegment = getTranslatedRoute(lang.code, currentSegment);

    // Build new path segments
    let newSegments: string[] = [];
    if (lang.code !== defaultLocale) {
      newSegments.push(lang.code);
    }
    newSegments.push(translatedSegment);
    if (isDynamicRoute && dynamicSegment) {
      newSegments.push(dynamicSegment);
    }

    // Preserve any additional segments (e.g., slugs, query params)
    const extraIdx = routeIdx + (isDynamicRoute ? 2 : 1);
    const remainingSegments = pathSegments.slice(extraIdx);
    if (remainingSegments.length) {
      newSegments = newSegments.concat(remainingSegments);
    }

    // Construct the new pathname
    const newPathname = '/' + newSegments.join('/');

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
        {locales?.map((item) => {
          return (
            <div key={item?.id}>
              <PureImage
                url={item.icon}
                style={{
                  width: iconW ?? '20px',
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
        {locales?.map((item) => {
          return (
            <div
              key={item?.id}
              className={`tgn-select-item ${item?.code === activedLang ? 'tgn-select-item-active' : ''}`}
            >
              <button onClick={() => onSwitchLocale(item)}>
                <div className="d-flex align-items-center gap-2">
                  <PureImage
                    url={item.icon}
                    style={{
                      width: iconW ?? '20px',
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
