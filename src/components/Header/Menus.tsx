'use client';
import {useMenu} from '@/hooks/APIs/useMenu';
import {useAppContext} from '@/Providers';
import {Fragment} from 'react';
import LocaleLink from '../Common/LinkByLocale';
import {v4 as uuid} from 'uuid';

const Menus = (props: {style?: React.CSSProperties}) => {
  const {locale} = useAppContext();
  const {menus} = useMenu();
  const {style} = props;

  return (
    <>
      {menus?.map((item, index) => {
        return (
          <Fragment key={uuid()}>
            <li
              style={{
                position: 'relative'
              }}
            >
              <LocaleLink
                locale={locale}
                href={item.path}
                style={{
                  color: '#212121',
                  fontSize: '14px',
                  lineHeight: '20px',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  textWrap: 'nowrap',
                  textDecoration: 'none',
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
