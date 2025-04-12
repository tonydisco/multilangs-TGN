import Link from 'next/link';
import React, {Fragment} from 'react';
import {PureImage} from '../Common/Images';
import {rmockRoute} from '@/config';

const _url = 'https://tgn-api.vikiworld.vn/api/';
const getLangs = async () => {
  const res = await fetch(`${_url}public/languages`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const Header = async () => {
  const langs = await getLangs();
  console.log('====================================');
  console.log({langs});
  console.log('====================================');

  return (
    <header>
      <div
        style={{
          margin: '0 auto',
          padding: '0 1rem'
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
                  <div className="line-btw"></div>
                  <div
                    style={{
                      width: '20px',
                      cursor: 'pointer',
                      opacity: 1,
                      transition: 'opacity 0.3s ease'
                    }}
                  >
                    <PureImage url="/icon/FLAG-VI.svg" />
                  </div>
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
                      <div className="line-btw"></div>
                    )}
                  </Fragment>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
      <div className="fade-line-element"></div>
    </header>
  );
};

export default Header;
