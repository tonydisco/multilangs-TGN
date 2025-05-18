import NotFoundPage from '@/components/NotFoundPage';
import '@/styles/productDetail.scss';
import Other from './Other';
import Slider from './Slider';
import {
  TableComponent,
  tableData_1,
  tableData_2,
  tableHeader_1,
  tableHeader_2
} from './Table';
import {IPageDefaultProps} from '@/models/interface';
import ChildHero from '@/components/Common/ChildHero';

const ProductDetail = async ({params}: Readonly<IPageDefaultProps>) => {
  const {slug} = await params;
  const {data} = await getProductDetail(slug);

  if (!data) {
    return <NotFoundPage />;
  }

  return (
    <section className="product-detail">
      <ChildHero title={data.title} imageUrl={data.imageUrl} />
      <div className="pd-content">
        <div className="container">
          {data?.contents?.slider && <Slider mockData={data.contents.slider} />}

          <div className="pd-content-detail">
            <div className="pd-flex-item-default">
              <div style={{flex: 4}}>
                <>
                  {data.contents?.blocks?.block_1 && (
                    <>
                      {data.contents?.blocks?.block_1.map((item, index) => {
                        const className =
                          item.type === 'number' ? 'pd-number' : 'pd-dot';
                        return (
                          <div key={index} className="pd-content-detail-item">
                            <div className="pd-title pd-title-uppercase">
                              {item.title}
                            </div>
                            <ul className={`${className} pd-description`}>
                              {item.contents.map((content, index) => (
                                <li
                                  key={index}
                                  dangerouslySetInnerHTML={{
                                    __html: content
                                  }}
                                />
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </>
                  )}
                </>

                {data.table === 1 && (
                  <div className="pd-content-detail-item pd-table-data">
                    <TableComponent
                      tableData={tableData_1}
                      tableHeader={tableHeader_1}
                    />
                  </div>
                )}
                {data.contents?.blocks?.block_2 && (
                  <div className="pd-content-detail-item">
                    <div className="pd-title pd-title-uppercase">
                      {data.contents?.blocks?.block_2.title}
                    </div>
                    <div className="pd-description">
                      <ul className="pd-dot">
                        {data.contents?.blocks?.block_2.contents.map(
                          (item, index) => (
                            <li
                              key={index}
                              dangerouslySetInnerHTML={{
                                __html: item
                              }}
                            />
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                )}
                {data.table === 2 && (
                  <div className="pd-content-detail-item pd-table-data">
                    <TableComponent
                      tableData={tableData_2}
                      tableHeader={tableHeader_2}
                    />
                  </div>
                )}

                {data.contents?.blocks?.block_3 && (
                  <div className="pd-content-detail-item">
                    <div className="pd-title pd-title-uppercase">
                      {data.contents?.blocks?.block_3.title}
                    </div>
                    <div
                      className="pd-description"
                      style={{marginBottom: '1rem'}}
                    >
                      {data.contents?.blocks?.block_3?.subTitle?.map(
                        (item, index) => (
                          <div
                            key={index}
                            dangerouslySetInnerHTML={{
                              __html: item
                            }}
                          />
                        )
                      )}
                    </div>
                    <div className="pd-description">
                      <ul className="pd-dot">
                        {data.contents?.blocks?.block_3.contents.map(
                          (item, index) => (
                            <li
                              key={index}
                              dangerouslySetInnerHTML={{
                                __html: item
                              }}
                            />
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              {data.contents?.blocks?.block_4 && (
                <div style={{flex: 1}}>
                  <Other mockData3={data.contents?.blocks?.block_4} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;

const getProductDetail = async (slug: string) => {
  if (slug === 'be-tong-thuong-pham') {
    return {
      data: {
        table: 1,
        title: 'Bê tông thương phẩm',
        imageUrl:
          'https://tgn-cdn.vikiworld.vn/media/be-tong-thuong-pham_3354343302689193984.png',
        contents: {
          slider: {
            title:
              'Bê tông tươi Thế giới nhà group Giải pháp xây dựng hiện đại cho mọi công trình.',
            image: [
              'https://tgn-cdn.vikiworld.vn/media/be-tong-tuoi_3354484960617562112.png',
              'https://tgn-cdn.vikiworld.vn/media/san-pham-be-tong-thuong-pham_3351137537157496833.png'
            ],
            contents: [
              {
                title: 'Bê tông tươi là gì?',
                content:
                  'Bê tông tươi là hỗn hợp bê tông trộn sẵn được sản xuất từ cát, đá, xi măng, nước và phụ gia (nếu có), sau đó vận chuyển bằng xe bồn đến công trình. Đây là giải pháp hiện đại giúp tiết kiệm thời gian, đảm bảo chất lượng đồng đều và giảm công lao động so với bê tông trộn thủ công.'
              }
            ]
          },
          blocks: {
            block_1: [
              {
                title: 'Thành phần chính của bê tông tươi bao gồm',
                contents: [
                  'Xi măng: Chất kết dính các thành phần khác lại với nhau.',
                  'Cát: Cốt liệu nhỏ, lấp đầy các khoảng trống giữa các cốt liệu lớn hơn.',
                  'Đá (hoặc sỏi): Cốt liệu lớn, tạo độ cứng và độ bền cho bê tông.',
                  'Nước: Hòa trộn các thành phần, kích hoạt quá trình thủy hóa của xi măng.',
                  'Phụ gia (nếu cần): Các chất phụ gia được thêm vào để cải thiện một số tính chất của bê tông, như độ linh động, thời gian đông kết, độ bền,...'
                ],
                type: 'number'
              },
              {
                title: 'phân loại 1 số bê tông tươi',
                contents: [
                  'Bê tông tươi thường được phân loại theo mác bê tông, thể hiện khả năng chịu nén của bê tông. Các mác bê tông phổ biến bao gồm:',
                  'M150, M200: Sử dụng cho các công trình dân dụng thông thường.',
                  'M250, M300: Sử dụng cho các công trình nhà cao tầng, cầu đường.',
                  'M350, M400: Sử dụng cho các công trình đặc biệt, yêu cầu độ chịu lực cao.',
                  'M450, M500: Sử dụng cho các công trình siêu cao tầng, cầu cạn, bệ móng chịu tải trọng lớn.',
                  'M600, M700: Áp dụng cho các công trình thủy lợi, đập nước, hầm ngầm yêu cầu khả năng chống thấm cao.',
                  'M800 trở lên: Dùng trong các dự án đặc biệt như nhà máy điện hạt nhân, kết cấu bê tông trong môi trường khắc nghiệt (nhiệt độ cao, hóa chất ăn mòn)'
                ],
                type: 'dot'
              }
            ],
            block_2: {
              title: 'quy trình cấp phát bê tông',
              contents: [
                '<strong>B1:</strong> Nhận thông tin và Báo giá: Nhận thông tin nhu cầu của khách hàng, tiến hành báo giá bê tông và các dịch vụ kèm theo như bơm bê tông, …',
                '<strong>B2:</strong> Ký kết hợp đồng',
                '<strong>B3:</strong> Yêu cầu đặt hàng: Bước này bắt đầu khi khách hàng liên hệ với bộ phận bán hàng của TGN Group để đặt hàng. Khách hàng cung cấp thông tin về loại bê tông cần và số lượng cần mua.',
                '<strong>B4:</strong> Xác nhận đơn hàng và tiến hành sản xuất: TGN Group bắt đầu chuẩn bị và sản xuất bê tông theo yêu cầu của khách hàng. Quá trình này bao gồm việc chọn lựa các nguyên liệu, trộn bê tông, kiểm tra chất lượng và đảm bảo tuân thủ các tiêu chuẩn kỹ thuật.',
                '<strong>B5:</strong> Giao hàng: Khi bê tông đã sẵn sàng, xe bê tông của TGN Group vận chuyển bê tông đến địa điểm công trình theo thời gian đã thỏa thuận trước đó với khách hàng.',
                '<strong>B6:</strong> Kiểm tra hoàn thiện: Sau khi hoàn thành việc đổ bê tông, quá trình kiểm tra và hoàn thiện được thực hiện để đảm bảo chất lượng và độ bền của bề mặt bê tông.',
                '<strong>B7:</strong> Thanh toán',
                '<strong>B8:</strong> Chăm sóc khách hàng: Bao gồm việc thu thập phản hồi từ khách hàng về chất lượng sản phẩm và dịch vụ, giải quyết mọi vấn đề phát sinh sau giao hàng, và duy trì mối quan hệ hợp tác lâu dài với khách hàng.'
              ]
            },
            block_3: {
              title: 'Vì sao nên chọn mua bê tông tươi TGN Group',
              subTitle: [
                'Với hệ thống trạm trộn hiện đại, đội ngũ kỹ thuật viên giàu kinh nghiệm, TGN Group cam kết mang đến sản phẩm bê tông tươi đạt tiêu chuẩn, đúng tiến độ và giá cả cạnh tranh.'
              ],
              contents: [
                '<strong>Chất lượng đồng đều:</strong> Bê tông thương phẩm được sản xuất trên dây chuyền hiện đại, tự động hóa cùng với nguyên vật liệu đầu vào được kiểm soát chặt chẽ đảm bảo chất lượng bê tông đồng đều, đúng với mác bê tông thiết kế, theo tiêu chuẩn Việt Nam (TCVN 9340:2012).',
                '<strong>Đa dạng mác bê tông:</strong> Đáp ứng mọi yêu cầu của công trình.',
                '<strong>Pha trộn theo yêu cầu:</strong> Linh hoạt điều chỉnh cấp phối để phù hợp với từng công trình.',
                '<strong>Giao hàng nhanh chóng:</strong> Hệ thống xe bồn chuyên dụng, đảm bảo tiến độ thi công.',
                '<strong>Dịch vụ chuyên nghiệp, giao hàng nhanh chóng</strong>'
              ]
            },
            block_4: {
              title: 'Các sản phẩm khác',
              contents: [
                'Cống BTCT rung ép',
                'Cọc bê tông ly tâm dự ứng lực',
                'Gạch Terrazzo',
                'Gạch không nung',
                'Gạch tự chèn',
                'Các sản phẩm cấu kiện BT khác',
                'Sản phẩm khác'
              ]
            }
          }
        }
      }
    };
  }
  return {
    data: {
      table: 2,
      title: 'cọc bê tông dự ứng lực',
      imageUrl:
        'https://tgn-cdn.vikiworld.vn/media/coc-be-tong-du-ung-luc_3354493165213057025.png',
      contents: {
        slider: {
          title:
            'Cọc bê tông dự ứng lực Thế Giới Nhà Group Giải pháp cho kết cấu vững chắc',
          image: [
            'https://tgn-cdn.vikiworld.vn/media/coc-be-tong-du-ung-luc_3359215118469562369.png',
            'https://tgn-cdn.vikiworld.vn/media/coc-be-tong-du-ung-luc_3359215118469562369.png'
          ],
          contents: [
            {
              title:
                'Cọc bê tông dự ứng lực PHC (Prestressed High-strength Concrete):',
              content:
                'Bê tông tươi là hỗn hợp bê tông trộn sẵn được sản xuất từ cát, đá, xi măng, nước và phụ gia (nếu có), sau đó vận chuyển bằng xe bồn đến công trình. Đây là giải pháp hiện đại giúp tiết kiệm thời gian, đảm bảo chất lượng đồng đều và giảm công lao động so với bê tông trộn thủ công.'
            }
          ]
        },
        blocks: {
          block_2: {
            title: 'Tiêu chuẩn',
            contents: [
              '<strong>Tiêu chuẩn sản xuất:</strong> Cọc bê tông dự ứng lực loại PHC được thiết kế theo TCVN 7888:2014.',
              '<strong>Tiêu chuẩn nguyên liệu đầu vào: </strong>'
            ]
          },
          block_3: {
            title: 'Lợi ích khi sử dụng cọc dự ứng lực',
            contents: [
              '<strong>Khả Năng Chịu Lực Cao:</strong> Được sản xuất từ bê tông cường độ cao (từ 80MPa trở lên), giúp cọc PHC có độ bền vượt trội. Ứng suất trước giúp cọc giảm nguy cơ nứt vỡ trong quá trình vận chuyển, thi công và khai thác.',
              '<strong>Tiết Kiệm Chi Phí & Thời Gian Thi Công:</strong> Cọc PHC có thể được sản xuất sẵn với chiều dài lớn, giảm số lượng mối nối, giúp tiết kiệm nhân công và rút ngắn thời gian thi công. Giảm chi phí xử lý nền móng nhờ khả năng chịu tải cao.',
              '<strong>Độ Bền Cao & Kháng Môi Trường Khắc Nghiệt:</strong> Khả năng chống thấm tốt, giúp cọc ít bị ảnh hưởng bởi nước ngầm và môi trường xâm thực. Ít bị ảnh hưởng bởi sự thay đổi nhiệt độ, không bị co ngót hoặc giãn nở nhiều như cọc thép.',
              '<strong>Thi Công Linh Hoạt, Ứng Dụng Rộng Rãi:</strong> Có nhiều đường kính (từ D300 đến D800) phù hợp với nhiều loại công trình: nhà ở, cao ốc, cầu đường, bến cảng…. Dễ dàng kiểm soát chất lượng do được sản xuất theo quy trình công nghiệp.'
            ]
          },
          block_4: {
            title: 'Các sản phẩm khác',
            contents: [
              'Cống BTCT rung ép',
              'Cọc bê tông ly tâm dự ứng lực',
              'Gạch Terrazzo',
              'Gạch không nung',
              'Gạch tự chèn',
              'Các sản phẩm cấu kiện BT khác',
              'Sản phẩm khác'
            ]
          }
        }
      }
    }
  };
};
