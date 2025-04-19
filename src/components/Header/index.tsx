import {Locale} from 'next-intl';
import {PureImage} from '../Common/Images';
import LanguageSwitcher from './Langs';
import Menus from './Menus';
import LocaleLink from '../Common/LinkByLocale';

type Props = {
  locale: Locale;
};
const Header = async ({locale}: Readonly<Props>) => {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        background: '#fff',
        zIndex: 1000
      }}
    >
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem'
        }}
      >
        <div style={{width: '280px'}}>
          <LocaleLink href="/" locale={locale}>
            <PureImage />
          </LocaleLink>
        </div>
        <div>
          <div
            style={{
              marginBottom: '1rem'
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <div
                  style={{
                    width: '20px',
                    cursor: 'pointer',
                    opacity: 1,
                    transition: 'opacity 0.3s ease'
                  }}
                >
                  <PureImage url="/icon/SEARCH.svg" />
                </div>
                <div
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #6D3E2F',
                    padding: '0.125rem 1rem',
                    color: '#6D3E2F',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease, color 0.3s ease'
                  }}
                >
                  <span
                    style={{
                      fontSize: '14px',
                      lineHeight: '20px',
                      textTransform: 'uppercase',
                      fontWeight: 600
                    }}
                  >
                    Liên hệ
                  </span>
                </div>
                <div
                  style={{
                    width: '20px',
                    cursor: 'pointer',
                    opacity: 1,
                    transition: 'opacity 0.3s ease'
                  }}
                >
                  <PureImage url="/icon/FB.svg" />
                </div>
                <div
                  style={{
                    width: '20px',
                    cursor: 'pointer',
                    opacity: 1,
                    transition: 'opacity 0.3s ease'
                  }}
                >
                  <PureImage url="/icon/ZALO.svg" />
                </div>
                <div className="line-btw" />
                <LanguageSwitcher locale={locale} />
              </div>
            </div>
          </div>
          <Menus />
        </div>
      </nav>
      <div className="fade-line-element" />
    </header>
  );
};

export default Header;
