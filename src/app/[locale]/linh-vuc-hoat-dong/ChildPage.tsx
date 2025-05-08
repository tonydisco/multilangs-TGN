'use client';
import React from 'react';
import parse from 'html-react-parser';
import {useTranslations} from 'next-intl';
import {CardBase} from '@/components/Common/Card';

interface IChildPageProps {
  attribs: any;
  content: any;
  locale: string;
}

const ChildPage = ({attribs, content, locale}: IChildPageProps) => {
  const t = useTranslations();
  const item = content?.contents?.find((x: any) => x.language == locale) ?? {};
  const excerpt = parse(item.excerpt, {});
  return (
    <CardBase
      item={{
        title: item.title,
        content: excerpt,
        className: attribs.className,
        cardStyle: attribs.style,
        image: content.featuredImageUrl,
        linkTo: content.slug,
        btnText: t('Btn_ViewDetail')
      }}
    />
  );
};

export default ChildPage;
