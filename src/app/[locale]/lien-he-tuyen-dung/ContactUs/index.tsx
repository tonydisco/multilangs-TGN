import {CardBorder} from '@/components/Common/Card';
import {PureImage} from '@/components/Common/Images';
import {SectionBase} from '@/components/Common/Section';
import {SectionSub, SectionTitles} from '@/components/Common/Titles';
import Socials from '@/components/Header/Socials';
import React from 'react';

const TitleInCard = ({title}: {title: string}) =>
  title ? <div style={{fontSize: 20, fontWeight: 600}}>{title}</div> : null;
const ContactUs = () => {
  return (
    <SectionBase
      bgImage="/landing/CONTACT-US/BG.png"
      className="contact-us-wrapper"
    >
      <div className="d-flex gap-3 align-items-stretch">
        <CardBorder style={{height: 'auto'}}>
          <SectionTitles title="Thông tin liên hệ" />
          {contactInfos.map((item, index) => {
            return (
              <div key={index} style={{marginTop: 36}}>
                <TitleInCard title={item.title} />
                <div className="d-flex gap-3 mt-3 align-items-stretch">
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
            <div className="d-flex gap-3 mt-3 align-items-center">
              <Socials
                iconSize={{
                  width: 30
                }}
              />
            </div>
          </div>
        </CardBorder>
        <CardBorder style={{height: 'auto'}}>
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
          <div>
            <form
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                marginTop: 24
              }}
              //   onSubmit={(e) => {
              //     e.preventDefault();
              //     const formData = new FormData(e.currentTarget);
              //     const data = Object.fromEntries(formData.entries());
              //     console.log(data);
              //   }}
            >
              {inputForm.map((item, index) => {
                return (
                  <div key={index}>
                    <label key={index} style={{fontSize: 14, fontWeight: 600}}>
                      {item.title}
                      {item.required && <span style={{color: 'red'}}>*</span>}
                    </label>
                    {item.type === 'textarea' ? (
                      <textarea
                        name={item.name}
                        placeholder={item.placeholder}
                        required={item.required}
                        style={{
                          width: '100%',
                          height: 120,
                          padding: '0.5rem',
                          borderRadius: 8,
                          border: '1px solid #ccc',
                          resize: 'none'
                        }}
                      />
                    ) : (
                      <input
                        type={item.type}
                        name={item.name}
                        placeholder={item.placeholder}
                        required={item.required}
                        style={{
                          width: '100%',
                          padding: '0.5rem',
                          borderRadius: 8,
                          border: '1px solid #ccc'
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </form>
          </div>
        </CardBorder>
      </div>
    </SectionBase>
  );
};

export default ContactUs;

const inputForm = [
  {
    title: 'Tên',
    type: 'text',
    placeholder: 'Tên*',
    name: 'name',
    required: true
  },
  {
    title: 'công ty',
    type: 'text',
    placeholder: 'Công ty*',
    name: 'company',
    required: true
  },
  {
    title: 'Số điện thoại',
    type: 'text',
    placeholder: 'Số điện thoại*',
    name: 'phone',
    required: true
  },
  {
    title: 'Email',
    type: 'email',
    placeholder: 'Email*',
    name: 'email',
    required: true
  },
  {
    title: 'Nội dung',
    type: 'textarea',
    placeholder: 'Nội dung*',
    name: 'content',
    required: true
  }
];

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
