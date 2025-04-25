import React from 'react';
import parse from 'html-react-parser';
import {CardBase} from '@/components/Common/Card';
import {getTranslations} from 'next-intl/server';

interface IChildPageProps {
  attribs: any;
  content: any;
  locale: string;
}
const ChildPage = async ({attribs, content, locale}: IChildPageProps) => {
  const t = await getTranslations();
  const item = content?.contents?.find((x: any) => x.language == locale) ?? {};
  const excerpt = parse(item.excerpt, {});
  return (
    <div id={attribs.id}>
      <CardBase
        item={{
          title: item.title,
          content: excerpt,
          image: content.featuredImageUrl,
          linkTo: content.slug,
          btnText: t('ViewDetail')
        }}
      />
    </div>
  );
};

export default ChildPage;
