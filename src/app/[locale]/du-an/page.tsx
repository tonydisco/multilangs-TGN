import {SectionBase} from '@/components/Common/Section';
import {SectionTitles} from '@/components/Common/Titles';
import {TitlePageView} from '@/components/Hero';
import PageLayout from '@/components/PageLayout';
import ProjectList from './List';

export default function Page() {
  return (
    <PageLayout
      title={<TitlePageView title="dự án" />}
      className="projects-wrapper"
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
