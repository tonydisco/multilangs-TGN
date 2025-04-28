import {PureImage} from '@/components/Common/Images';
import {SectionTitles} from '@/components/Common/Titles';
import {IAlbumProps} from '@/models/interface';
import '@/styles/partners.scss';
import PartnersSlider from './Slider';

const Partners = (props: {masterData: IAlbumProps}) => {
  const {masterData} = props;

  return (
    <section className="tgn-partners-section">
      <div className="container">
        <div style={{textAlign: 'center'}}>
          <SectionTitles title="khách hàng - đối tác" />
          {(() => {
            const sliderData = masterData?.files;
            if (!sliderData?.length) {
              return (
                <div className="tgn-partners-no-data">Chưa có dữ liệu</div>
              );
            }
            return <PartnersSlider sliderData={sliderData} />;
          })()}
        </div>
      </div>
      <div className="tgn-partners-grid-bottom">
        <PureImage url="/landing/VIDEO-GRID.png" />
      </div>
    </section>
  );
};

export default Partners;
