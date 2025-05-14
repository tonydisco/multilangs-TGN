'use client';
import {getJobs} from '@/apis/jobs';
import {SectionBase} from '@/components/Common/Section';
import {useEffect, useState} from 'react';
import {RecruitmentBanner} from './Banner';
import JobList from './JobList';
import Nodata from '@/components/Common/Nodata';

export interface IJobList {
  data: Array<any>;
  loading: boolean;
  total: number;
  page: number;
  limit: number;
}
const RecruitMent = () => {
  const [jobList, setJobList] = useState<IJobList>({
    data: [],
    loading: false,
    total: 0,
    page: 1,
    limit: 1000
  });

  useEffect(() => {
    (async () => {
      const rest = await getJobs();
      if (rest.isSuccess) {
        setJobList((prev: IJobList) => {
          return {
            ...prev,
            data: rest.result.posts,
            total: rest?.result?.total
          };
        });
      }
    })();
  }, []);

  const handleNext = () => {
    if (jobList.page * jobList.limit < jobList.total) {
      setJobList((prev: IJobList) => {
        return {
          ...prev,
          page: jobList.page + 1
        };
      });
    }
  };

  const handlePrev = () => {
    if (jobList.page > 1) {
      setJobList((prev: IJobList) => {
        return {
          ...prev,
          page: jobList.page - 1
        };
      });
    }
  };

  const onPaginationChange = (page: number) => {
    setJobList((prev: IJobList) => {
      return {
        ...prev,
        page
      };
    });
  };

  const onSearchRecruitment = async (txt: string) => {
    console.log('====================================');
    console.log(txt);
    console.log('====================================');
    const rest = await getJobs({
      page: jobList.page,
      pageSize: jobList.limit,
      query: txt
    });
    if (rest.isSuccess) {
      setJobList((prev: IJobList) => {
        return {
          ...prev,
          data: rest.result.posts,
          total: rest?.result?.total
        };
      });
    }
  };

  return (
    <SectionBase style={{padding: '100px 0'}}>
      <RecruitmentBanner
        onUpdateQuery={onSearchRecruitment}
        btnStatus={jobList.loading}
      />
      {(() => {
        if (jobList.loading) {
          return <div className="loading-style" />;
        }
        if (!jobList.data.length) {
          return (
            <div className="no-data-style">
              <Nodata />
            </div>
          );
        }
        return (
          <JobList
            jobList={jobList}
            onChange={onPaginationChange}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        );
      })()}
    </SectionBase>
  );
};

export default RecruitMent;
