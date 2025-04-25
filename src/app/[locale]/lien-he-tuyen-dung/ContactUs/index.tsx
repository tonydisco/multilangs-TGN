import {CardBorder} from '@/components/Common/Card';
import {PureImage} from '@/components/Common/Images';
import {SectionBase} from '@/components/Common/Section';
import {SectionSub, SectionTitles} from '@/components/Common/Titles';
import Socials from '@/components/Header/Socials';
import React from 'react';
import ContactForm from './ContactForm';

const TitleInCard = ({title}: {title: string}) =>
  title ? <div style={{fontSize: 20, fontWeight: 600}}>{title}</div> : null;
const ContactUs = () => {
  return (
    <SectionBase
      bgImage="/landing/CONTACT-US/BG.png"
      className="contact-us-wrapper"
    >
      <div className="flex-wrapper">
        <CardBorder
          style={{
            height: 'auto',
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(3px)'
          }}
        >
          <SectionTitles title="Thông tin liên hệ" />
          {contactInfos.map((item, index) => {
            return (
              <div key={index} style={{marginTop: 50}}>
                <TitleInCard title={item.title} />
                <div className="flex-inner-item">
                  <div style={{flex: 1}}>
                    <div
                      className="contact-us-image"
                      style={{height: 180, borderRadius: 8, overflow: 'hidden'}}
                    >
                      <PureImage url={item.image} mode="cover" />
                    </div>
                  </div>
                  <div
                    className="contact-us-info"
                    style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    {item.infos.map((info, index) => {
                      return (
                        <div key={index}>
                          <span
                            style={{
                              whiteSpace: 'nowrap',
                              fontWeight: 600
                            }}
                          >
                            {`${info.title}: `}
                          </span>
                          <span>{info.content}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
          <div style={{marginTop: 36}}>
            <TitleInCard title="Kết nối với chúng tôi" />
            <div className="d-flex gap-3 mt-4 align-items-center">
              <Socials
                iconSize={{
                  width: 30
                }}
              />
            </div>
          </div>
        </CardBorder>
        <CardBorder
          style={{
            height: 'auto',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(3px)'
          }}
        >
          <SectionTitles title="Liên hệ với chúng tôi" />
          <div>
            <SectionSub
              text={
                <p className="tgn-text-base-color">
                  Hãy liên hệ với chúng tôi nếu bạn có bất kỳ yêu cầu nào liên
                  quan đến sản phẩm và dịch vụ của Thế Giới Nhà. Vui lòng điền
                  thông tin vào form bên dưới, chúng tôi sẽ phản hồi trong thời
                  gian sớm nhất.
                </p>
              }
            />
            <SectionSub
              text={
                <p>
                  <strong>Quý khách lưu ý:</strong> Thế Giới Nhà không ủy quyền
                  cho bất kỳ đại lý thương mại nào phân phối sản phẩm do chúng
                  tôi sản xuất. Mọi báo giá hợp lệ đều do{' '}
                  <strong>Thế Giới Nhà trực tiếp phát hành</strong>. Chúng tôi
                  không chịu trách nhiệm với bất kỳ báo giá nào từ đơn vị khác.
                </p>
              }
            />
          </div>
          <div className="mt-5">
            <ContactForm />
            <SectionSub
              text={
                <p className="tgn-text-base-color mb-0">
                  Khi chấp nhận gửi form, bạn đã đồng ý với{' '}
                  <strong>CHÍNH SÁCH BẢO MẬT</strong> của chúng tôi
                </p>
              }
            />
          </div>
        </CardBorder>
      </div>
    </SectionBase>
  );
};

export default ContactUs;

const contactInfos = [
  {
    title: 'Văn phòng đại diện',
    image: '/landing/CONTACT-US/OFFICE.png',
    infos: [
      {
        title: 'Địa chỉ',
        content:
          '46-48 Nguyễn Cơ Thạch, P. An Lợi Đông, TP. Thủ Đức, TP. Hồ Chí Minh'
      },
      {
        title: 'Điện thoại',
        content: '0922.699.868'
      },
      {
        title: 'Email',
        content: 'contact@tgngroup.vn'
      }
    ]
  },
  {
    title: 'Trụ sở chính',
    image: '/landing/CONTACT-US/HEAD-QUARTER.png',
    infos: [
      {
        title: 'Địa chỉ',
        content:
          'Lô 7, đường 5C, KCN Nhơn Trạch 2, Xã Phú Hội, Huyện Nhơn Trạch, Tỉnh Đồng Nai'
      },
      {
        title: 'Điện thoại',
        content: '0922.699.868'
      },
      {
        title: 'Email',
        content: 'contact@tgngroup.vn'
      }
    ]
  }
];
