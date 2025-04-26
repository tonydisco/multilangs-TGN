'use client';
import {Button} from '@/components/Common/Button';
import {SectionTitles} from '@/components/Common/Titles';
import {ImageMode} from '@/models/types';
import {routes} from '@/utils/config';
import {PureImage} from '../../Common/Images';
import '@/styles/construction.scss';
import {v4 as uuid} from 'uuid';
import {useTranslations} from 'use-intl';

const Construction = () => {
  const t = useTranslations();

  return (
    <section className="tgn-construction-section">
      <div className="container tgn-construction-container">
        <div className="tgn-block-item tgn-flex-item tgn-flex-block-1">
          <div className="tgn-flex-full">
            <div className="tgn-absolute-assets tgn-absolute-assets-1">
              <PureImage url="/landing/CONSTRUCTION/MACHINE.png" />
            </div>
            <div className="tgn-absolute-assets tgn-absolute-assets-2">
              <PureImage url="/landing/CONSTRUCTION/NHA.png" />
            </div>
            <div className="tgn-absolute-assets tgn-absolute-assets-3">
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
            <div className="tgn-absolute-block-1-item-left">
              <SectionTitles title="Lĩnh Vực Sản xuất" />
              <p style={{fontSize: 14}}>
                <strong>Thế Giới Nhà</strong> sở hữu hệ thống nhà máy hiện đại,
                sản xuất đa dạng vật liệu xây dựng đạt tiêu chuẩn chất lượng
                cao, đáp ứng nhu cầu cho mọi công trình.
              </p>

              <div style={{marginTop: 35}}>
                <Button
                  btnProps={{
                    text: t('Btn_ViewMore'),
                    linkTo: routes.about
                  }}
                />
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
          <div className="asset-position">
            {assets_1.map((item) => {
              return (
                <AssetItem
                  key={uuid()}
                  url={item.img}
                  posStyle={{...item.posStyle}}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div
        style={{
          overflow: 'hidden',
          zIndex: 2
        }}
        className="tgn-block-item tgn-flex-block-2 tgn-bg-gray-less"
      >
        <div className="container" style={{height: '100%'}}>
          <div className="tgn-flex-item tgn-non-revers-block-2">
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
                <div className="part-container tgn-block-2-left-container">
                  <SectionTitles title="Lĩnh Vực kinh doanh" />
                  <p style={{fontSize: 14}}>
                    <strong>Thế Giới Nhà</strong> vận hành hệ thống Siêu thị vật
                    liệu xây dựng quy mô lớn, cung cấp giải pháp toàn diện với
                    danh mục sản phẩm phong phú từ thô đến hoàn thiện.
                  </p>

                  <div style={{marginTop: 35}}>
                    <Button
                      btnProps={{
                        text: t('Btn_ViewMore'),
                        linkTo: routes.about
                      }}
                    />
                  </div>
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
            <div className="asset-position asset-position-block-2">
              {assets_2.map((item) => {
                return (
                  <AssetItem
                    key={uuid()}
                    url={item.img}
                    posStyle={{...item.posStyle}}
                  />
                );
              })}
            </div>
            <div className="tgn-flex-full">
              <div className="tgn-block-2-right-container">
                <PureImage url="/landing/CONSTRUCTION/SHOW-ROOM.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tgn-block-item tgn-flex-block-3">
        <div
          style={{
            height: '100%'
          }}
          className="container"
        >
          <div className="tgn-flex-item tgn-non-revers-block-3">
            <div className="block-wrapper tgn-flex-full tgn-block-3-left-container">
              <div className="block-3-img-inner">
                <PureImage url="/landing/CONSTRUCTION/MODA.png" mode="cover" />
              </div>
            </div>
            <div className="asset-position asset-position-block-3">
              {assets_3.map((item) => {
                return (
                  <AssetItem
                    key={uuid()}
                    url={item.img}
                    posStyle={{...item.posStyle}}
                    mode="cover"
                    eclStyle={{
                      overflow: 'hidden',
                      borderRadius: '50%',
                      border: '3px solid rgba(146, 88, 70,0.6)'
                    }}
                  />
                );
              })}
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
              <div className="part-container tgn-absolute-block-3-item-left">
                <SectionTitles title="Lĩnh Vực khai thác" />
                <p style={{fontSize: 14}}>
                  <strong>Thế Giới Nhà</strong> trực tiếp khai thác và cung ứng
                  nguồn nguyên vật liệu chất lượng, đảm bảo chuỗi cung ứng bền
                  vững và tối ưu chi phí cho khách hàng.
                </p>
                <div style={{marginTop: 35}}>
                  <Button
                    btnProps={{
                      text: t('Btn_ViewMore'),
                      linkTo: routes.about
                    }}
                  />
                </div>
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

const assets_1 = [
  {
    img: '/landing/CONSTRUCTION/ASSET-1.png',
    posStyle: {left: -100, top: 10}
  },
  {
    img: '/landing/CONSTRUCTION/ASSET-2.png',
    posStyle: {left: -40, top: -10}
  },
  {
    img: '/landing/CONSTRUCTION/ASSET-3.png',
    posStyle: {top: -15}
  },
  {
    img: '/landing/CONSTRUCTION/ASSET-4.png',
    posStyle: {left: 20, top: -15}
  },
  {
    img: '/landing/CONSTRUCTION/ASSET-5.png',
    posStyle: {right: -15, bottom: 10}
  }
];

const assets_2 = [
  {
    img: '/landing/CONSTRUCTION/ASSET-6.png',
    posStyle: {right: -90, top: 5}
  },
  {
    img: '/landing/CONSTRUCTION/ASSET-7.png',
    posStyle: {right: -45, top: -5}
  },
  {
    img: '/landing/CONSTRUCTION/ASSET-8.png',
    posStyle: {top: -5, right: -15}
  },
  {
    img: '/landing/CONSTRUCTION/ASSET-9.png',
    posStyle: {top: -5}
  },
  {
    img: '/landing/CONSTRUCTION/ASSET-10.png',
    posStyle: {bottom: 10}
  }
];

const assets_3 = [
  {
    img: '/landing/CONSTRUCTION/ASSET-11.png',
    posStyle: {left: -100, top: 10}
  },
  {
    img: '/landing/CONSTRUCTION/ASSET-12.png',
    posStyle: {left: -40, top: -10}
  },
  {
    img: '/landing/CONSTRUCTION/ASSET-13.png',
    posStyle: {top: -15}
  },
  {
    img: '/landing/CONSTRUCTION/ASSET-14.png',
    posStyle: {left: 20, top: -15}
  },
  {
    img: '/landing/CONSTRUCTION/ASSET-15.png',
    posStyle: {right: -15, bottom: 10}
  }
];
