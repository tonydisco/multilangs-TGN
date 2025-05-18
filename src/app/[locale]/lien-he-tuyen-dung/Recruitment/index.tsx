'use client';
import Nodata from '@/components/Common/Nodata';
import {SectionBase} from '@/components/Common/Section';
import {useJobs} from '@/hooks/APIs/useJobs';
import {IJobList} from '@/models/interface';
import {ISearchStr, RecruitmentBanner} from './Banner';
import JobList from './JobList';
import Loading from '@/components/Common/Loading';

const RecruitMent = () => {
  const {jobList, setJobList, onGetJobs} = useJobs();

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

  const onSearchRecruitment = async (search: ISearchStr) => {
    if (!search.query && !search.attributes) {
      return;
    }
    console.log('====================================');
    console.log(search);
    console.log('====================================');
    await onGetJobs({
      page: jobList.page,
      pageSize: jobList.limit,
      ...search
    });
  };

  return (
    <SectionBase style={{padding: '100px 0'}}>
      <RecruitmentBanner
        onUpdateQuery={onSearchRecruitment}
        btnStatus={jobList.loading}
      />
      {(() => {
        if (jobList.loading) {
          return (
            <div className="mt-5">
              <Loading />
            </div>
          );
        }
        if (!jobList?.data?.length) {
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
