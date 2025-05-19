import ChildHero from '@/components/Common/ChildHero';
import {SectionBase} from '@/components/Common/Section';
import {SectionTitles, TitleInCard} from '@/components/Common/Titles';

import {PureImage} from '@/components/Common/Images';
import {BaseSlider} from '@/components/Common/Sliders';
import NotFoundPage from '@/components/NotFoundPage';
import {IPageDefaultProps} from '@/models/interface';
import '@/styles/childPage.scss';

const Page = async ({params}: Readonly<IPageDefaultProps>) => {
  const {slug} = await params;
  const {data} = await getChilPageDetail(slug);

  if (!data) {
    return <NotFoundPage />;
  }

  return (
    <section className="wrapper-for-lastchild">
      <ChildHero title={data.title} imageUrl={data.imageUrl} />
      <>
        {data?.contents?.length > 0 ? (
          <>
            {data.contents.map((item, index) => {
              return (
                <SectionBase key={index} className={`child-page-container`}>
                  <SectionTitles
                    title={item.title}
                    style={{textAlign: 'center', padding: '20px 0'}}
                  />
                  <div>
                    <BaseSlider
                      total={item.contents.length}
                      renderList={item.contents.map((slide, index) => {
                        return (
                          <div key={index}>
                            <div style={{margin: 10}}>
                              <div className="child-page-img-slider-wrapper">
                                <div className="child-page-img-slider">
                                  <PureImage url={slide.imgUrl} mode="cover" />
                                </div>
                                <div className="child-page-list-content">
                                  {slide.title && (
                                    <TitleInCard title={slide.title} />
                                  )}
                                  {slide.blocks.length > 0 && (
                                    <ul className="child-page-list-blocks">
                                      {slide.blocks.map((block, index) => (
                                        <li key={index}>{block}</li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      slidesToShow={2}
                    />
                  </div>
                </SectionBase>
              );
            })}
          </>
        ) : (
          <div style={{height: 300}} />
        )}
      </>
    </section>
  );
};

export default Page;

const getChilPageDetail = async (slug: string) => {
  if (slug === 'be-tong-thuong-pham') {
    return {
      data: {
        title: 'hệ thống nhà máy sản xuất bê tông thương phẩm',
        imageUrl:
          'https://tgn-cdn.vikiworld.vn/media/be-tong-thuong-pham_3354343302689193984.png',
        contents: [
          {
            title: 'Trung tâm sản xuất đông nam',
            sub: '',
            contents: [
              {
                title: 'Nhà máy bê tông thương phẩm long khánh',
                blocks: [
                  'Tổng công suất: 360m3/h',
                  'Địa điểm: Lô K9, KCN Long Khánh, Xã Bình Lộc, Thành phố Long Khánh, Tỉnh Đồng Nai'
                ],
                imgUrl:
                  'https://tgn-cdn.vikiworld.vn/media/be-tong-tuoi_3354484960617562112.png'
              },
              {
                title: 'NHÀ MÁY NHƠN TRẠCH – ĐỒNG NAI',
                blocks: [
                  'Tổng công suất: 360m3/h',
                  'Địa điểm: Đường 25B, KCN Nhơn Trạch 2, Thị trấn Hiệp Phước, Huyện Nhơn Trạch, Tỉnh Đồng Nai'
                ],
                imgUrl:
                  'https://tgn-cdn.vikiworld.vn/media/roadmap-2008_3351137536356384769.png'
              },
              {
                title: 'NHÀ MÁY NHƠN TRẠCH – ĐỒNG NAI',
                blocks: [
                  'Tổng công suất: 360m3/h',
                  'Địa điểm: Đường 25B, KCN Nhơn Trạch 2, Thị trấn Hiệp Phước, Huyện Nhơn Trạch, Tỉnh Đồng Nai'
                ],
                imgUrl:
                  'https://tgn-cdn.vikiworld.vn/media/roadmap-2008_3351137536356384769.png'
              }
            ]
          },
          {
            title: 'Trung tâm sản xuất Sài Gòn',
            sub: '',
            contents: [
              {
                title: 'NHÀ MÁY RẠch CHIẾC - TP. HỒ CHÍ MINH',
                blocks: [
                  'Tổng công suất: 240m3/h',
                  'Địa điểm: Km7, Xa lộ Hà Nội, Phường Trường Thọ, Thành phố Thủ Đức, TP Hồ Chí Minh'
                ],
                imgUrl:
                  'https://tgn-cdn.vikiworld.vn/media/be-tong-tuoi_3354484960617562112.png'
              },
              {
                title: 'NHÀ MÁY LONG HẬU – LONG AN',
                blocks: [
                  'Tổng công suất: 240m3/h',
                  'Địa điểm: Lô C.02 - C.03, đường số 3, KCN Long Hậu, Xã Long Hậu, Huyện Cần Giuộc, Tỉnh Long An'
                ],
                imgUrl:
                  'https://tgn-cdn.vikiworld.vn/media/be-tong-tuoi_3354484960617562112.png'
              },
              {
                title: 'NHÀ MÁY LONG HẬU – LONG AN',
                blocks: [
                  'Tổng công suất: 240m3/h',
                  'Địa điểm: Lô C.02 - C.03, đường số 3, KCN Long Hậu, Xã Long Hậu, Huyện Cần Giuộc, Tỉnh Long An'
                ],
                imgUrl:
                  'https://tgn-cdn.vikiworld.vn/media/be-tong-tuoi_3354484960617562112.png'
              }
            ]
          },
          {
            title: 'Trung tâm sản xuất tây nam',
            sub: '',
            contents: [
              {
                title: 'NHÀ MÁY TÂN UYÊN – BÌNH DƯƠNG',
                blocks: [
                  'Tổng công suất: 240m3/h',
                  'Địa điểm: Lô B6-B7, đường N4, KCN Nam Tân Uyên, Phường Khánh Bình, Thị xã Tân Uyên, Tỉnh Bình Dương'
                ],
                imgUrl:
                  'https://tgn-cdn.vikiworld.vn/media/be-tong-tuoi_3354484960617562112.png'
              },
              {
                title: 'NHÀ MÁY DẦU TIẾNG – BÌNH DƯƠNG',
                blocks: [
                  'Tổng công suất: 240m3/h',
                  'Địa điểm: Số 19/17, Ấp Gò Mối, Xã Thanh Tuyền, Huyện Dầu Tiếng, Tỉnh Bình Dương'
                ],
                imgUrl:
                  'https://tgn-cdn.vikiworld.vn/media/be-tong-tuoi_3354484960617562112.png'
              },
              {
                title: 'NHÀ MÁY DẦU TIẾNG – BÌNH DƯƠNG',
                blocks: [
                  'Tổng công suất: 240m3/h',
                  'Địa điểm: Số 19/17, Ấp Gò Mối, Xã Thanh Tuyền, Huyện Dầu Tiếng, Tỉnh Bình Dương'
                ],
                imgUrl:
                  'https://tgn-cdn.vikiworld.vn/media/be-tong-tuoi_3354484960617562112.png'
              }
            ]
          }
        ]
      }
    };
  }
  if (slug === 'phong-kiem-dinh-chat-luong') {
    return {
      data: {
        title: 'phòng kiểm định chất lượng',
        contents: [
          {
            title: 'Phòng thí nghiệm của TGN Group',
            sub: 'Trang bị đầy đủ các thiết bị, dụng cụ đáp ứng cho việc thử nghiệm đảm bảo đánh giá kết quả chính xác và nhanh chóng, từ đơn giản đến phức tạp bao gồm Máy thử nén 300-500 kN, Máy nén mẫu bê tông 2000kN, máy thử thấm bê tông, Máy thử kéo – nén – uốn,…',
            contents: [
              {
                title: '',
                blocks: [],
                imgUrl:
                  'https://tgn-cdn.vikiworld.vn/media/phong-thi-nghiem-cua-tgn-group-2_3359409619779715073.png'
              },
              {
                title: '',
                blocks: [],
                imgUrl:
                  'https://tgn-cdn.vikiworld.vn/media/phong-thi-nghiem-cua-tgn-group_3359409619867795457.png'
              }
            ]
          }
        ],
        imageUrl:
          'https://tgn-cdn.vikiworld.vn/media/phong-kiem-dinh-chat-luong_3359409619565805569.png'
      }
    };
  }
  if (slug === 'he-thong-nha-may-san-xuat-san-pham-cau-kien-be-tong') {
    return {
      data: {
        title: 'hệ thống nhà máy sản xuất sản phẩm cấu kiện bê tông',
        contents: [
          {
            title: 'Trung tâm sản xuất cống bê tông',
            sub: '',
            contents: [
              {
                title: 'NHÀ MÁY ĐẤT ĐỎ - BÀ RỊA VŨNG tàu',
                blocks: [
                  'Địa điểm: Lô 15, Đường N7, KCN Đất Đỏ 1, Xã Phước Long Thọ, H. Đất Đỏ, Tỉnh Bà Rịa - Vũng Tàu'
                ],
                imgUrl:
                  'https://tgn-cdn.vikiworld.vn/media/be-tong-tuoi_3354484960617562112.png'
              },
              {
                title: 'NHÀ MÁY LONG HẬU – LONG AN',
                blocks: [
                  'Địa điểm: Lô C.02 - C.03, đường số 3, KCN Long Hậu, Xã Long Hậu, Huyện Cần Giuộc, Tỉnh Long An'
                ],
                imgUrl:
                  'https://tgn-cdn.vikiworld.vn/media/be-tong-tuoi_3354484960617562112.png'
              }
            ]
          },
          {
            title: 'Trung tâm sản xuất cọc bê tông',
            sub: '',
            contents: [
              {
                title: 'NHÀ MÁY LONG HẬU – LONG AN',
                blocks: [
                  'Địa điểm: Lô C.02 - C.03, đường số 3, KCN Long Hậu, Xã Long Hậu, Huyện Cần Giuộc, Tỉnh Long An'
                ],
                imgUrl:
                  'https://tgn-cdn.vikiworld.vn/media/be-tong-tuoi_3354484960617562112.png'
              },
              {
                title: 'NHÀ MÁY NHƠN TRẠCH – ĐỒNG NAI',
                blocks: [
                  'Địa điểm: Lô 7, đường 5C, KCN Nhơn Trạch 2, Xã Phú Hội, Huyện Nhơn Trạch, Đồng Nai'
                ],
                imgUrl:
                  'https://tgn-cdn.vikiworld.vn/media/be-tong-tuoi_3354484960617562112.png'
              }
            ]
          }
        ],
        imageUrl:
          'https://tgn-cdn.vikiworld.vn/media/he-thong-nha-may-san-xuat-san-pham-cau-kien-be-tong_3359409619284787201.png'
      }
    };
  }
  if (slug === 'he-thong-trang-thiet-bi') {
    return {
      data: {
        title: 'Hệ thống trang-thiết bị',
        contents: [],
        imageUrl:
          'https://tgn-cdn.vikiworld.vn/media/he-thong-trang-thiet-bi_3359409618936659968.png'
      }
    };
  }
  return {
    data: null
  };
};
