import {getAlbum} from '@/apis/album';
import {CardBase} from '@/components/Common/Card';
import {SectionBase} from '@/components/Common/Section';
import {TitlePageView} from '@/components/Hero';
import PageLayout from '@/components/PageLayout';
import {IPageDefaultProps} from '@/models/interface';
import '@/styles/productionCap.scss';
import {albums, routes} from '@/utils/config';
import {getTranslations} from 'next-intl/server';
import NLSXSlider from './Slider';
import {SectionTitles} from '@/components/Common/Titles';

const mockData = [
  {
    title: 'Hệ thống nhà máy sản xuất bê tông',
    content:
      'Thế Giới Nhà sở hữu 19  trạm trộn hiện đại, sẵn sàng cung cấp bê tông thương phẩm đạt tiêu chuẩn chất lượng cao.',
    image: '/landing/NLSX/SXBT.png',
    linkTo: routes.productionCapacity + '/be-tong-thuong-pham',
    isReverse: true
  },
  {
    title: 'Hệ thống sản xuất sản phẩm cấu kiện bê tông',
    content:
      'Thế Giới Nhà sở hữu 9 nhà máy cấu kiện bê tông đúc sẵn với công nghệ tiên tiến, đáp ứng yêu cầu kỹ thuật và tiến độ xây dựng.',
    image: '/landing/NLSX/SXCK.png',
    linkTo:
      routes.productionCapacity +
      '/he-thong-nha-may-san-xuat-san-pham-cau-kien-be-tong',
    isReverse: false
  },
  {
    title: 'phòng kiểm định chất lượng',
    content:
      'Thế Giới Nhà sở hữu hệ thống kiểm định đạt chuẩn, kiểm soát chặt chẽ chất lượng sản phẩm từ nguyên liệu đầu vào đến thành phẩm, đảm bảo độ đánh giá kết quả chính xác và nhanh chóng.',
    image: '/landing/NLSX/KDCL.png',
    linkTo: routes.productionCapacity + '/phong-kiem-dinh-chat-luong',
    isReverse: true
  },
  {
    title: 'hệ thống trang - thiết bị',
    content:
      'Thế Giới Nhà đầu tư đồng bộ máy móc, thiết bị tiên tiến nhằm nâng cao năng suất, tối ưu quy trình sản xuất và thi công.',
    image: '/landing/NLSX/TTB.png',
    linkTo: routes.productionCapacity + '/he-thong-trang-thiet-bi',
    isReverse: false
  }
];

export default async function Page({params}: Readonly<IPageDefaultProps>) {
  const {locale} = await params;
  const t = await getTranslations({locale});
  const certData = await getAlbum(albums.Certificates);

  return (
    <PageLayout
      title={<TitlePageView title={t('HeaderNavProductionCapacity')} />}
      className="production-capacity-wrapper"
    >
      {mockData.map((item, index) => {
        return (
          <SectionBase
            key={index}
            bgImage={item.isReverse ? item.image : undefined}
            className={`center-section-wrapper section-wrapper-bg ${item.isReverse ? 'reverse' : ''}`}
            contentClassName="tgn-content-mobile"
          >
            <CardBase
              item={{
                ...item,
                flex: {
                  left: 1,
                  right: 2
                },
                cardStyle: {
                  height: 500
                },
                className: 'card-inner-mobile',
                cardClassName: 'card-wrapper-mobile',
                title: <SectionTitles title={item.title} />,
                desClassName: 'tgn-base-limit-four-lines'
              }}
            />
          </SectionBase>
        );
      })}
      {certData && <NLSXSlider masterData={certData} />}
    </PageLayout>
  );
}
