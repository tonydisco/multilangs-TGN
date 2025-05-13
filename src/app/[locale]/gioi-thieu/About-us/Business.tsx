'use client';
import React, {ReactNode, useMemo} from 'react';
import {SectionTitles} from '@/components/Common/Titles';
import {SubPageView} from '@/components/Hero';
import {PureImage} from '@/components/Common/Images';
import {useWindowDimensions} from '@/hooks/common/useWindowDimension';
import {BREAK_POINTS} from '@/utils/config';
import {v4 as uuid} from 'uuid';
import {CardBorder} from '@/components/Common/Card';
import {useTranslations} from 'next-intl';

const BusinessPhysolophy = () => {
  const {width} = useWindowDimensions();
  const t = useTranslations();

  const isMobile = useMemo(() => width < BREAK_POINTS.TABLET, [width]);

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
                      <BusinessCard
                        bgUrl="https://tgn-cdn.vikiworld.vn/media/card-top-left_3357160672927416321.png"
                        title="Chất lượng"
                        des={
                          <span>
                            Với phương châm{' '}
                            <strong>
                              &quot;Chất lượng hàng đầu, tiến độ đảm bảo, an
                              toàn tuyệt đối&quot;
                            </strong>
                            , TGN Group không ngừng đầu tư vào thiết bị hiện
                            đại, ứng dụng công nghệ tiên tiến trong sản xuất và
                            quản lý. Chúng tôi coi chất lượng không chỉ là yếu
                            tố cạnh tranh mà còn là giá trị cốt lõi trong văn
                            hóa doanh nghiệp.
                          </span>
                        }
                      />
                      <BusinessCard
                        bgUrl="https://tgn-cdn.vikiworld.vn/media/card-top-right-1_3357159446567452673.png"
                        title="Phát triển bền vững"
                        des={
                          <span>
                            Không ngừng nâng cao uy tín thương hiệu, tạo dấu ấn
                            khác biệt cho sản phẩm trên thị trường, đồng thời
                            đào tạo nguồn nhân lực chất lượng cao. Đảm bảo tăng
                            trưởng bền vững gắn liền với trách nhiệm bảo vệ tài
                            nguyên và môi trường.
                          </span>
                        }
                      />
                    </div>
                    <div className="tgn-business-card-center">
                      <div className="b-card-wrapper">
                        <CardBorder style={{height: '100%', width: '100%'}}>
                          <div
                            style={{
                              width: '100%',
                              height: '100%'
                            }}
                          >
                            <PureImage url="https://tgn-cdn.vikiworld.vn/media/logo-3d_3357147001157320704.png" />
                          </div>
                        </CardBorder>
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                        gap: '20px',
                        marginTop: '20px'
                      }}
                    >
                      <BusinessCard
                        bgUrl="https://tgn-cdn.vikiworld.vn/media/card-bottom-left_3357160672902250497.png"
                        title="Trách nhiệm xã hội"
                        des={
                          <span>
                            Cam kết đóng góp vào sự phát triển kinh tế bền vững,
                            nâng cao chất lượng đời sống cho cán bộ, công nhân
                            viên và thực hiện trách nhiệm xã hội, chung tay vì
                            cộng đồng với tinh thần tương thân tương ái.
                          </span>
                        }
                      />
                      <div className="b-card-wrapper">
                        <CardBorder style={{height: '100%'}}>
                          <div>
                            <div className="b-card-title">Chuyên nghiệp</div>
                            <p className="b-card-content ">
                              Chuyên nghiệp Xây dựng đội ngũ cán bộ, công nhân
                              viên chuyên nghiệp, sáng tạo, giàu nhiệt huyết và
                              vững vàng chuyên môn.
                            </p>
                          </div>
                        </CardBorder>
                      </div>
                      <BusinessCard
                        bgUrl="https://tgn-cdn.vikiworld.vn/media/card-bottom-right_3357160672851918848.png"
                        title="Đoàn kết"
                        des={
                          <span>
                            Xây dựng tinh thần đoàn kết, hợp tác chặt chẽ giữa
                            đồng nghiệp, giữa lãnh đạo và nhân viên, cũng như
                            giữa công ty và đối tác.
                          </span>
                        }
                        innerCardstyle={{
                          padding: '20px 20px 20px 60px'
                        }}
                      />
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

export default BusinessPhysolophy;

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
          url="https://tgn-cdn.vikiworld.vn/media/business-texture-1_3356701766212124674.png"
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
          url="https://tgn-cdn.vikiworld.vn/media/business-texture-2_3356701766266650625.png"
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
          url="https://tgn-cdn.vikiworld.vn/media/business-texture-3_3356701766480560129.png"
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

const BusinessCard = (props: {
  title: string;
  des: string | ReactNode;
  className?: string;
  style?: React.CSSProperties;
  innerCardstyle?: React.CSSProperties;
  bgUrl?: string;
}) => {
  const {title, des, bgUrl, style, innerCardstyle} = props;

  return (
    <div
      className="b-card-wrapper"
      style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '250px',
        overflow: 'hidden',
        ...style
      }}
    >
      <div
        style={{
          padding: '20px',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          ...innerCardstyle
        }}
      >
        <div className="b-card-title">{title}</div>
        <p className="b-card-content ">{des}</p>
      </div>
    </div>
  );
};
