import {CardBorder} from '@/components/Common/Card';
import {PureImage} from '@/components/Common/Images';
import Pagination from '@/components/Common/Pagination';
import {useAppContext} from '@/Providers';
import {useMemo} from 'react';
import {IJobList} from '.';

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
      const title = item.contents.find(
        (content: any) => content.language === locale
      );
      return {
        ...item,
        title: title?.title || ''
      };
    });
  }, [locale, data]);

  console.log({dataByLocale});

  return (
    <div style={{paddingTop: 100}}>
      <div
        style={{
          display: 'flex',
          alignItems: 'stretch',
          gap: 25,
          flexWrap: 'wrap'
        }}
      >
        {dataByLocale.map((item, index) => {
          const contents = item.contents.find(
            (content: any) => content.language === locale
          );
          return (
            <div key={index} style={{width: '32%'}}>
              <CardBorder style={{height: '100%'}}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%'
                  }}
                >
                  <div>
                    <PureImage
                      url={item.featuredImageUrl}
                      style={{
                        width: '180px',
                        marginBottom: 28,
                        height: 'auto'
                      }}
                    />
                    <div className="tgn-title-max-two-lines">
                      <span
                        style={{
                          fontSize: 16,
                          fontWeight: 700
                        }}
                      >
                        Vị trí:{' '}
                      </span>
                      <span>{contents.title}</span>
                    </div>
                    <div
                      style={{marginTop: 10}}
                      // className="tgn-title-max-two-lines"
                    >
                      <span
                        style={{
                          fontSize: 16,
                          fontWeight: 700
                        }}
                      >
                        Yêu cầu:{' '}
                      </span>
                      {contents?.blocks?.map((block: any, idx: number) => {
                        if (idx === 0) {
                          return (
                            <span
                              key={idx}
                              style={{
                                fontSize: 14,
                                fontWeight: 400,
                                whiteSpace: 'break-spaces'
                              }}
                            >
                              {block?.content}
                            </span>
                          );
                        }
                        return (
                          <div
                            key={idx}
                            style={{
                              fontSize: 14,
                              fontWeight: 400,
                              whiteSpace: 'break-spaces',
                              marginTop: 10
                            }}
                          >
                            {block?.content}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <div
                      className="default-horizone-line"
                      style={{opacity: 0.3, margin: '20px 0'}}
                    />
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 10
                      }}
                    >
                      {/* <div
                        style={{
                          display: 'flex',
                          gap: 10
                        }}
                      >
                        {item.tag.map((tag, index) => {
                          return (
                            <div
                              key={index}
                              style={{
                                backgroundColor: '#F2F2F2',
                                padding: '5px 10px',
                                borderRadius: 36,
                                fontSize: 13
                              }}
                            >
                              {tag.name}
                            </div>
                          );
                        })}
                      </div> */}
                      <div>
                        <div
                          style={{
                            borderBottom: '1px solid #6d3e2f'
                          }}
                        >
                          <span
                            className="tgn-text-brow-color"
                            style={{
                              fontWeight: 600
                            }}
                          >
                            Chi tiết
                          </span>
                          <PureImage
                            style={{width: 20, marginLeft: 10}}
                            url="/icon/ARROW-BROW.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBorder>
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
