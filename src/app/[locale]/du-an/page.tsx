import '@/styles/projects.scss';
import ProjectList from './List';
import {TitlePageView} from '@/components/Hero';
import PageLayout from '@/components/PageLayout';
import {IPageDefaultProps} from '@/models/interface';
import {getProjects} from '@/apis/projects';
import {getPage} from '@/apis/pages';
import {pageBySlug} from '@/utils/config';
import {Fragment} from 'react';
import {v4 as uuidv4} from 'uuid';
import parse from 'html-react-parser';

export default async function Page({params}: Readonly<IPageDefaultProps>) {
  const {locale} = await params;
  const pageContent = await getPage(pageBySlug.projects);
  const content = pageContent.contents.find((x: any) => x.language == locale);
  const projects = await getProjects();

  return (
    <PageLayout
      title={<TitlePageView title={content.title} />}
      className="projects-page-wrapper"
    >
      {content.blocks?.map((block: any) => {
        const html = parse(block.content, {
          replace: (domNode: any) => {
            if (domNode?.attribs?.['data-auto-block-code']) {
              const blockCode = domNode.attribs['data-auto-block-code'];
              const arr = blockCode.split('](');
              const code = arr[0].replace('[', '');
              console.dir(blockCode);
              if (code.toUpperCase() === 'PROJECTS')
                return <ProjectList projects={projects} />;
            }
            return domNode;
          }
        });
        return <Fragment key={uuidv4()}>{html}</Fragment>;
      })}
    </PageLayout>
  );
}
