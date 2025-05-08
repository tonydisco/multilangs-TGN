import {Button} from '@/components/Common/Button';
import {CardNoBorderLine, CardProduct} from '@/components/Common/Card';
import {PureImage} from '@/components/Common/Images';
import {SectionBase} from '@/components/Common/Section';
import {SectionSub, SectionTitles} from '@/components/Common/Titles';
import {TitlePageView} from '@/components/Hero';
import PageLayout from '@/components/PageLayout';
import {IPageDefaultProps} from '@/models/interface';
import {getTranslations} from 'next-intl/server';

import '@/styles/products.scss';
import {routes} from '@/utils/config';

export default async function Page({params}: Readonly<IPageDefaultProps>) {
  const {locale} = await params;
  const t = await getTranslations({locale});

  return (
    <PageLayout
      title={<TitlePageView title={t('HeaderNavProducts')} />}
      className="sp-wrapper"
    >
      <SectionBase className="tgn-bg-color-brown-pastel">
        <div className=" position-relative default-flex-item">
          <div className="item-in-flex-box">
            <CardNoBorderLine className="card-product-default">
              <div className="d-flex flex-column justify-content-between align-items-start gap-5">
                <div>
                  <SectionTitles
                    title={
                      <div>
                        bê tông <br /> thương phẩm
                      </div>
                    }
                  />
                  <SectionSub
                    text="Bê tông thương phẩm là dòng sản phẩm chủ lực của Thế Giới
                    Nhà. Với hơn 16 năm phát triển, bê tông TGN đã khẳng định uy
                    tín, trở thành lựa chọn tin cậy của các nhà thầu và chủ đầu
                    tư cho mọi công trình."
                  />
                </div>
                <Button
                  btnProps={{
                    text: t('Btn_ViewMore'),
                    linkTo: routes.product + '/be-tong-thuong-pham'
                  }}
                />
              </div>
            </CardNoBorderLine>
          </div>
          <div className="item-2-in-flex-box">
            <PureImage url="/landing/PRODUCTS/BTTP-TRUCK.png" />
          </div>
        </div>
      </SectionBase>
      <SectionBase contentClassName="product-content-wrapper">
        <SectionTitles title="cấu kiện BÊ TÔNG" style={{textAlign: 'center'}} />
        <SectionSub
          style={{textAlign: 'center'}}
          text={
            <p className="tgn-limit-width-content">
              Sau thành công của bê tông thương phẩm, Thế Giới Nhà mở rộng sang
              sản xuất các sản phẩm cấu kiện bê tông đúc sẵn nhằm cung ứng giải
              pháp xây dựng đồng bộ, nâng cao chất lượng và rút ngắn thời gian
              thi công cho các dự án.
            </p>
          }
        />

        <div className="tgn-products-section tgn-production-list">
          <div className="tgn-flex-list-box product-list-flex">
            {mockProducts.map((item, idx) => {
              const itemIndex = 1 + idx;
              return (
                <CardProduct
                  item={{
                    title: item.title,
                    image: item.image,
                    className: 'grid-item-mobile'
                  }}
                  key={`product-${itemIndex}`}
                />
              );
            })}
          </div>
        </div>
      </SectionBase>
      <SectionBase contentStyle={{paddingTop: 0}}>
        <SectionTitles
          title="các sản phẩm khác"
          style={{textAlign: 'center'}}
        />
        <SectionSub
          style={{textAlign: 'center'}}
          text={
            <p className="tgn-limit-width-content">
              Sau thành công của bê tông thương phẩm, Thế Giới Nhà mở rộng sang
              sản xuất các sản phẩm cấu kiện bê tông đúc sẵn nhằm cung ứng giải
              pháp xây dựng đồng bộ, nâng cao chất lượng và rút ngắn thời gian
              thi công cho các dự án.
            </p>
          }
        />
        <div className="tgn-products-section tgn-production-list">
          <div className="tgn-flex-list-box product-list-flex">
            {mockProducts_2.map((item, idx) => {
              const itemIndex = 1 + idx;
              return (
                <CardProduct
                  item={{
                    title: item.title,
                    image: item.image,
                    className: 'grid-item-mobile'
                  }}
                  key={`product-${itemIndex}`}
                />
              );
            })}
          </div>
        </div>
      </SectionBase>
    </PageLayout>
  );
}

const mockProducts = [
  {
    title: 'cống btct rung ép',
    image: '/landing/PRODUCTS/PRODUCT_ICO_2.png'
  },
  {
    title: 'cọc bê tông ly tâm dự ứng lực',
    image: '/landing/PRODUCTS/PRODUCT_ICO_3.png'
  },
  {
    title: 'gạch terrazzo',
    image: '/landing/PRODUCTS/PRODUCT_ICO_5.png'
  },
  {
    title: 'gạch không nung',
    image: '/landing/PRODUCTS/PRODUCT_ICO_6.png'
  },
  {
    title: 'gạch tự chèn',
    image: '/landing/PRODUCTS/PRODUCT_ICO_7.png'
  },
  {
    title: 'các sản phẩm cấu kiện BT KHÁC',
    image: '/landing/PRODUCTS/PRODUCT_ICO_8.png'
  },

  {
    title: 'sản phẩm khác',
    image: '/landing/PRODUCTS/PRODUCT_ICO_11.png'
  }
];

const mockProducts_2 = [
  {
    title: 'gạch tuynel',
    image: '/landing/PRODUCTS/PRODUCT_ICO_4.png'
  },

  {
    title: 'sản phẩm khai thác mỏ',
    image: '/landing/PRODUCTS/PRODUCT_ICO_9.png'
  },
  {
    title: 'sản phẩm phân phối khác',
    image: '/landing/PRODUCTS/PRODUCT_ICO_10.png'
  }
];
