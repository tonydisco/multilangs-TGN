'use client';
import {useMenu} from '@/hooks/APIs/useMenu';
import {useAppContext} from '@/Providers';
import {Fragment} from 'react';
import LocaleLink from '../Common/LinkByLocale';
import {v4 as uuid} from 'uuid';
import {usePathname} from 'next/navigation';

export const reverseRouteTranslations: {
  [key: string]: {[key: string]: string};
} = {
  en: {
    projects: 'du-an',
    'about-us': 'gioi-thieu',
    'contact-us': 'lien-he-tuyen-dung',
    'activity-areas': 'linh-vuc-hoat-dong',
    'production-capacity': 'nang-luc-san-xuat',
    products: 'san-pham',
    news: 'tin-tuc',
    'terms-of-service': 'dieu-khoan-su-dung',
    'privacy-policy': 'chinh-sach-bao-mat'
  },
  vi: {
    'du-an': 'du-an',
    'gioi-thieu': 'gioi-thieu',
    'lien-he-tuyen-dung': 'lien-he-tuyen-dung',
    'linh-vuc-hoat-dong': 'linh-vuc-hoat-dong',
    'nang-luc-san-xuat': 'nang-luc-san-xuat',
    'san-pham': 'san-pham',
    'tin-tuc': 'tin-tuc',
    'dieu-khoan-su-dung': 'dieu-khoan-su-dung',
    'chinh-sach-bao-mat': 'chinh-sach-bao-mat'
  }
};
const Menus = (props: {style?: React.CSSProperties; cbFunc?: () => void}) => {
  const {locale} = useAppContext();
  const {menus} = useMenu();
  const {style, cbFunc} = props;

  const pathName = usePathname();

  const getActiveClass = (menuPath: string) => {
    // Normalize both paths to avoid trailing slash issues
    const normalize = (path: string) => path.replace(/\/+$/, '');

    // Remove the locale prefix from pathName for comparison
    const pathWithoutLocale = pathName.replace(/^\/[a-z]{2}(\/|$)/, '/');

    // Translate menuPath using reverseRouteTranslations for current locale
    const segments = menuPath.split('/').filter(Boolean);
    const translatedSegments = segments.map((segment) => {
      const translation = reverseRouteTranslations[locale]?.[segment];
      return translation || segment;
    });
    const translatedMenuPath = '/' + translatedSegments.join('/');

    const active =
      normalize(pathWithoutLocale) === normalize(translatedMenuPath)
        ? 'active'
        : '';

    return active;
  };
  return (
    <>
      {menus?.map((item, index) => {
        const actievClassName = getActiveClass(item.path);

        return (
          <Fragment key={uuid()}>
            <li
              style={{
                position: 'relative'
              }}
              onClick={cbFunc}
            >
              <LocaleLink
                className={`tgn-nav-menu-item tgn-nav-menu-item-default-color ${actievClassName}`}
                locale={locale}
                href={item.path}
                style={{
                  ...style
                }}
              >
                {item.name}
              </LocaleLink>
            </li>
            {index !== menus.length - 1 && <div className="line-btw" />}
          </Fragment>
        );
      })}
    </>
  );
};

export default Menus;
