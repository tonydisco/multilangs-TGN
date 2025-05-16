import {getJobs, IQueryJobs} from '@/apis/jobs';
import {IJobList} from '@/models/interface';
import {useState, useEffect, useCallback} from 'react';

export const useJobs = (options?: {autoRequest?: boolean}) => {
  const {autoRequest = true} = options || {};
  const [jobList, setJobList] = useState<IJobList>({
    data: null,
    total: 0,
    page: 1,
    limit: 1000,
    loading: false
  });

  const onGetJobs = useCallback(async (option?: IQueryJobs) => {
    try {
      setJobList((prev: IJobList) => ({
        ...prev,
        loading: true
      }));
      const rest = await getJobs({
        ...option
      });
      if (rest.isSuccess) {
        setJobList((prev: IJobList) => ({
          ...prev,
          data: rest.result.posts,
          total: rest?.result?.total
        }));
        return rest;
      }
    } catch (error) {
      console.error('Error fetching job list:', error);
    } finally {
      setJobList((prev: IJobList) => ({
        ...prev,
        loading: false
      }));
    }
  }, []);

  useEffect(() => {
    if (autoRequest) {
      onGetJobs();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {jobList, setJobList, onGetJobs};
};
