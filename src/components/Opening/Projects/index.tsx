'use client';
import {useAppContext} from '@/Providers';
import {getProjects} from '@/apis/projects';
import {Button} from '@/components/Common/Button';
import {CardBorder, ProjectCardInner} from '@/components/Common/Card';
import {PureImage} from '@/components/Common/Images';
import {SectionTitles} from '@/components/Common/Titles';
import {IProjects} from '@/models/interface';
import '@/styles/projects.scss';
import {routes} from '@/utils/config';
import {useEffect, useMemo, useState} from 'react';
import {useTranslations} from 'use-intl';

const LIMIT_ITEMS = 5;

const Projects = () => {
  const t = useTranslations();

  const {locale} = useAppContext();

  const [projectData, setProjectData] = useState<{
    posts: Array<IProjects>;
    total: number;
  }>({
    posts: [],
    total: 0
  });

  useEffect(() => {
    (async () => {
      const projects = await getProjects({pageSize: LIMIT_ITEMS});
      if (projects?.total > 0) {
        setProjectData((prev) => {
          return {
            ...prev,
            posts: projects.posts,
            total: projects.total
          };
        });
      }
    })();
  }, []);

  const project_1 = useMemo(() => projectData.posts.slice(0, 2), [projectData]);
  const project_2 = useMemo(() => projectData.posts.slice(2, 4), [projectData]);
  const project_3 = useMemo(() => projectData.posts.slice(4, 5), [projectData]);

  return (
    <section className="tgn-projects-section">
      <div className="tgn-projects-circle-right">
        <div className="gn-projects-circle-container">
          <PureImage url="/landing/PROJECTS/HAlF-CIRCLE-ICON.png" />
        </div>
      </div>
      <div className="container">
        <div style={{textAlign: 'center'}}>
          <SectionTitles title="dự án thực hiện" />
          <p className="tgn-projects-desc">
            Minh chứng cho chất lượng sản phẩm của <strong>Thế Giới Nhà</strong>{' '}
            chính là hàng loạt dự án tiêu biểu đã tin tưởng sử dụng sản phẩm và
            dịch vụ của chúng tôi. Tiêu biểu có thể kể đến các công trình lớn
            như:
          </p>
        </div>
        <div className="position-relative">
          <div className="tgn-projects-circle-left">
            <div className="tgn-projects-circle-left-container">
              <PureImage url="/landing/PROJECTS/FULL-CIRCLE-ICON.png" />
            </div>
          </div>
          <div className="tgn-projects-grid ">
            <div className="tgn-projects-col-left">
              <div className="tgn-projects-col-items">
                {project_1.map((item, index) => {
                  const titleByLocale = item?.contents?.find(
                    (content) => content.language === locale
                  )?.title;
                  return (
                    <CardBorder
                      style={{width: '100%', padding: 0, height: 288}}
                      key={index}
                    >
                      <ProjectCardInner
                        title={titleByLocale}
                        imageUrl={item.featuredImageUrl}
                      />
                    </CardBorder>
                  );
                })}
              </div>
            </div>
            <div className="tgn-projects-col-right">
              <div className="tgn-projects-col-right-items">
                <div className="tgn-projects-row">
                  {project_2.map((item, index) => {
                    const titleByLocale = item?.contents?.find(
                      (content) => content.language === locale
                    )?.title;
                    return (
                      <CardBorder
                        style={{width: '100%', padding: 0, height: 355}}
                        key={index}
                      >
                        <ProjectCardInner
                          title={titleByLocale}
                          imageUrl={item.featuredImageUrl}
                        />
                      </CardBorder>
                    );
                  })}
                </div>
                {project_3.map((item, index) => {
                  const titleByLocale = item?.contents?.find(
                    (content) => content.language === locale
                  )?.title;
                  return (
                    <CardBorder
                      style={{width: '100%', padding: 0, height: 221}}
                      key={index}
                    >
                      <ProjectCardInner
                        title={titleByLocale}
                        imageUrl={item.featuredImageUrl}
                      />
                    </CardBorder>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="tgn-projects-footer">
          <Button
            btnProps={{
              text: t('Btn_Viewmore_All_Projects'),
              linkTo: routes.project
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
