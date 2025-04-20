import React from 'react';
import parse from 'html-react-parser';
import {CardBase} from '@/components/Common/Card';

const Block = ({attribs, content}: any) => {
  const item = content?.contents?.find((x: any) => x.language == 'vi') ?? {};
  const excerpt = parse(item.excerpt, {});
  return (
    <div className={attribs.class} id={attribs.id}>
      <CardBase
        item={{
          title: item.title,
          content: excerpt,
          image: content.featuredImageUrl,
          linkTo: content.slug,
          btnText: 'Xem chi tiết'
        }}
      ></CardBase>
    </div>
  );
};

export default Block;
