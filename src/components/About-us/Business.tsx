import React from 'react';
import {PureImage} from '../Common/Images';

const BusinessPhysolophy = () => {
  return (
    <section className="business-phylosophy">
      <div
        style={{
          height: '900px',
          width: '100%',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#EDDFD8'
        }}
      >
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
        <div
          style={{
            maxWidth: '1280px',
            width: '100%',
            height: '100%',
            margin: '0 auto',
            position: 'relative',
            zIndex: 2,
            padding: '100px 0'
          }}
        >
          <div className="w-full h-full flex justify-center">
            <div style={{width: '100%', height: '100%'}}>
              <div>
                <h2
                  style={{
                    fontSize: 40,
                    fontWeight: 700,
                    color: '#000',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    padding: '20px 0'
                  }}
                >
                  Triết lý kinh doanh
                </h2>
              </div>
              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 20
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
                          <strong>{`"Chất lượng hàng đầu, tiến độ đảm bảo,
                          an toàn tuyệt đối"`}</strong>
                          , TGN Group không ngừng đầu tư vào thiết bị hiện đại,
                          ứng dụng công nghệ tiên tiến trong sản xuất và quản
                          lý. Chúng tôi coi chất lượng không chỉ là yếu tố cạnh
                          tranh mà còn là giá trị cốt lõi trong văn hóa doanh
                          nghiệp.
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
                        <div className="b-card-title">Phát triển bền vững</div>
                        <p className="b-card-content ">
                          Không ngừng nâng cao uy tín thương hiệu, tạo dấu ấn
                          khác biệt cho sản phẩm trên thị trường, đồng thời đào
                          tạo nguồn nhân lực chất lượng cao. Đảm bảo tăng trưởng
                          bền vững gắn liền với trách nhiệm bảo vệ tài nguyên và
                          môi trường.
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
                        <div className="b-card-title">Trách nhiệm xã hội</div>
                        <p className="b-card-content ">
                          Cam kết đóng góp vào sự phát triển kinh tế bền vững,
                          nâng cao chất lượng đời sống cho cán bộ, công nhân
                          viên và thực hiện trách nhiệm xã hội, chung tay vì
                          cộng đồng với tinh thần tương thân tương ái.
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
                          Chuyên nghiệp Xây dựng đội ngũ cán bộ, công nhân viên
                          chuyên nghiệp, sáng tạo, giàu nhiệt huyết và vững vàng
                          chuyên môn.
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
                          đồng nghiệp, giữa lãnh đạo và nhân viên, cũng như giữa
                          công ty và đối tác.
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
                    <div
                      style={{
                        width: '480px',
                        height: '135px'
                      }}
                    >
                      <PureImage
                        url="/landing/BUSINESS-PHILOSOPHY/CARD-CENTER.png"
                        mode="fill"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessPhysolophy;
