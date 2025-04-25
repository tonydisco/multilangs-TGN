'use client';
import {getJobs} from '@/apis/jobs';
import {Button} from '@/components/Common/Button';
import {PureImage} from '@/components/Common/Images';
import {SectionBase} from '@/components/Common/Section';
import React, {useEffect, useState} from 'react';
import JobList from './JobList';
import {SectionTitles} from '@/components/Common/Titles';

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

  return (
    <SectionBase>
      <div>
        <div className="banner-style">
          <div className="banner-inner-style">
            <SectionTitles
              title="Thế giới nhà Tuyển dụng"
              style={{
                color: 'white',
                textAlign: 'center'
              }}
            />
            <div>
              <div className="job-action job-action-style">
                <div
                  style={{
                    flex: 2,
                    width: '100%'
                  }}
                >
                  <input
                    style={{
                      border: 'none',
                      backgroundColor: 'transparent',
                      outline: 'none',
                      width: '100%',
                      height: '100%',
                      padding: ' 10px 20px'
                    }}
                    placeholder="Vị trí tuyển dụng"
                  />
                </div>
                <ActionBtn wrapperClass="tgn-pc-only" />
              </div>
              <ActionBtn
                wrapperClass="tgn-mobile-only job-action-style"
                style={{
                  marginTop: 20
                }}
                isHideAsset
              />
            </div>
          </div>
        </div>
      </div>
      <JobList
        jobList={jobList}
        onChange={onPaginationChange}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </SectionBase>
  );
};

export default RecruitMent;

const ActionBtn = (props: {
  wrapperClass?: string;
  isHideAsset?: boolean;
  style?: React.CSSProperties;
}) => {
  const {wrapperClass, style, isHideAsset} = props;
  return (
    <div className={wrapperClass} style={{...style}}>
      <div
        style={{
          display: 'flex',
          gap: 30,
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {!isHideAsset && (
          <PureImage url="/icon/FADE-LINE.svg" style={{width: 'auto'}} />
        )}

        <div
          style={{
            textTransform: 'capitalize',
            display: 'flex',
            gap: 40,
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: 8,
              alignItems: 'center'
            }}
          >
            <PureImage url="/icon/LOCATION.svg" style={{width: 15}} />
            <div style={{whiteSpace: 'nowrap'}}>địa điểm</div>
          </div>
          <PureImage url="/icon/ARROW.svg" style={{width: 10}} />
        </div>
        <Button
          btnProps={{
            content: (
              <div
                style={{
                  display: 'flex',
                  gap: 10,
                  alignItems: 'center'
                }}
              >
                <PureImage url="/icon/SEARCH-WHITE.svg" style={{width: 20}} />

                <div style={{whiteSpace: 'nowrap', fontWeight: 500}}>
                  Tìm kiếm
                </div>
              </div>
            ),
            onBtn: () => {
              console.log('clicked');
            },
            style: {
              width: '100%',
              maxWidth: 150
            }
          }}
        />
      </div>
    </div>
  );
};
