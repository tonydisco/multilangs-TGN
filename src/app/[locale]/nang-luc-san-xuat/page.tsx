import {getAlbum} from '@/apis/album';
import {TitlePageView} from '@/components/Hero';
import PageLayout from '@/components/PageLayout';
import {IPageDefaultProps} from '@/models/interface';
import '@/styles/productionCap.scss';
import {albums, pageBySlug} from '@/utils/config';
import {getTranslations} from 'next-intl/server';
import NLSXSlider from './Slider';
import {getPage} from '@/apis/pages';
import {Fragment} from 'react';
import {v4 as uuidv4} from 'uuid';
import parse from 'html-react-parser';

export default async function Page({params}: Readonly<IPageDefaultProps>) {
  const {locale} = await params;
  const t = await getTranslations({locale});
  const certData = await getAlbum(albums.Certificates);
  const pageContent = await getPage(pageBySlug.productionCapacity);
  const content = pageContent.contents.find((x: any) => x.language == locale);
  return (
    <PageLayout
      title={<TitlePageView title={t('HeaderNavProductionCapacity')} />}
      css={pageContent.stylesheets.map((x: any) => x.content).join('')}
      className="production-capacity-wrapper"
    >
      {content.blocks?.map((block: any) => {
        const html = parse(block.content, {
          replace: (domNode: any) => {
            if (domNode?.attribs?.['data-auto-block-code']) {
              const blockCode = domNode.attribs['data-auto-block-code'];
              const arr = blockCode.split('](');
              const code = arr[0].replace('[', '');
              if (code === 'CERTIFICATES') {
                return certData && <NLSXSlider masterData={certData} />;
              }
              return domNode;
            }
            return domNode;
          }
        });
        return <Fragment key={uuidv4()}>{html}</Fragment>;
      })}
    </PageLayout>
  );
}
