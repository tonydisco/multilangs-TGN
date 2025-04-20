'use client';
import React from 'react';
import FieldOfBusiness from './FieldOfBusiness';
import FieldOfProduction from './FieldOfProduction';
import FieldOfExtraction from './FieldOfExtraction';
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
            if (domNode.attribs && domNode.attribs['auto-block-code']) {
              const blockCode = domNode.attribs['auto-block-code'];
              return (
                <Block
                  attribs={domNode.attribs}
                  content={pageContent.children.find(
                    (x: any) =>
                      x.slug === blockCode ||
                      x.slug == 'san-xuat-be-tong-thuong-pham'
                  )}
                />
              );
            }
            return domNode;
          }
        });
        return <div key={index}>{html}</div>;
      })}
      <FieldOfProduction />
      <FieldOfBusiness />
      <FieldOfExtraction />
    </>
  );
};

export default FieldOfConstruction;
