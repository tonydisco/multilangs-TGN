import Link from 'next/link';
import {PureImage} from '../../Common/Images';
import {ImageMode} from '@/models/types';

const Construction = () => {
  return (
    <section
      style={{
        backgroundColor: '#EDDFD8',
        position: 'relative'
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%'
        }}
        className="container"
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
            height: 380,
            gap: 50
          }}
        >
          <div
            style={{
              flex: 1,
              position: 'relative',
              height: '100%'
            }}
          >
            <div
              style={{
                width: 540,
                position: 'absolute',
                right: 100,
                zIndex: 0,
                top: -90
              }}
            >
              <PureImage url="/landing/CONSTRUCTION/MACHINE.png" />
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                zIndex: 1,
                width: 480,
                right: 15
              }}
            >
              <PureImage url="/landing/CONSTRUCTION/NHA.png" />
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: -25,
                zIndex: 2,
                width: 400,
                right: 280
              }}
            >
              <PureImage url="/landing/CONSTRUCTION/XE.png" />
            </div>
          </div>
          <div
            style={{
              flex: 1,
              position: 'relative',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                alignItems: 'flex-start',
                zIndex: 20,
                position: 'relative',
                marginLeft: 100
              }}
            >
              <h2
                style={{
                  fontWeight: '700',
                  fontSize: '32px',
                  textTransform: 'uppercase'
                }}
              >
                Lĩnh Vực Sản xuất
              </h2>
              <p style={{fontSize: 14}}>
                <strong>Thế Giới Nhà Group</strong> sở hữu hệ thống nhà máy hiện
                đại, sản xuất đa dạng vật liệu xây dựng đạt tiêu chuẩn chất
                lượng cao, đáp ứng nhu cầu cho mọi công trình.
              </p>
              <button className="app-btn-default" style={{marginTop: 35}}>
                <Link href="/about-us">
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: 8
                    }}
                  >
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 500
                      }}
                    >
                      Xem thêm
                    </span>
                    <PureImage
                      style={{width: 12}}
                      url="/landing/ICON-ARROW.svg"
                    />
                  </div>
                </Link>
              </button>
            </div>
            <div
              style={{
                width: '100%',
                position: 'absolute',
                bottom: 0,
                transform: 'rotateX(180deg)'
              }}
            >
              <PureImage url="/landing/BUSINESS-PHILOSOPHY/BUSINESS-TEXTURE-1.png" />
            </div>
          </div>
          <div
            style={{
              position: 'absolute',
              zIndex: 1,
              height: '100%',
              width: '150px',
              left: '50%',
              top: 0,
              transform: 'translateX(-50%)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexDirection: 'column',
              gap: 20
            }}
          >
            <AssetItem
              url="/landing/CONSTRUCTION/ASSET-1.png"
              posStyle={{left: -100, top: 10}}
            />
            <AssetItem
              url="/landing/CONSTRUCTION/ASSET-2.png"
              posStyle={{left: -40, top: -10}}
            />
            <AssetItem
              url="/landing/CONSTRUCTION/ASSET-3.png"
              posStyle={{top: -15}}
            />
            <AssetItem
              url="/landing/CONSTRUCTION/ASSET-4.png"
              posStyle={{left: 20, top: -15}}
            />
            <AssetItem
              url="/landing/CONSTRUCTION/ASSET-5.png"
              posStyle={{right: -15, bottom: 10}}
              mode="cover"
            />
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: '#E8E4E3',
          height: 380,
          width: '100%',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{height: '100%'}}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              gap: 50
            }}
          >
            <div
              style={{
                position: 'relative',
                flex: 1,
                height: '100%',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <div style={{position: 'relative', zIndex: 2}}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 20,
                    alignItems: 'flex-start'
                  }}
                  className="part-container"
                >
                  <h2
                    style={{
                      fontWeight: '700',
                      fontSize: '32px',
                      textTransform: 'uppercase'
                    }}
                  >
                    Lĩnh Vực kinh doanh
                  </h2>
                  <p style={{fontSize: 14}}>
                    <strong>Thế Giới Nhà Group</strong> vận hành hệ thống Siêu
                    thị vật liệu xây dựng quy mô lớn, cung cấp giải pháp toàn
                    diện với danh mục sản phẩm phong phú từ thô đến hoàn thiện.
                  </p>
                  <button className="app-btn-default" style={{marginTop: 35}}>
                    <Link href="/about-us">
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          gap: 8
                        }}
                      >
                        <span
                          style={{
                            fontSize: 14,
                            fontWeight: 500
                          }}
                        >
                          Xem thêm
                        </span>
                        <PureImage
                          style={{width: 12}}
                          url="/landing/ICON-ARROW.svg"
                        />
                      </div>
                    </Link>
                  </button>
                </div>
              </div>
              <div
                style={{
                  width: '100%',
                  position: 'absolute',
                  bottom: 0,
                  transform: 'rotateX(180deg)'
                }}
              >
                <PureImage url="/landing/BUSINESS-PHILOSOPHY/BUSINESS-TEXTURE-1.png" />
              </div>
            </div>
            <div
              style={{
                position: 'absolute',
                zIndex: 10,
                height: '100%',
                width: '200px',
                left: '50%',
                top: 0,
                transform: 'translateX(-50%)',
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
                gap: 20
              }}
            >
              <AssetItem
                url="/landing/CONSTRUCTION/ASSET-6.png"
                posStyle={{right: -90, top: 5}}
              />
              <AssetItem
                url="/landing/CONSTRUCTION/ASSET-7.png"
                posStyle={{right: -45, top: -5}}
              />
              <AssetItem
                url="/landing/CONSTRUCTION/ASSET-8.png"
                posStyle={{top: -5, right: -15}}
              />
              <AssetItem
                url="/landing/CONSTRUCTION/ASSET-9.png"
                posStyle={{top: -5}}
              />
              <AssetItem
                url="/landing/CONSTRUCTION/ASSET-10.png"
                posStyle={{bottom: 10}}
              />
            </div>
            <div
              style={{
                flex: 1,
                height: '100%',
                position: 'relative'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  zIndex: 1,
                  height: 400
                }}
              >
                <PureImage url="/landing/CONSTRUCTION/SHOW-ROOM.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          height: 380,
          position: 'relative',
          width: '100%'
        }}
      >
        <div
          style={{
            height: '100%'
          }}
        >
          <div
            style={{
              display: 'flex',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 50
            }}
          >
            <div
              style={{
                height: '100%',
                flex: 1,
                position: 'relative'
              }}
              className="block-wrapper"
            >
              <div
                style={{
                  height: '100%',
                  width: '100%',
                  position: 'absolute',
                  right: 0,
                  top: 0
                }}
              >
                <PureImage url="/landing/CONSTRUCTION/MODA.png" mode="cover" />
              </div>
            </div>
            <div
              style={{
                position: 'absolute',
                zIndex: 10,
                height: '100%',
                width: '150px',
                left: '50%',
                top: 0,
                transform: 'translateX(-50%)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flexDirection: 'column',
                gap: 20
              }}
            >
              <AssetItem
                url="/landing/CONSTRUCTION/ASSET-11.png"
                posStyle={{left: -100, top: 10}}
                eclStyle={{
                  overflow: 'hidden',
                  borderRadius: '50%',
                  border: '3px solid rgba(146, 88, 70,0.6)'
                }}
                mode="cover"
              />
              <AssetItem
                url="/landing/CONSTRUCTION/ASSET-12.png"
                posStyle={{left: -40, top: -10}}
                eclStyle={{
                  overflow: 'hidden',
                  borderRadius: '50%',
                  border: '3px solid rgba(146, 88, 70,0.6)'
                }}
                mode="cover"
              />
              <AssetItem
                url="/landing/CONSTRUCTION/ASSET-13.png"
                posStyle={{top: -15}}
                eclStyle={{
                  overflow: 'hidden',
                  borderRadius: '50%',
                  border: '3px solid rgba(146, 88, 70,0.6)'
                }}
                mode="cover"
              />
              <AssetItem
                url="/landing/CONSTRUCTION/ASSET-14.png"
                posStyle={{left: 20, top: -15}}
                eclStyle={{
                  overflow: 'hidden',
                  borderRadius: '50%',
                  border: '3px solid rgba(146, 88, 70,0.6)'
                }}
                mode="cover"
              />
              <AssetItem
                url="/landing/CONSTRUCTION/ASSET-15.png"
                posStyle={{right: -15, bottom: 10}}
                eclStyle={{
                  overflow: 'hidden',
                  borderRadius: '50%',
                  border: '3px solid rgba(146, 88, 70,0.6)'
                }}
                mode="cover"
              />
            </div>
            <div
              style={{
                zIndex: 21,
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                height: '100%',
                flex: 1,
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 20,
                  alignItems: 'flex-start',
                  marginLeft: 100
                }}
                className="part-container"
              >
                <h2
                  style={{
                    fontWeight: '700',
                    fontSize: '32px',
                    textTransform: 'uppercase'
                  }}
                >
                  Lĩnh Vực khai thác
                </h2>
                <p style={{fontSize: 14}}>
                  <strong>Thế Giới Nhà Group</strong> trực tiếp khai thác và
                  cung ứng nguồn nguyên vật liệu chất lượng, đảm bảo chuỗi cung
                  ứng bền vững và tối ưu chi phí cho khách hàng.
                </p>
                <button className="app-btn-default" style={{marginTop: 35}}>
                  <Link href="/about-us">
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 8
                      }}
                    >
                      <span
                        style={{
                          fontSize: 14,
                          fontWeight: 500
                        }}
                      >
                        Xem thêm
                      </span>
                      <PureImage
                        style={{width: 12}}
                        url="/landing/ICON-ARROW.svg"
                      />
                    </div>
                  </Link>
                </button>
              </div>
              <div
                style={{
                  width: '100%',
                  position: 'absolute',
                  bottom: -150,
                  transform: 'rotateX(180deg)',
                  height: '100%',
                  zIndex: -1
                }}
              >
                <PureImage url="/landing/BUSINESS-PHILOSOPHY/BUSINESS-TEXTURE-1.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Construction;

const AssetItem = ({
  posStyle,
  url,
  mode,
  eclStyle
}: {
  posStyle?: React.CSSProperties;
  eclStyle?: React.CSSProperties;
  url: string;
  mode?: ImageMode;
}) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '60px',
        height: '60px',
        ...posStyle
      }}
    >
      <div
        className="eclipse"
        style={{
          ...eclStyle
        }}
      >
        <div
          style={{
            zIndex: 10,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '60px',
            height: '60px'
          }}
        >
          <PureImage
            url={url ?? '/landing/CONSTRUCTION/ASSET-1.png'}
            style={{
              width: 'inherit',
              height: 'inherit'
            }}
            mode={mode}
          />
        </div>
      </div>
    </div>
  );
};
