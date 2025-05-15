'use client';
import {Button} from '@/components/Common/Button';
import {PureImage} from '@/components/Common/Images';
import {SectionTitles, TitleInCard} from '@/components/Common/Titles';
import '@/styles/jobDetail.scss';
import {RecruitmentBanner} from '../Recruitment/Banner';
import OtherJob from './OtherJob';

const JobDetail = (props: {data: any; locale: string}) => {
  const {data, locale} = props;

  const jobByLocale = data?.contents?.find(
    (item: any) => item.language === locale
  );

  return (
    <>
      <div style={{padding: '100px 0'}}>
        <RecruitmentBanner onUpdateQuery={() => {}} btnStatus={false} />
      </div>
      <div className="job-detail-flex-content">
        <div className="tgn-container-content-inner">
          <SectionTitles title={jobByLocale.title} />
          <div style={{padding: '35px 0'}}>
            <div className="attribute-flex-content-wrapper justify-content-between">
              {data?.attributes?.map((item: any, index: number) => {
                const name = item.code as keyof typeof mappingAttribute;
                const itemMappingInfos = mappingAttribute[name];
                if (!itemMappingInfos) return null;
                return (
                  <JobInfosItem
                    icon={itemMappingInfos.icon}
                    key={index}
                    title={itemMappingInfos.name}
                    content={item.value}
                  />
                );
              })}
            </div>
          </div>
          <div className="tgn-dash-line" />
          <div style={{marginTop: 50}}>
            <SectionTitles title="Chi tiết tuyển dụng" />
            <div className="row row-cols-1 row-cols-md-2 g-5 mt-0">
              {jobByLocale?.blocks?.map((block: any, index: number) => {
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
        <div className="tgn-container-content-inner h-100">
          <SectionTitles title="thông tin chung" />
          <div className="attribute-flex-col-content">
            {data?.attributes?.map((item: any, index: number) => {
              const name = item.code as keyof typeof mappingInfos;
              const itemMappingInfos = mappingInfos[name];
              if (!itemMappingInfos) return null;
              return (
                <JobInfosItem
                  icon={itemMappingInfos.icon}
                  key={index}
                  title={itemMappingInfos.name}
                  content={item.value}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div style={{paddingTop: 100}}>
        <OtherJob />
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

const mappingAttribute = {
  'Job.SalaryRange': {
    name: 'Mức lương',
    icon: '/icon/SALARY.svg'
  },
  'Job.Location': {
    name: 'Địa điểm',
    icon: '/icon/JOB-LOCATION.svg'
  },
  'Job.YoE': {
    name: 'Kinh nghiệm',
    icon: '/icon/EXP.svg'
  },
  'Job.ExpirationDate': {
    name: 'hạn ứng tuyển',
    icon: '/icon/DEADLINE.svg'
  }
};
const mappingInfos = {
  'Job.Level': {
    name: 'Cấp bậc',
    icon: '/icon/JOB-LOCATION.svg'
  },
  'Job.EducationalLevel': {
    name: 'Học vấn',
    icon: '/icon/EDU.svg'
  },
  'Job.NumberOfVacancies': {
    name: 'Số lượng cần tuyển',
    icon: '/icon/PEOPLE.svg'
  },
  'Job.WorkingType': {
    name: 'Hình thức làm việc',
    icon: '/icon/WORKING.svg'
  }
};

const JobInfosItem = (props: {
  title: string;
  icon: string;
  content: string;
}) => {
  const {title, icon, content} = props;
  return (
    <div
      className="attribute-flex-content job-detail-attribute"
      style={{gap: 10}}
    >
      <Button
        btnProps={{
          content: <PureImage url={icon} style={{width: 30, height: 30}} />,
          style: {
            borderRadius: '100%',
            width: 50,
            height: 50,
            padding: 12,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }
        }}
      />
      <div className="job-detail-item-inner">
        <div className="job-detail-color">{title}</div>
        <div style={{fontWeight: 'bold'}}>{content}</div>
      </div>
    </div>
  );
};
