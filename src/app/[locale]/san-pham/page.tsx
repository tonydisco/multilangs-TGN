import {Button} from '@/components/Common/Button';
import {CardItem, CardNoBorderLine} from '@/components/Common/Card';
import {PureImage} from '@/components/Common/Images';
import {SectionBase} from '@/components/Common/Section';
import {SectionSub, SectionTitles} from '@/components/Common/Titles';
import {TitlePageView} from '@/components/Hero';
import PageLayout from '@/components/PageLayout';
import {Locale} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {use} from 'react';

type Props = {
  params: Promise<{locale: Locale}>;
};

export default function Page({params}: Readonly<Props>) {
  const {locale} = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <PageLayout
      title={<TitlePageView title="sản phẩm" />}
      className="sp-wrapper"
    >
      <SectionBase
        style={{
          backgroundColor: '#DDCDC5',
          zIndex: 'unset'
        }}
      >
        <div className="d-flex justify-content-end position-relative">
          <div style={{position: 'absolute', left: 0, bottom: 20}}>
            <CardNoBorderLine style={{width: 520, height: 'auto'}}>
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
                    text: 'Xem thêm',
                    linkTo: '/'
                  }}
                />
              </div>
            </CardNoBorderLine>
          </div>
          <div
            style={{
              width: '70%',
              border: '10px solid rgba(255, 255, 255, 0.5)',
              borderRadius: 24
            }}
          >
            <PureImage url="/landing/PRODUCTS/BTTP-TRUCK.png" />
          </div>
        </div>
      </SectionBase>
      <SectionBase>
        <SectionTitles title="cấu kiện BÊ TÔNG" style={{textAlign: 'center'}} />
        <SectionSub
          style={{textAlign: 'center'}}
          text={
            <p style={{maxWidth: 768, margin: '0 auto'}}>
              Sau thành công của bê tông thương phẩm, Thế Giới Nhà mở rộng sang
              sản xuất các sản phẩm cấu kiện bê tông đúc sẵn nhằm cung ứng giải
              pháp xây dựng đồng bộ, nâng cao chất lượng và rút ngắn thời gian
              thi công cho các dự án.
            </p>
          }
        />

        <div style={{marginTop: 75}}>
          <div
            style={{
              display: 'flex',
              gap: 30,
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            {mockProducts.map((item, idx) => {
              const itemIndex = 1 + idx;
              return (
                <CardItem
                  item={{
                    title: item.title,
                    image: item.image,
                    style: {
                      height: 250,
                      maxWidth: 300,
                      width: '100%'
                    }
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
            <p style={{maxWidth: 768, margin: '0 auto'}}>
              Sau thành công của bê tông thương phẩm, Thế Giới Nhà mở rộng sang
              sản xuất các sản phẩm cấu kiện bê tông đúc sẵn nhằm cung ứng giải
              pháp xây dựng đồng bộ, nâng cao chất lượng và rút ngắn thời gian
              thi công cho các dự án.
            </p>
          }
        />

        <div style={{marginTop: 75}}>
          <div
            style={{
              display: 'flex',
              gap: 30,
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            {mockProducts_2.map((item, idx) => {
              const itemIndex = 1 + idx;
              return (
                <CardItem
                  item={{
                    title: item.title,
                    image: item.image,
                    style: {
                      height: 250,
                      maxWidth: 300,
                      width: '100%'
                    },
                    imgMode: idx === 1 ? 'cover' : 'contain'
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
