import ChildHero from '@/components/Common/ChildHero';
import {SectionBase} from '@/components/Common/Section';
import {SectionTitles, TitleInCard} from '@/components/Common/Titles';

import {PureImage} from '@/components/Common/Images';
import {BaseSlider} from '@/components/Common/Sliders';
import NotFoundPage from '@/components/NotFoundPage';
import {IPageDefaultProps} from '@/models/interface';
import '@/styles/childPage.scss';

const ChilCard = (props: {
  title?: string;
  blocks?: string[];
  imgUrl: string;
  className?: string;
}) => {
  const {title, blocks, imgUrl, className = ''} = props;
  return (
    <div className={`child-page-img-slider-wrapper ${className}`}>
      <div className="child-page-img-slider">
        <PureImage url={imgUrl} mode="cover" />
      </div>
      <div className="child-page-list-content">
        {title && <TitleInCard title={title} />}
        {blocks && (
          <ul className="child-page-list-blocks">
            {blocks?.map((block, index) => <li key={index}>{block}</li>)}
          </ul>
        )}
      </div>
    </div>
  );
};

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
                  {item?.sub && (
                    <div className="tgn-text-gray-color py-3 text-center child-section-description">
                      {item.sub}
                    </div>
                  )}
                  <div>
                    {(() => {
                      if (item.type === 'slide') {
                        return (
                          <BaseSlider
                            total={item.contents.length}
                            renderList={item.contents.map((slide, index) => {
                              return (
                                <div key={index}>
                                  <div className="child-page-img-slider-margin">
                                    <ChilCard
                                      title={slide.title}
                                      imgUrl={slide.imgUrl}
                                      blocks={slide.blocks}
                                    />
                                  </div>
                                </div>
                              );
                            })}
                            slidesToShow={2}
                          />
                        );
                      }
                      if (item.type === 'grid') {
                        return (
                          <div className="row row-cols-1 row-cols-md-2 g-4">
                            {item?.contents?.map((slide, index) => {
                              return (
                                <div key={index} className="col mb-4">
                                  <ChilCard
                                    title={slide.title}
                                    imgUrl={slide.imgUrl}
                                    blocks={slide.blocks}
                                  />
                                </div>
                              );
                            })}
                          </div>
                        );
                      }
                      //   return (
                      //     <div>
                      //       <div
                      //         className={`d-flex align-items-center justify-content-between`}
                      //       >
                      //         <div className="child-page-list-content">
                      //           {<TitleInCard title={item.title} />}
                      //           {item.sub && (
                      //             <div
                      //               className="tgn-text-gray-color py-3 text-center child-section-description"
                      //               key={index}
                      //             >
                      //               {item.sub}
                      //             </div>
                      //           )}
                      //         </div>
                      //         <div>
                      //           {item?.contents?.map((slide, index) => {
                      //             return (
                      //               <div key={index}>
                      //                 <div className="child-page-img-slider">
                      //                   <PureImage
                      //                     url={slide.imgUrl}
                      //                     mode="cover"
                      //                   />
                      //                 </div>
                      //               </div>
                      //             );
                      //           })}
                      //         </div>
                      //       </div>
                      //     </div>
                      //   );
                    })()}
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
            type: 'slide',
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
            type: 'slide',
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
            type: 'slide',
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
            title: 'Phòng thí nghiệm của TGN',
            type: 'slide',
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
          },
          {
            title: 'Hệ thống LAS-XD 38.004',
            type: 'single',
            sub: 'Được đầu tư nghiêm túc với đội ngũ nhân sự dày dặn kinh nghiệm, được đào tạo chuyên môn và quản lý bởi các Tiến sĩ - Thạc sĩ - Kỹ sư chuyên ngành công nghệ vật liệu, công trình giao thông, xây dựng cầu đường, không ngừng học hỏi, nghiên cứu sáng tạo và đưa ra các giải pháp phù hợp cho từng nhu cầu.',
            contents: [
              {
                title: '',
                blocks: [],
                imgUrl:
                  'https://tgn-cdn.vikiworld.vn/media/he-thong-las-xd-38004_3359504727552294912.png'
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
            type: 'slide',
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
            type: 'slide',
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
          },
          {
            title: 'Trung tâm sản xuất gạch',
            sub: '',
            type: 'grid',
            contents: [
              {
                title: 'NHÀ MÁY gạch tự chèn ĐỨC HOÀ – LONG AN',
                blocks: [
                  'Địa điểm: Lô A101, đường số 1, KCN Thái Hòa, Ấp Tân Hòa, Xã Đức Lập Hạ, Huyện Đức Hòa, Tỉnh Long An'
                ],
                imgUrl:
                  'https://tgn-cdn.vikiworld.vn/media/be-tong-tuoi_3354484960617562112.png'
              },
              {
                title: 'NHÀ MÁY gạch terrazzo NHƠN TRẠCH – ĐỒNG NAI',
                blocks: [
                  'Địa điểm: Lô 7, đường 5C, KCN Nhơn Trạch 2, Xã Phú Hội, Huyện Nhơn Trạch, Đồng Nai'
                ],
                imgUrl:
                  'https://tgn-cdn.vikiworld.vn/media/be-tong-tuoi_3354484960617562112.png'
              },
              {
                title:
                  'NHÀ MÁY gạch không nung và gạch terrazzo LONG HẬU – LONG AN',
                blocks: [
                  'Địa điểm: Lô C.02 - C.03, đường số 3, KCN Long Hậu, Xã Long Hậu, Huyện Cần Giuộc, Tỉnh Long An'
                ],
                imgUrl:
                  'https://tgn-cdn.vikiworld.vn/media/be-tong-tuoi_3354484960617562112.png'
              },
              {
                title: 'NHÀ MÁY GẠCH TUYNEL LONG THÀNH - ĐỒNG NAI',
                blocks: [
                  'Địa điểm: Khu phố Tân Mai, Phường Phước Tân, Thành phố Biên Hoà, Tỉnh Đồng Nai'
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
