'use client';
import {useMenu} from '@/hooks/useMenu';
import {useAppContext} from '@/Providers';
import {Fragment} from 'react';
import LocaleLink from '../Common/LinkByLocale';
import {v4 as uuid} from 'uuid';

const Menus = () => {
  const {locale} = useAppContext();
  const {menus} = useMenu();

  return (
    <ul
      style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        position: 'relative',
        listStyle: 'none',
        marginBottom: '0'
      }}
    >
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
                  textDecoration: 'none'
                }}
              >
                {item.name}
              </LocaleLink>
            </li>
            {index !== menus.length - 1 && <div className="line-btw" />}
          </Fragment>
        );
      })}
    </ul>
  );
};

export default Menus;
