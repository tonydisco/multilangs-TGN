import {getJobs, IQueryJobs} from '@/apis/jobs';
import {IJobList} from '@/models/interface';
import {useState, useEffect, useCallback} from 'react';

export const useJobs = () => {
  const [jobList, setJobList] = useState<IJobList>({
    data: [],
    total: 0,
    page: 1,
    limit: 1000,
    loading: true
  });

  const onGetJobs = useCallback(async (option?: IQueryJobs) => {
    try {
      const rest = await getJobs({
        ...option
      });
      if (rest.isSuccess) {
        setJobList((prev: IJobList) => ({
          ...prev,
          data: rest.result.posts,
          total: rest?.result?.total
        }));
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
    onGetJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {jobList, setJobList, onGetJobs};
};
