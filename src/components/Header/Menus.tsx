'use client';
import {Fragment} from 'react';
import {v4 as uuid} from 'uuid';
import {useAppContext} from '@/Providers';
import {useMenu} from '@/hooks/APIs/useMenu';
import LocaleLink from '../Common/LinkByLocale';

const Menus = (props: {style?: React.CSSProperties; cbFunc?: () => void}) => {
  const {locale} = useAppContext();
  const {menus} = useMenu();
  const {style, cbFunc} = props;

  return (
    <>
      {menus?.map((item) => {
        return (
          <Fragment key={uuid()}>
            <li
              style={{
                position: 'relative'
              }}
              onClick={cbFunc}
              className="tgn-menu-item"
            >
              <LocaleLink
                className={`tgn-nav-menu-item tgn-nav-menu-item-default-color`}
                locale={locale}
                href={item.path}
                style={{
                  ...style
                }}
              >
                {item.name}
              </LocaleLink>
            </li>
          </Fragment>
        );
      })}
    </>
  );
};

export default Menus;
