'use client';
import {useMenu} from '@/hooks/useMenu';
import {useAppContext} from '@/Providers';
import {v4 as uuidv4} from 'uuid';
import {PureImage} from '../Common/Images';
import LocaleLink from '../Common/LinkByLocale';
import Logos from '../Common/Logos';
import Socials from '../Header/Socials';

const Footer = () => {
  const {menus} = useMenu();
  const {locale} = useAppContext();

  const Line = () => (
    <div
      className="line"
      style={{
        width: '100%',
        height: 2,
        backgroundColor: '#616161',
        margin: '24px 0',
        opacity: 0.5
      }}
    />
  );
  return (
    <footer>
      <div style={{position: 'relative'}}>
        <div
          style={{
            backgroundColor: '#EDDFD8',
            width: '100%',
            position: 'relative'
          }}
        >
          <div className="container">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '100%'
              }}
            >
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: 30
                }}
              >
                <div style={{maxWidth: 275, marginBottom: 35}}>
                  <Logos />
                </div>
                <div>
                  <p
                    style={{
                      textTransform: 'uppercase',
                      fontWeight: 600,
                      fontSize: 20
                    }}
                  >
                    kết nối VỚI CHÚNG TÔI
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      gap: 20,
                      marginTop: 20,
                      flexDirection: 'column'
                    }}
                  >
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
                  </div>
                </div>
              </div>
              <div
                style={{
                  flex: 2,
                  display: 'flex',
                  gap: 50
                }}
              >
                <div>
                  <div
                    style={{
                      textTransform: 'uppercase',
                      fontWeight: 700,
                      fontSize: 22,
                      whiteSpace: 'nowrap'
                    }}
                  >
                    VĂN PHÒNG ĐẠI diện
                  </div>
                  <Line />
                  <div style={{color: '#616161'}}>
                    <p style={{marginBottom: 10}}>
                      <strong>Địa chỉ:</strong> 46-48 Nguyễn Cơ Thạch, Phường An
                      Lợi Đông, Thành phố Thủ Đức, Thành phố Hồ Chí Minh
                    </p>
                    <p style={{marginBottom: 10}}>
                      <strong>Điện thoại:</strong> 0922.699.868
                    </p>
                    <p style={{marginBottom: 10}}>
                      <strong>Email:</strong> contact@tgngroup.vn
                    </p>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      textTransform: 'uppercase',
                      fontWeight: 700,
                      fontSize: 22
                    }}
                  >
                    TRỤ SỞ CHÍNH
                  </div>
                  <Line />
                  <div style={{color: '#616161'}}>
                    <p style={{marginBottom: 10}}>
                      <strong>Địa chỉ:</strong> Lô 7, đường 5C, KCN Nhơn Trạch
                      2, Xã Phú Hội, Huyện Nhơn Trạch, Tỉnh Đồng Nai
                    </p>
                    <p style={{marginBottom: 10}}>
                      <strong>Điện thoại:</strong> 0922.699.868
                    </p>
                    <p style={{marginBottom: 10}}>
                      <strong>Email:</strong> contact@tgngroup.vn
                    </p>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      textTransform: 'uppercase',
                      fontWeight: 700,
                      fontSize: 22,
                      whiteSpace: 'nowrap'
                    }}
                  >
                    liên kết nhanh
                  </div>
                  <Line />
                  <div style={{color: '#616161'}}>
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
              </div>
            </div>
            <Line />

            <div>
              <div
                style={{
                  display: 'flex',
                  gap: 20,
                  justifyContent: 'space-between',
                  color: '#616161'
                }}
              >
                <div>
                  Bản quyền © 2024 thuộc <strong>TGN</strong>
                </div>
                <div style={{display: 'flex', gap: 40}}>
                  <div>Chính sách bảo mật</div>
                  <div>Điều khoản sử dụng</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <PureImage url="/landing/FOOTER.png" />
          </div>
        </div>
        <div
          style={{
            height: 80,
            backgroundColor: '#EDDFD8',
            width: '100%',
            position: 'absolute',
            top: -80,
            left: 0,
            zIndex: 1,
            borderTopLeftRadius: 80,
            borderTopRightRadius: 80
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
