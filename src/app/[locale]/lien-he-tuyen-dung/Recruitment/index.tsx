'use client';
import {Button} from '@/components/Common/Button';
import {PureImage} from '@/components/Common/Images';
import {SectionBase} from '@/components/Common/Section';
import JobList from './JobList';

const RecruitMent = () => {
  return (
    <SectionBase>
      <div>
        <div
          style={{
            height: '300px',
            width: '100%',
            background:
              'linear-gradient(90deg, rgba(110, 62, 47,0.7) 0%, rgba(146, 88, 70,0.7) 100%), url(/landing/LVHD/LVKD/BG.png)  no-repeat',
            backgroundBlendMode: 'multiply',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '24px',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              padding: 48,
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              height: '100%',
              justifyContent: 'space-evenly'
            }}
          >
            <div
              style={{
                fontSize: 50,
                fontWeight: 700,
                color: 'white',
                textAlign: 'center',
                textTransform: 'uppercase'
              }}
            >
              Thế giới nhà Tuyển dụng
            </div>
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  maxWidth: 768,
                  margin: '0 auto',
                  backgroundColor: 'white',
                  borderRadius: 48,
                  padding: '10px',
                  gap: 30
                }}
              >
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
                <div
                  style={{
                    display: 'flex',
                    gap: 30,
                    alignItems: 'center'
                  }}
                >
                  <PureImage
                    url="/icon/FADE-LINE.svg"
                    style={{width: 'auto'}}
                  />
                  <div
                    style={{
                      textTransform: 'capitalize',
                      display: 'flex',
                      gap: 40,
                      alignItems: 'center'
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
                          <PureImage
                            url="/icon/SEARCH-WHITE.svg"
                            style={{width: 20}}
                          />

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
            </div>
          </div>
        </div>
      </div>
      <JobList />
    </SectionBase>
  );
};

export default RecruitMent;
