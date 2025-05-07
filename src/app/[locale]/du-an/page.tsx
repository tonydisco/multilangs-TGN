import '@/styles/projects.scss';
import ProjectList from './List';
import {SectionBase} from '@/components/Common/Section';
import {SectionTitles} from '@/components/Common/Titles';
import {TitlePageView} from '@/components/Hero';
import PageLayout from '@/components/PageLayout';
import {IPageDefaultProps} from '@/models/interface';
import {getTranslations} from 'next-intl/server';
import {getProjects} from '@/apis/projects';

export default async function Page({params}: Readonly<IPageDefaultProps>) {
  const {locale} = await params;
  const t = await getTranslations({locale});

  const projects = await getProjects();

  return (
    <PageLayout
      title={<TitlePageView title={t('HeaderNavProjects')} />}
      className="projects-page-wrapper"
    >
      <SectionBase>
        <SectionTitles
          title="các dự án đã thực hiện"
          style={{textAlign: 'center'}}
        />

        <div className="mt-5">
          <ProjectList projects={projects} />
        </div>
      </SectionBase>
    </PageLayout>
  );
}
