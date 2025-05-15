import {CardJob} from '@/components/Common/Card';
import Pagination from '@/components/Common/Pagination';
import {IJobList} from '@/models/interface';
import {useAppContext} from '@/Providers';
import {attributesMapping} from '@/utils/config';
import {useMemo} from 'react';

const JobList = (props: {
  jobList: IJobList;
  onChange?: (num: number) => void;
  onPrev?: () => void;
  onNext?: () => void;
}) => {
  const {
    jobList,
    onChange = () => {},
    onPrev = () => {},
    onNext = () => {}
  } = props;

  const {locale} = useAppContext();

  const startIndex = useMemo(
    () => (jobList.page - 1) * jobList.limit,
    [jobList]
  );
  const endIndex = useMemo(
    () => startIndex + jobList.limit,
    [jobList, startIndex]
  );
  const data = useMemo(
    () => jobList.data.slice(startIndex, endIndex),
    [jobList, startIndex, endIndex]
  );

  const dataByLocale = useMemo(() => {
    return data.map((item) => {
      const found = item.contents.find(
        (content: any) => content.language === locale
      );
      return {
        ...item,
        title: found?.title || ''
      };
    });
  }, [locale, data]);

  return (
    <div style={{paddingTop: 100}}>
      <div className="flex-job-list">
        {[...dataByLocale].map((item, index) => {
          const contents = item.contents.find(
            (content: any) => content.language === locale
          );
          const getAttributesMapping = item.attributes.filter((tag: any) => {
            return attributesMapping.includes(tag?.code);
          });

          return (
            <div key={index} className="job-item">
              <CardJob
                title={item.tittle}
                attributesMapping={getAttributesMapping}
                contents={contents}
                slug={item.slug}
                featuredImageUrl={item.featuredImageUrl}
              />
            </div>
          );
        })}
      </div>
      <div style={{marginTop: 50, display: 'flex', justifyContent: 'center'}}>
        <Pagination
          page={jobList.page}
          total={jobList.total}
          limit={jobList.limit}
          onPrev={onPrev}
          onNext={onNext}
          onPageChange={onChange}
        />
      </div>
    </div>
  );
};

export default JobList;
