import {getPage} from '@/apis/pages';
import {getRoadMap} from '@/apis/roadmap';
import {HeaderTitleView} from '@/components/Hero';
import PageLayout from '@/components/PageLayout';
import {IPageDefaultProps} from '@/models/interface';
import '@/styles/aboutUs.scss';
import {pageBySlug} from '@/utils/config';
import parse from 'html-react-parser';
import {getTranslations} from 'next-intl/server';
import {Fragment} from 'react';
import {v4 as uuidv4} from 'uuid';
import Timeline from './About-us/Timeline';
// import AboutUsView from './About-us';

export default async function Page({params}: Readonly<IPageDefaultProps>) {
  const {locale} = await params;
  const t = await getTranslations({locale});
  const pageContent = await getPage(pageBySlug.aboutUs);
  const content = pageContent.contents.find((x: any) => x.language == locale);
  const roadMap = await getRoadMap();
  return (
    <PageLayout
      title={<HeaderTitleView text={t('Slogan')} />}
      className="about-us-wrapper"
    >
      {content.blocks?.map((block: any) => {
        const html = parse(block.content, {
          replace: (domNode: any) => {
            if (domNode?.attribs?.['data-auto-block-code']) {
              const blockCode = domNode.attribs['data-auto-block-code'];
              const arr = blockCode.split('](');
              const code = arr[0].replace('[', '');
              console.dir(code);
              if (code === 'SLIDER') return <Timeline roadMap={roadMap} />;
            }
            return domNode;
          }
        });
        return <Fragment key={uuidv4()}>{html}</Fragment>;
      })}
      {/* <AboutUsView roadMap={roadMap} /> */}
    </PageLayout>
  );
}
