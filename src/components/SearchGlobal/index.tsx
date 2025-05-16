import {useJobs} from '@/hooks/APIs/useJobs';
import {useDebounce} from '@/hooks/common/useDebounce';
import {IJobList} from '@/models/interface';
import {useAppContext} from '@/Providers';
import {routes} from '@/utils/config';
import React, {useState} from 'react';
import LocaleLink from '../Common/LinkByLocale';
import Loading from '../Common/Loading';

const Searching = (props: {onClose?: () => void}) => {
  const {onGetJobs} = useJobs({
    autoRequest: false
  });

  const {locale} = useAppContext();

  const [jobData, setJobData] = useState<IJobList>({
    data: null,
    total: 0,
    page: 1,
    limit: 1000,
    loading: false
  });

  const onSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    if (!value) {
      setJobData((prev) => ({
        ...prev,
        data: []
      }));
      return;
    }
    try {
      setJobData((prev: IJobList) => ({
        ...prev,
        loading: true
      }));
      const res = await onGetJobs({
        query: value
      });

      if (res?.isSuccess) {
        setJobData((prev: IJobList) => ({
          ...prev,
          data: res.result.posts,
          total: res?.result?.total
        }));
      }
    } catch (error) {
      console.log('Error fetching job list:', error);
    } finally {
      setJobData((prev: IJobList) => ({
        ...prev,
        loading: false
      }));
    }
  };

  const onCloseModal = () => {
    if (props.onClose) {
      props.onClose();
    }
  };

  return (
    <div className="container mx-auto h-100">
      <div className="py-5 h-100 " style={{color: 'white'}}>
        <div style={{maxWidth: 500, width: '100%', margin: '75px auto 0 auto'}}>
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="form-control form-control-lg"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 1)',
              border: 'none',
              borderRadius: '45px'
            }}
            onChange={useDebounce(onSearch, 500)}
          />
        </div>
        <div>
          {(() => {
            if (jobData.loading) {
              return (
                <div className="mt-5">
                  <Loading />
                </div>
              );
            }
            if (jobData?.data?.length === 0) {
              return (
                <div className="text-center mt-5">
                  Không tìm thấy kết quả nào
                </div>
              );
            }

            return (
              <div className="mt-5">
                <ul>
                  {jobData?.data?.map((item) => (
                    <LocaleLink
                      key={item.id}
                      locale={locale}
                      href={routes.contact + `/${item.slug}`}
                      onClick={onCloseModal}
                    >
                      <li className="mb-3 py-2">{item.title}</li>
                    </LocaleLink>
                  ))}
                </ul>
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
};

export default Searching;
