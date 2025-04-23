import {ISetting} from '@/models/interface';
import {Locale} from 'next-intl';
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
        <div style={{maxWidth: '150px', width: '100%'}}>
          <Logos />
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
                <ContactBtn />
                <Socials />
                <div className="line-btw" />
                {locale && <LanguageSwitcher locale={locale} />}
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
