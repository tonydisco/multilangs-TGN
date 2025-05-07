'use client';

import {useAppContext} from '@/Providers';
import {CardBorder, ProjectCardInner} from '@/components/Common/Card';
import Pagination from '@/components/Common/Pagination';
import {IGetProjectResponse} from '@/models/interface';
import {useState} from 'react';

const ProjectList = (props: {projects: IGetProjectResponse}) => {
  const {projects} = props;
  const {locale} = useAppContext();

  const [projectData, setProjectData] = useState({
    data: projects.posts,
    loading: false,
    total: projects.total,
    page: 1,
    limit: 9
  });

  const handleNext = () => {
    if (projectData.page * projectData.limit < projectData.total) {
      setProjectData({
        ...projectData,
        page: projectData.page + 1
      });
    }
  };

  const handlePrev = () => {
    if (projectData.page > 1) {
      setProjectData({
        ...projectData,
        page: projectData.page - 1
      });
    }
  };

  const onPaginationChange = (page: number) => {
    setProjectData({
      ...projectData,
      page
    });
  };

  const startIndex = (projectData.page - 1) * projectData.limit;
  const endIndex = startIndex + projectData.limit;
  const data = projectData.data.slice(startIndex, endIndex);

  return (
    <div>
      <div className="tgn-flex-list-box projects-list-flex">
        {data.map((item, index) => {
          const titleByLocale = item?.contents?.find(
            (content) => content.language === locale
          )?.title;
          return (
            <div key={index} className="projects-grid-item">
              <CardBorder style={{width: '100%', padding: 16, height: 325}}>
                <ProjectCardInner
                  title={titleByLocale}
                  imageUrl={item.featuredImageUrl}
                  titleClassName="text-center"
                />
              </CardBorder>
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 50
        }}
      >
        <Pagination
          total={projectData.total}
          limit={projectData.limit}
          page={projectData.page}
          onPrev={handlePrev}
          onNext={handleNext}
          onPageChange={onPaginationChange}
        />
      </div>
    </div>
  );
};

export default ProjectList;
