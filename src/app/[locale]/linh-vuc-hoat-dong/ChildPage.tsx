import React from 'react';
import parse from 'html-react-parser';
import {CardBase} from '@/components/Common/Card';
import {getTranslations} from 'next-intl/server';

const ChildPage = async ({attribs, content, locale}: any) => {
  const t = await getTranslations();
  const item = content?.contents?.find((x: any) => x.language == locale) ?? {};
  const excerpt = parse(item.excerpt, {});
  return (
    <div className={attribs.class} id={attribs.id}>
      <CardBase
        item={{
          title: item.title,
          content: excerpt,
          image: content.featuredImageUrl,
          linkTo: content.slug,
          btnText: t('ViewDetail')
        }}
      ></CardBase>
    </div>
  );
};

export default ChildPage;
