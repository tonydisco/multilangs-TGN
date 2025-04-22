import {TitlePageView} from '@/components/Hero';
import PageLayout from '@/components/PageLayout';
import ChildPage from './ChildPage';
import {getPage} from '@/apis/pages';
import parse from 'html-react-parser';
import {v4 as uuidv4} from 'uuid';

export default async function Page({params}: any) {
  const {locale} = await params;
  const pageSlug = 'linh-vuc-hoat-dong';
  const pageContent = await getPage(pageSlug);
  const content = pageContent.contents.find((x: any) => x.language == locale);
  return (
    <PageLayout
      title={<TitlePageView title={content?.title} />}
      className="page-wrapper"
    >
      {content.blocks?.map((block: any) => {
        const html = parse(block.content, {
          replace: (domNode: any) => {
            if (domNode?.attribs?.['data-auto-block-code']) {
              const blockCode = domNode.attribs['data-auto-block-code'];
              const arr = blockCode.split('](');
              const slug = arr[1].replace(')', '');
              const childContent = pageContent.children.find(
                (x: any) => x.slug == slug
              );
              return (
                childContent && (
                  <ChildPage
                    attribs={domNode.attribs}
                    content={childContent}
                    locale={locale}
                  />
                )
              );
            }
            return domNode;
          }
        });
        return <div key={uuidv4()}>{html}</div>;
      })}
    </PageLayout>
  );
}
