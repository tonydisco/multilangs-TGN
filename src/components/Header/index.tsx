'use client';
import {useDebounce} from '@/hooks/common/useDebounce';
import {ISetting} from '@/models/interface';
import '@/styles/header.scss';
import {Locale} from 'next-intl';
import {useState} from 'react';
import {PureImage} from '../Common/Images';
import Logos from '../Common/Logos';
import ContactBtn from './ContactBtn';
import LanguageSwitcher from './Langs';
import Menus from './Menus';
import Socials from './Socials';

type Props = {
  locale: Locale;
  setting?: ISetting;
};
const Header = ({locale}: Readonly<Props>) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id="header">
      <nav className="d-flex align-items-center justify-content-between p-3 nav-custom">
        <div className="nav-item">
          <div className="search-icon search-icon-responsive ">
            <PureImage style={{width: 22}} url="/icon/SEARCH.svg" />
          </div>
        </div>
        <div className="nav-item">
          <div style={{maxWidth: '150px', width: '100%'}}>
            <Logos />
          </div>
        </div>
        <div>
          <div className="mb-3 top-nav">
            <div>
              <div className="d-flex align-items-center justify-content-end gap-3">
                <div className="search-icon">
                  <PureImage url="/icon/SEARCH.svg" />
                </div>
                <ContactBtn />
                <Socials />
                <div className="line-btw" />
                {locale && <LanguageSwitcher locale={locale} />}
              </div>
            </div>
          </div>
          <ul
            style={{
              listStyle: 'none'
            }}
            className="d-flex align-items-center gap-3 position-relative mb-0 mobile-responsive"
          >
            <Menus />
          </ul>
        </div>
        <div className="nav-item">
          <div className="mobile-menu">
            <button onClick={handleMenuToggle}>
              <PureImage style={{width: 25}} url="/icon/HAMBURGER.svg" />
            </button>
          </div>
        </div>
      </nav>
      <div className="fade-line-element pc-fade-line-element" />
      <div
        className="menu-mobile-overflow"
        style={{
          left: isMenuOpen ? 0 : '-100%'
        }}
      >
        <div style={{padding: 24}} className="h-100">
          <div className="d-flex align-items-center justify-content-between">
            <div className="search-icon search-icon-responsive">
              <PureImage url="/icon/SEARCH.svg" />
            </div>
            <div style={{maxWidth: 80, width: '100%'}}>
              <Logos />
            </div>
            <div className="close-menu">
              <button
                style={{
                  fontWeight: 900,
                  fontSize: 26,
                  color: 'var(--primary-master-title-color)'
                }}
                onClick={handleMenuToggle}
              >
                X
              </button>
            </div>
          </div>
          <div className="fade-line-element mobile-fade-line-element" />
          <ul
            style={{
              listStyle: 'none',
              marginTop: 35
            }}
            className="d-flex flex-column gap-3 mb-3 list-unstyled"
          >
            <Menus
              style={{
                fontSize: 18
              }}
              cbFunc={useDebounce(handleMenuToggle, 300)}
            />
          </ul>

          <div className="d-flex align-items-center gap-4 mt-5">
            <Socials
              iconSize={{
                width: 35
              }}
            />
            {locale && <LanguageSwitcher iconW="40px" locale={locale} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
