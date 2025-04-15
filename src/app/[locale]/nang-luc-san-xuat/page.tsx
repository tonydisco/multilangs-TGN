import {CardBase} from '@/components/Common/Card';
import {PureImage} from '@/components/Common/Images';
import {SectionBase} from '@/components/Common/Section';
import {BaseSlider} from '@/components/Common/Sliders';
import {SectionTitles} from '@/components/Common/Titles';
import {TitlePageView} from '@/components/Hero';
import PageLayout from '@/components/PageLayout';

export default function PathnamesPage() {
  return (
    <PageLayout
      title={<TitlePageView title="Năng lực sản xuất" />}
      className="nlsx-wrapper"
    >
      <SectionBase>
        <CardBase
          item={{
            title: 'Hệ thống nhà máy sản xuất bê tông',
            content:
              'Thế Giới Nhà sở hữu 19  trạm trộn hiện đại, sẵn sàng cung cấp bê tông thương phẩm đạt tiêu chuẩn chất lượng cao.',
            image: '/landing/NLSX/SXBT.png',
            linkTo: '/',
            flex: {
              left: 1,
              right: 2
            },
            isReverse: true,
            cardStyle: {
              height: 500
            }
          }}
        />
      </SectionBase>
      <SectionBase bgImage="/landing/NLSX/SXCK-BG.png">
        <CardBase
          item={{
            title: 'Hệ thống sản xuất sản phẩm cấu kiện bê tông',
            content:
              'Thế Giới Nhà sở hữu 9 nhà máy cấu kiện bê tông đúc sẵn với công nghệ tiên tiến, đáp ứng yêu cầu kỹ thuật và tiến độ xây dựng.',
            image: '/landing/NLSX/SXCK.png',
            linkTo: '/',
            flex: {
              left: 1,
              right: 2
            },
            cardStyle: {
              height: 500
            }
          }}
        />
      </SectionBase>
      <SectionBase>
        <CardBase
          item={{
            title: 'phòng kiểm định chất lượng',
            content:
              'Thế Giới Nhà sở hữu hệ thống kiểm định đạt chuẩn, kiểm soát chặt chẽ chất lượng sản phẩm từ nguyên liệu đầu vào đến thành phẩm, đảm bảo độ đánh giá kết quả chính xác và nhanh chóng.',
            image: '/landing/NLSX/KDCL.png',
            linkTo: '/',
            flex: {
              left: 1,
              right: 2
            },
            cardStyle: {
              height: 500
            },
            isReverse: true
          }}
        />
      </SectionBase>
      <SectionBase bgImage="/landing/NLSX/TTB-BG.png">
        <CardBase
          item={{
            title: 'hệ thống trang - thiết bị',
            content:
              'Thế Giới Nhà đầu tư đồng bộ máy móc, thiết bị tiên tiến nhằm nâng cao năng suất, tối ưu quy trình sản xuất và thi công.',
            image: '/landing/NLSX/TTB.png',
            linkTo: '/',
            flex: {
              left: 1,
              right: 2
            },
            cardStyle: {
              height: 500
            }
          }}
        />
      </SectionBase>

      <SectionBase>
        <SectionTitles title="giấy chứng nhận" style={{textAlign: 'center'}} />
        <BaseSlider
          rederList={Array.from({length: 4}).map((_, i) => {
            return (
              <div key={i}>
                <div
                  style={{
                    margin: 10
                  }}
                >
                  <PureImage
                    url={`/landing/NLSX/${i + 1}.png`}
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: 300,
                      borderRadius: 8
                    }}
                  />
                </div>
              </div>
            );
          })}
          slidesToShow={4}
        />
      </SectionBase>
    </PageLayout>
  );
}
