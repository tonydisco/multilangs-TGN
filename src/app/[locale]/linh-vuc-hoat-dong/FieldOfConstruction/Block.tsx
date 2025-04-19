import React from 'react';
import {PureImage} from '../../../../components/Common/Images';
import parse from 'html-react-parser';
import Link from 'next/link';

const Block = ({attribs, content}: any) => {
  const item = content?.contents?.find((x: any) => x.language == 'vi') ?? {};
  const block = item.blocks.length > 0 ? item.blocks[0] : {};
  const html = parse(block.content, {
    replace: (domNode: any) => {
      if (domNode.attribs && domNode.attribs['auto-block-code']) {
        // const blockCode = domNode.attribs['auto-block-code'];
        return domNode;
      }
      return domNode;
    }
  });
  return (
    <div className={attribs.class} id={attribs.id}>
      <div
        className="base-card-full-border base-card-full-border-fop"
        style={{
          padding: 24,
          position: 'relative',
          height: 340
        }}
      >
        <div className="d-flex align-items-stretch h-100 gap-3">
          <div className="field-of-production-item__content h-100 w-100">
            <div className="d-flex flex-column justify-content-between h-100">
              <div>
                <h3 className="tgn-box-title text-start" style={{fontSize: 22}}>
                  {item.title}
                </h3>
                <div
                  style={{
                    color: '#616161',
                    marginTop: 20
                  }}
                  className="text-start fs-12px md:fs-14px"
                >
                  {html}
                </div>
              </div>
              <div className="text-start">
                <button className="app-btn-default">
                  <Link href={`/${content.slug}`}>
                    <div className="app-btn-default-flex">
                      <span style={{fontWeight: 500}}>Xem chi tiết</span>
                      <PureImage
                        style={{width: 12}}
                        url="/landing/ICON-ARROW.svg"
                      />
                    </div>
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="field-of-production-item__image w-100">
            <div className="w-100 h-100 overflow-hidden rounded-4">
              <PureImage
                url={content.featuredImageUrl}
                style={{
                  objectFit: 'cover'
                }}
              ></PureImage>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block;
