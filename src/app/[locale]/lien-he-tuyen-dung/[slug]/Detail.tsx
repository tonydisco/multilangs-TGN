'use client';
import React from 'react';
import {RecruitmentBanner} from '../Recruitment/Banner';
import {SectionTitles, TitleInCard} from '@/components/Common/Titles';
import '@/styles/jobDetail.scss';
import {Button} from '@/components/Common/Button';

const JobDetail = (props: {data: any}) => {
  const {data} = props;

  return (
    <>
      <div style={{padding: '100px 0'}}>
        <RecruitmentBanner onUpdateQuery={() => {}} btnStatus={false} />
      </div>
      <div className="tgn-container-content-inner">
        <SectionTitles title={data.title} />
        <div style={{marginTop: 75}}>
          <SectionTitles title="Chi tiết tuyển dụng" />
          <div className="row row-cols-1 row-cols-md-2 g-5 mt-0">
            {data?.blocks?.map((block: any, index: number) => {
              const name = block.name as keyof typeof mappingTitle;
              return (
                <div className="col" key={index}>
                  <div style={{padding: '10px 0'}}>
                    <TitleInCard title={mappingTitle[name]} />
                  </div>
                  <div
                    className="job-page-details-content"
                    dangerouslySetInnerHTML={{__html: block.content}}
                  />
                </div>
              );
            })}
            <div className="col">
              <Button
                btnProps={{
                  text: 'Ứng tuyển ngay',
                  style: {
                    height: 50,
                    width: '100%'
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetail;

const mappingTitle = {
  '[[JOB_DESCRIPTION]]': 'Mô tả công việc',
  '[[JOB_REQUIREMENTS]]': 'Yêu cầu công việc',
  '[[JOB_BENEFITS]]': 'Quyền lợi',
  '[[JOB_LOCATION]]': 'Địa điểm làm việc',
  '[[JOB_WORKING_HOURS]]': 'Thời gian làm việc'
};
