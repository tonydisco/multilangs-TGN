import React from 'react';
import ChildHero from '@/components/Common/ChildHero';
import {SectionBase} from '@/components/Common/Section';
import {SectionTitles} from '@/components/Common/Titles';

import '@/styles/childPage.scss';
import {BaseSlider} from '@/components/Common/Sliders';
import {PureImage} from '@/components/Common/Images';

const Page = () => {
  return (
    <section className="wrapper-for-lastchild">
      <ChildHero
        title={'hệ thống nhà máy sản xuất bê tông thương phẩm'}
        imageUrl={
          'https://tgn-cdn.vikiworld.vn/media/be-tong-thuong-pham_3354343302689193984.png'
        }
      />
      {mockData.map((item, index) => {
        return (
          <SectionBase key={index} className={`child-page-container`}>
            <SectionTitles title={item.title} style={{textAlign: 'center'}} />
            <div>
              <BaseSlider
                renderList={item.contents.map((slide, index) => {
                  return (
                    <div key={index}>
                      <div style={{margin: 10}}>
                        <div className="child-page-img-slider-wrapper">
                          <PureImage url={slide.imgUrl} mode="cover" />
                        </div>
                        <div style={{marginTop: 24}}>
                          <div className="tgn-introduce-stat-title">
                            {slide.title}
                          </div>
                          <ul>
                            {slide.blocks.map((block, index) => (
                              <li key={index}>{block}</li>
                            ))}
                          </ul>
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
    </section>
  );
};

export default Page;

const mockData = [
  {
    title: 'Trung tâm sản xuất đông nam',
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
      }
    ]
  },
  {
    title: 'Trung tâm sản xuất Sài Gòn',
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
      }
    ]
  },
  {
    title: 'Trung tâm sản xuất tây nam',
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
      }
    ]
  }
];
