import {SectionBase} from '@/components/Common/Section';
import {SectionTitles} from '@/components/Common/Titles';
import {TitlePageView} from '@/components/Hero';
import PageLayout from '@/components/PageLayout';
import ProjectList from './List';
import {IPageDefaultProps} from '@/models/interface';
import {getTranslations} from 'next-intl/server';
import '@/styles/projects.scss';

export default async function Page({params}: Readonly<IPageDefaultProps>) {
  const {locale} = await params;
  const t = await getTranslations({locale});
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
          <ProjectList />
        </div>
      </SectionBase>
    </PageLayout>
  );
}
