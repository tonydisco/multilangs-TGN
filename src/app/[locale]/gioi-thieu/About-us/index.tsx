import {SectionTitles} from '@/components/Common/Titles';
import BusinessPhisolophy from './Business';
import Timeline from './Timeline';
import VisionMission from './VisionMission';
import {ITimelineProps} from '@/models/interface';

const AboutUsView = (props: ITimelineProps) => {
  const {roadMap} = props;

  return (
    <section className="tgn-about-us">
      <div
        style={{
          background: 'url(/landing/ABOUT-US/ABOUT-US-BD.png)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
        className="tgn-about-us-wrapper"
      >
        <div className="about-us-flex-item">
          <div className="bg-intro">
            <SectionTitles
              title="Về chúng tôi"
              style={{color: 'white', textAlign: 'center'}}
            />
            <div className="mt-4">
              <p className="mb-3">
                <strong>Thế Giới Nhà</strong> - hoạt động trong lĩnh vực sản
                xuất và cung cấp vật liệu xây dựng tại Việt Nam.
              </p>
              <p className="mb-3">
                Khởi đầu từ một doanh nghiệp nhỏ vào năm 2008, trong suốt hơn 15
                năm qua, TGN group đã không ngừng phát triển và khẳng định
                thương hiệu, uy tín trong ngành xây dựng.
              </p>
              <p className="mb-3">
                Thế Giới Nhà hoạt động chủ yếu trong các lĩnh vực:
                <br />- Sản xuất bê tông tươi và cấu kiện bê tông <br /> - Phân
                phối đa dạng các loại vật liệu xây dựng từ thô đến hoàn thiện.
              </p>
              <p>
                {`Với sứ mệnh "Sự hài lòng của bạn là thước đo sự tồn tại và
          phát triển của chúng tôi”, TGN group luôn phấn đấu không ngừng
          để hướng đến mục tiêu chung là sự hài lòng của Quý Khách hàng.
          TGN group đã xây dựng một hệ thống gồm 3 trụ sở văn phòng, 26
          nhà máy sản xuất trải dài khắp các vùng kinh tế trọng điểm
          phía Nam, cùng đội ngũ hơn 1.500 cán bộ - nhân viên không
          ngừng làm việc và cống hiến, chúng tôi tự tin vào chất lượng
          sản phẩm và dịch vụ của mình.`}
              </p>
            </div>
          </div>
        </div>
      </div>
      <VisionMission />
      <BusinessPhisolophy />
      <Timeline roadMap={roadMap} />
    </section>
  );
};

export default AboutUsView;
