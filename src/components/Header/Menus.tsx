'use client';
import {useTranslations} from 'next-intl';
import {Fragment} from 'react';
import LocaleLink from '../Common/LinkByLocale';
import {useAppContext} from '@/Providers';

const Menus = () => {
  const t = useTranslations();
  const {locale} = useAppContext();

  const menuByLocale = [
    {name: t('HeaderNavHome'), path: '/'},
    {name: t('HeaderNavAboutUs'), path: '/gioi-thieu'},
    {name: t('HeaderNavBusinessAreas'), path: '/linh-vuc-hoat-dong'},
    {name: t('HeaderNavProductionCapacity'), path: '/nang-luc-san-xuat'},
    {name: t('HeaderNavProducts'), path: '/san-pham'},
    {name: t('HeaderNavProjects'), path: '/du-an'},
    {name: t('HeaderNavNews'), path: '/tin-tuc'},
    {name: t('HeaderNavContactRecruitment'), path: '/lien-he-tuyen-dung'}
  ];

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
      {menuByLocale.map((item, index) => {
        return (
          <Fragment key={index}>
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
            {index !== menuByLocale.length - 1 && <div className="line-btw" />}
          </Fragment>
        );
      })}
    </ul>
  );
};

export default Menus;
