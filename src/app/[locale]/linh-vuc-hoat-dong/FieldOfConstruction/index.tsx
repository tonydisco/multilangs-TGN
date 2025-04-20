'use client';
import React from 'react';
import {useAppContext} from '@/Providers';
import parse from 'html-react-parser';
import Block from '@/app/[locale]/linh-vuc-hoat-dong/FieldOfConstruction/Block';

const FieldOfConstruction = ({pageContent}: any) => {
  const {locale} = useAppContext();
  const content = pageContent.contents.find((x: any) => x.language == locale);

  return (
    <>
      {content.blocks?.map((block: any, index: number) => {
        const html = parse(block.content, {
          replace: (domNode: any) => {
            if (domNode.attribs && domNode.attribs['data-auto-block-code']) {
              const blockCode = domNode.attribs['data-auto-block-code'];
              const arr = blockCode.split('](');
              // const code = arr[0].replace(']', '');
              const slug = arr[1].replace(')', '');
              const b = pageContent.children.find((x: any) => x.slug == slug);
              return b && <Block attribs={domNode.attribs} content={b} />;
            }
            return domNode;
          }
        });
        return <div key={index}>{html}</div>;
      })}
    </>
  );
};

export default FieldOfConstruction;
