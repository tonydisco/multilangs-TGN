'use client';
import React, {useMemo} from 'react';
import {SectionTitles} from '@/components/Common/Titles';
import {SubPageView} from '@/components/Hero';
import {PureImage} from '@/components/Common/Images';
import {useWindowDimensions} from '@/hooks/common/useWindowDimension';
import {BREAK_POINTS} from '@/utils/config';
import {v4 as uuid} from 'uuid';
import {CardBorder} from '@/components/Common/Card';
import {useTranslations} from 'next-intl';

const BusinessPhisolophy = () => {
  const {width} = useWindowDimensions();
  const t = useTranslations();

  const isMobile = useMemo(() => width < BREAK_POINTS.MOBILE, [width]);

  return (
    <section className="business-phylosophy">
      <div className="business-wrapper">
        <AssestRenderer />
        <div
          className="container"
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            zIndex: 2
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <div className="flex-items-wrapper">
              <div style={{textAlign: 'center'}}>
                <SubPageView text={<span>{t('Slogan')}</span>} />
                <SectionTitles
                  title="Triết lý kinh doanh"
                  style={{marginTop: 30}}
                />
              </div>
              {(() => {
                if (isMobile) {
                  return (
                    <div
                      style={{
                        position: 'relative'
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '20px',
                          flexDirection: 'column'
                        }}
                      >
                        {mockData.map((item) => {
                          return (
                            <div key={uuid()}>
                              <CardBorder className="business-card">
                                <div>
                                  <div className="b-card-title">
                                    {item.title}
                                  </div>
                                  <div className="b-card-description">
                                    {item.des}
                                  </div>
                                </div>
                              </CardBorder>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                }
                return (
                  <div
                    style={{
                      position: 'relative'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '20px'
                      }}
                    >
                      <div className="b-card-wrapper">
                        <div>
                          <PureImage
                            url="/landing/BUSINESS-PHILOSOPHY/CARD.svg"
                            style={{height: 250}}
                            mode="fill"
                          />
                        </div>
                        <div className="b-card-inner">
                          <div>
                            <div className="b-card-title">Chất lượng</div>
                            <p className="b-card-content ">
                              Với phương châm{' '}
                              <strong>
                                &quot;Chất lượng hàng đầu, tiến độ đảm bảo, an
                                toàn tuyệt đối&quot;
                              </strong>
                              , TGN Group không ngừng đầu tư vào thiết bị hiện
                              đại, ứng dụng công nghệ tiên tiến trong sản xuất
                              và quản lý. Chúng tôi coi chất lượng không chỉ là
                              yếu tố cạnh tranh mà còn là giá trị cốt lõi trong
                              văn hóa doanh nghiệp.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="b-card-wrapper">
                        <div
                          style={{
                            transform: 'scaleX(-1)'
                          }}
                        >
                          <PureImage
                            url="/landing/BUSINESS-PHILOSOPHY/CARD.svg"
                            style={{height: 250}}
                            mode="fill"
                          />
                        </div>
                        <div className="b-card-inner">
                          <div>
                            <div className="b-card-title">
                              Phát triển bền vững
                            </div>
                            <p className="b-card-content ">
                              Không ngừng nâng cao uy tín thương hiệu, tạo dấu
                              ấn khác biệt cho sản phẩm trên thị trường, đồng
                              thời đào tạo nguồn nhân lực chất lượng cao. Đảm
                              bảo tăng trưởng bền vững gắn liền với trách nhiệm
                              bảo vệ tài nguyên và môi trường.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                        gap: '20px'
                      }}
                    >
                      <div className="b-card-wrapper">
                        <div>
                          <PureImage
                            url="/landing/BUSINESS-PHILOSOPHY/CARD-BOTTOM.svg"
                            style={{height: 250}}
                            mode="fill"
                          />
                        </div>
                        <div className="b-card-inner">
                          <div>
                            <div className="b-card-title">
                              Trách nhiệm xã hội
                            </div>
                            <p className="b-card-content ">
                              Cam kết đóng góp vào sự phát triển kinh tế bền
                              vững, nâng cao chất lượng đời sống cho cán bộ,
                              công nhân viên và thực hiện trách nhiệm xã hội,
                              chung tay vì cộng đồng với tinh thần tương thân
                              tương ái.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="b-card-wrapper">
                        <div>
                          <PureImage
                            url="/landing/BUSINESS-PHILOSOPHY/CARD-CENTER.svg"
                            style={{height: 178}}
                            mode="fill"
                          />
                        </div>
                        <div className="b-card-inner">
                          <div>
                            <div className="b-card-title">Chuyên nghiệp</div>
                            <p className="b-card-content ">
                              Chuyên nghiệp Xây dựng đội ngũ cán bộ, công nhân
                              viên chuyên nghiệp, sáng tạo, giàu nhiệt huyết và
                              vững vàng chuyên môn.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="b-card-wrapper">
                        <div
                          style={{
                            transform: 'scaleX(-1)'
                          }}
                        >
                          <PureImage
                            url="/landing/BUSINESS-PHILOSOPHY/CARD-BOTTOM.svg"
                            style={{height: 250}}
                            mode="fill"
                          />
                        </div>
                        <div className="b-card-inner">
                          <div className="b-card-inner-mg">
                            <div className="b-card-title">Đoàn kết</div>
                            <p className="b-card-content ">
                              Xây dựng tinh thần đoàn kết, hợp tác chặt chẽ giữa
                              đồng nghiệp, giữa lãnh đạo và nhân viên, cũng như
                              giữa công ty và đối tác.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <div style={{position: 'relative'}}>
                        <div>
                          <PureImage
                            url="/landing/BUSINESS-PHILOSOPHY/CARD-CENTER.png"
                            mode="fill"
                            style={{
                              width: '490px',
                              height: '125px'
                            }}
                          />
                        </div>
                        <div
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            zIndex: 1
                          }}
                        >
                          <div
                            style={{
                              width: '100%',
                              height: '100%'
                            }}
                          >
                            <PureImage url="/logo/LOGO-3D.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessPhisolophy;

const AssestRenderer = () => {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: '-25px',
          left: 0,
          width: '100%'
        }}
      >
        <PureImage
          url="/landing/BUSINESS-PHILOSOPHY/BUSINESS-TEXTURE-1.png"
          style={{maxWidth: '35%'}}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: '15px',
          right: '0px'
        }}
      >
        <PureImage
          url="/landing/BUSINESS-PHILOSOPHY/BUSINESS-TEXTURE-2.png"
          style={{width: '600px'}}
          mode="cover"
        />
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          width: '100%'
        }}
      >
        <PureImage
          url="/landing/BUSINESS-PHILOSOPHY/BUSINESS-TEXTURE-3.png"
          mode="cover"
        />
      </div>
    </>
  );
};

const mockData = [
  {
    title: 'Chất lượng',
    des: (
      <p>
        Với phương châm{' '}
        <strong>
          &quot;Chất lượng hàng đầu, tiến độ đảm bảo, an toàn tuyệt đối&quot;
        </strong>
        , TGN Group không ngừng đầu tư vào thiết bị hiện đại, ứng dụng công nghệ
        tiên tiến trong sản xuất và quản lý. Chúng tôi coi chất lượng không chỉ
        là yếu tố cạnh tranh mà còn là giá trị cốt lõi trong văn hóa doanh
        nghiệp.
      </p>
    )
  },
  {
    title: 'Phát triển bền vững',
    des: (
      <p>
        Không ngừng nâng cao uy tín thương hiệu, tạo dấu ấn khác biệt cho sản
        phẩm trên thị trường, đồng thời đào tạo nguồn nhân lực chất lượng cao.
        Đảm bảo tăng trưởng bền vững gắn liền với trách nhiệm bảo vệ tài nguyên
        và môi trường.
      </p>
    )
  },
  {
    title: 'Trách nhiệm xã hội',
    des: (
      <p>
        Cam kết đóng góp vào sự phát triển kinh tế bền vững, nâng cao chất lượng
        đời sống cho cán bộ, công nhân viên và thực hiện trách nhiệm xã hội,
        chung tay vì cộng đồng với tinh thần tương thân tương ái.
      </p>
    )
  },
  {
    title: 'Chuyên nghiệp',
    des: (
      <p>
        Chuyên nghiệp Xây dựng đội ngũ cán bộ, công nhân viên chuyên nghiệp,
        sáng tạo, giàu nhiệt huyết và vững vàng chuyên môn.
      </p>
    )
  },
  {
    title: 'Đoàn kết',
    des: (
      <p>
        Xây dựng tinh thần đoàn kết, hợp tác chặt chẽ giữa đồng nghiệp, giữa
        lãnh đạo và nhân viên, cũng như giữa công ty và đối tác.
      </p>
    )
  }
];
