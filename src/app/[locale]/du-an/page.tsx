import {SectionBase} from '@/components/Common/Section';
import {SectionTitles} from '@/components/Common/Titles';
import {TitlePageView} from '@/components/Hero';
import PageLayout from '@/components/PageLayout';
import {Locale} from 'next-intl';
import {use} from 'react';
import ProjectList from './List';

type Props = {
  params: Promise<{locale: Locale}>;
};

export default function Page({params}: Readonly<Props>) {
  const {locale} = use(params);

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
          <ProjectList locale={locale} />
        </div>
      </SectionBase>
    </PageLayout>
  );
}
