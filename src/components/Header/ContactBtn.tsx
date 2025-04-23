'use client';
import React from 'react';
import LocaleLink from '../Common/LinkByLocale';
import {routes} from '@/utils/config';
import {useAppContext} from '@/Providers';
import {useTranslations} from 'next-intl';

const ContactBtn = () => {
  const {locale} = useAppContext();
  const t = useTranslations();
  return (
    <div
      style={{
        borderRadius: '8px',
        border: '1px solid #6D3E2F',
        padding: '0.125rem 1rem',
        color: '#6D3E2F',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}
    >
      <LocaleLink locale={locale} href={routes.contact}>
        <span
          style={{
            fontSize: '14px',
            lineHeight: '20px',
            textTransform: 'uppercase',
            fontWeight: 600
          }}
        >
          {t('NavContactUs')}
        </span>
      </LocaleLink>
    </div>
  );
};

export default ContactBtn;
