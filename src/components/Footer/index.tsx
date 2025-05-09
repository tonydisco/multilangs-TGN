'use client';
import {useMenu} from '@/hooks/APIs/useMenu';
import {useAppContext} from '@/Providers';
import {
  LocationUnderline,
  MailIco,
  PhoneIco,
  WorldIco
} from '@/components/Common/IconScripts';
import {v4 as uuidv4} from 'uuid';
import {PureImage} from '../Common/Images';
import LocaleLink from '../Common/LinkByLocale';
import Logos from '../Common/Logos';
import Socials from '../Header/Socials';
import '@/styles/footer.scss';
import {routes} from '@/utils/config';

const Line = () => (
  <div
    className="line"
    style={{
      width: '100%',
      height: 1,
      backgroundColor: '#616161',
      margin: '12px 0'
    }}
  />
);

const OfficeInfos = [
  {
    title: 'www.tgngroup.vn',
    icon: <WorldIco />
  },
  {
    title: '0922.699.868',
    icon: <PhoneIco />
  },
  {
    title: 'contact@tgngroup.vn',
    icon: <MailIco />
  }
];

const OFFICES = [
  {
    title: 'VĂN PHÒNG sala',
    address:
      '46-48 Nguyễn Cơ Thạch, Phường An Lợi Đông, Thành phố Thủ Đức, Thành phố Hồ Chí Minh'
  },
  {
    title: 'Văn phòng amata',
    address:
      'Số 643, Xa lộ Hà Nội, KP2, Phường Long Bình, Thành phố Biên Hoà, Tỉnh Đồng Nai'
  },
  {
    title: 'văn phòng nhơn trạch',
    address:
      'Lô 7, đường 5C, KCN Nhơn Trạch 2, Xã Phú Hội, Huyện Nhơn Trạch, Đồng Nai'
  }
];

const HeaderUnderline = (props: {title: string}) => {
  const {title} = props;
  return (
    <>
      <div
        style={{
          textTransform: 'uppercase',
          fontWeight: 700,
          fontSize: 22,
          whiteSpace: 'nowrap'
        }}
      >
        {title}
      </div>
      <Line />
    </>
  );
};

const Footer = () => {
  const {menus} = useMenu();
  const {locale} = useAppContext();

  return (
    <footer id="footer">
      <div className="position-relative">
        <div className="tgn-bkg-secondary w-100 position-relative">
          <div className="container container-fluid-padding">
            <div className="inner-container">
              <div className="logo-flex-box">
                <div style={{maxWidth: 275, marginBottom: 35}}>
                  <Logos />
                </div>
                <div>
                  {OfficeInfos.map((item) => {
                    return (
                      <div
                        key={uuidv4()}
                        style={{
                          display: 'flex',
                          gap: 10,
                          marginBottom: 12,
                          alignItems: 'center'
                        }}
                      >
                        {item.icon}
                        <div className="tgn-text-gray-color">{item.title}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex-item">
                <div>
                  {OFFICES.map((item, idx) => {
                    const lasItem = OFFICES.length - 1;
                    const isLastItem = idx === lasItem;
                    return (
                      <div
                        key={item.title}
                        style={{marginBottom: isLastItem ? 0 : 30}}
                      >
                        <HeaderUnderline title={item.title} />
                        <div style={{display: 'flex', gap: 10}}>
                          <LocationUnderline />
                          <div
                            style={{flex: 1}}
                            className="tgn-text-gray-color"
                          >
                            {item.address}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div>
                  <HeaderUnderline title="liên kết nhanh" />
                  <div className="tgn-text-gray-color">
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 10
                      }}
                    >
                      {menus.map((item) => {
                        return (
                          <div key={uuidv4()}>
                            <LocaleLink
                              locale={locale}
                              href={item.path}
                              style={{
                                whiteSpace: 'nowrap',
                                fontWeight: 600,
                                textWrap: 'nowrap',
                                textTransform: 'capitalize',
                                cursor: 'pointer'
                              }}
                            >
                              {item.name}
                            </LocaleLink>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div>
                  <HeaderUnderline title="KẾT nối với chúng tôi" />
                  <div
                    style={{
                      display: 'flex',
                      gap: 20,
                      alignItems: 'center'
                    }}
                  >
                    <Socials
                      iconSize={{
                        width: 35,
                        height: 35
                      }}
                    />
                  </div>
                  <div
                    style={{
                      marginTop: 20,
                      display: 'flex',
                      gap: 10,
                      flexDirection: 'column'
                    }}
                  >
                    <LocaleLink locale={locale} href={routes.privacyPolicy}>
                      Chính sách bảo mật
                    </LocaleLink>
                    <LocaleLink locale={locale} href={routes.termsOfService}>
                      Điều khoản sử dụng
                    </LocaleLink>
                    <div>
                      Bản quyền © 2024 thuộc <strong>TGN</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <PureImage url="/landing/FOOTER.png" />
          </div>
        </div>
        <div className="footer-head-edge" />
      </div>
    </footer>
  );
};

export default Footer;
