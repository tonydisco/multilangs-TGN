'use client';
import {useTranslations} from 'next-intl';
import {PureImage} from './Common/Images';
import {Button} from './Common/Button';

export default function NotFoundPage() {
  const t = useTranslations();

  return (
    <div style={{textAlign: 'center'}}>
      <div
        className="container"
        style={{
          background: 'url(/landing/404-TEXTURE.png) no-repeat center center',
          backgroundSize: 'contain'
        }}
      >
        <div style={{padding: '200px 0'}}>
          <div
            style={{
              gap: 20,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div style={{maxWidth: 460, margin: '0 auto'}}>
              <PureImage url="/landing/404.svg" />
            </div>
            <div
              style={{
                textTransform: 'capitalize',
                fontSize: 52
              }}
              className="tgn-text-gradient-color"
            >
              {t('NotFoundPage')}
            </div>
            <p className="tgn-text-gray-color">
              {t('NotFoundPageDescription')}
            </p>
            <Button
              btnProps={{
                text: t('NotFoundBtn'),
                linkTo: '/',
                style: {
                  textTransform: 'uppercase'
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
