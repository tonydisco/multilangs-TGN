import {getLangs} from '@/apis/langs';
import {rmockRoute} from '@/config';
import {Locale} from 'next-intl';
import Link from 'next/link';
import {Fragment} from 'react';
import {PureImage} from '../Common/Images';
import Languages from './Langs';

type Props = {
  locale: Locale;
};
const Header = async ({locale}: Readonly<Props>) => {
  const langsResult = await getLangs();

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
          <Link href="/">
            <PureImage />
          </Link>
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
                {(() => {
                  if (langsResult.isSuccess) {
                    return (
                      <Languages
                        locale={locale}
                        data={langsResult?.result?.languages}
                      />
                    );
                  }
                  return null;
                })()}
              </div>
            </div>
          </div>
          <ul
            style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
              position: 'relative',
              listStyle: 'none',
              marginBottom: '0'
            }}
          >
            {rmockRoute.map((item, index) => {
              return (
                <Fragment key={index}>
                  <li
                    style={{
                      position: 'relative'
                    }}
                  >
                    <Link
                      href={item.path}
                      style={{
                        color: '#212121',
                        fontSize: '14px',
                        lineHeight: '20px',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        textWrap: 'nowrap',
                        textDecoration: 'none'
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                  {index !== rmockRoute.length - 1 && (
                    <div className="line-btw" />
                  )}
                </Fragment>
              );
            })}
          </ul>
        </div>
      </nav>
      <div className="fade-line-element" />
    </header>
  );
};

export default Header;
