'use client';
import '@/styles/header.scss';
import Menus from './Menus';
import {useState} from 'react';
import Socials from './Socials';
import {Locale} from 'next-intl';
import Logos from '../Common/Logos';
import ContactBtn from './ContactBtn';
import LanguageSwitcher from './Langs';
import {PureImage} from '../Common/Images';
import {ISetting} from '@/models/interface';
import {useDebounce} from '@/hooks/common/useDebounce';

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
      <nav className="d-flex align-items-center justify-content-between nav-custom">
        <div className="nav-item tgn-search-icon-responsive">
          <div className="tgn-search-icon tgn-search-icon-responsive ">
            <PureImage style={{width: 22}} url="/icon/SEARCH.svg" />
          </div>
        </div>
        <div className="nav-item d-flex justify-content-center ">
          <div style={{width: '150px'}}>
            <Logos />
          </div>
        </div>
        <div className="menu-list-for-responsive">
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
          <div className="menu-list-for-responsive">
            <ul
              style={{
                listStyle: 'none'
              }}
              className="d-flex align-items-center position-relative mb-0 tgn-menu-items"
            >
              <Menus />
            </ul>
          </div>
        </div>
        <div className="tgn-mobile-menu">
          <button onClick={handleMenuToggle}>
            <PureImage style={{width: 25}} url="/icon/HAMBURGER.svg" />
          </button>
        </div>
      </nav>
      <div className="fade-line-element" />
      <div
        className="menu-mobile-overflow"
        style={{
          left: isMenuOpen ? 0 : '-100vw'
        }}
      >
        <div className="menu-mobile-container">
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
                  fontSize: 26
                }}
                className="tgn-color-primary"
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
