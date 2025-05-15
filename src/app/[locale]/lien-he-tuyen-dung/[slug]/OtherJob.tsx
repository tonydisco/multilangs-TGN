import {CardJob} from '@/components/Common/Card';
import {BaseSlider} from '@/components/Common/Sliders';
import {SectionTitles} from '@/components/Common/Titles';
import {useJobs} from '@/hooks/APIs/useJobs';
import {useAppContext} from '@/Providers';
import {attributesMapping} from '@/utils/config';
import React, {useMemo} from 'react';

const OtherJob = () => {
  const {jobList} = useJobs();
  const {locale} = useAppContext();

  const dataByLocale = useMemo(() => {
    return jobList?.data.map((item) => {
      const found = item.contents.find(
        (content: any) => content.language === locale
      );
      return {
        ...item,
        title: found?.title || ''
      };
    });
  }, [locale, jobList]);
  const slideToShow = useMemo(() => {
    if (dataByLocale.length > 4) {
      return 4;
    } else if (dataByLocale.length > 2) {
      return 3;
    } else if (dataByLocale.length > 1) {
      return 2;
    } else {
      return 1;
    }
  }, [dataByLocale]);

  console.log('====================================');
  console.log({dataByLocale});
  console.log('====================================');

  return (
    <>
      <SectionTitles title="các công việc khác" />
      <div>
        <BaseSlider
          renderList={dataByLocale.map((item, index) => {
            const contents = item.contents.find(
              (content: any) => content.language === locale
            );
            const getAttributesMapping = item.attributes.filter((tag: any) => {
              return attributesMapping.includes(tag?.code);
            });

            return (
              <div key={index} className="job-item">
                <CardJob
                  slug={item.slug}
                  title={item.tittle}
                  contents={contents}
                  attributesMapping={getAttributesMapping}
                  featuredImageUrl={item.featuredImageUrl}
                />
              </div>
            );
          })}
          slidesToShow={slideToShow}
        />
      </div>
    </>
  );
};

export default OtherJob;
