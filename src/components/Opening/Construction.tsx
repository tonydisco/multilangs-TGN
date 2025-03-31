import Link from 'next/link';
import {PureImage} from '../Common/Images';

const Construction = () => {
  return (
    <section
      style={{
        backgroundColor: '#EDDFD8',
        position: 'relative',
        paddingBottom: 150,
        height: 1500
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%'
        }}
        className="app-container"
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
            height: 500,
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
                width: 740,
                position: 'absolute',
                right: 120,
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
                width: 700,
                right: 15
              }}
            >
              <PureImage url="/landing/CONSTRUCTION/NHA.png" />
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: -40,
                zIndex: 2,
                width: 550,
                right: 320
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
                marginLeft: 150
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
              <button className="app-btn-default" style={{marginTop: 50}}>
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
        </div>
      </div>
      <div
        style={{
          backgroundColor: '#E8E4E3',
          height: 480,
          width: '100%',
          position: 'relative'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            gap: 50
          }}
          className="app-container"
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
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                alignItems: 'flex-start'
              }}
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
                <strong>Thế Giới Nhà Group</strong> vận hành hệ thống Siêu thị
                vật liệu xây dựng quy mô lớn, cung cấp giải pháp toàn diện với
                danh mục sản phẩm phong phú từ thô đến hoàn thiện.
              </p>
              <button className="app-btn-default" style={{marginTop: 50}}>
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
              flex: 1,
              height: '100%'
            }}
            // style={{
            //   flex: 1,
            //   background:
            //     'url(/landing/CONSTRUCTION/SHOW-ROOM.png) no-repeat center',
            //   backgroundSize: 'contain',
            //   height: '100%',
            //   position: 'relative'
            // }}
          >
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                zIndex: 1,
                height: 400
              }}
            >
              <PureImage
                url="/landing/CONSTRUCTION/SHOW-ROOM.png"
                mode="cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div>block 3</div>
    </section>
  );
};

export default Construction;
