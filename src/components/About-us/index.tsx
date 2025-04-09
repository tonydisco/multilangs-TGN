import BusinessPhysolophy from './Business';
import VisionMission from './VisionMission';
import Timeline from './Timeline';

const AboutUsView = () => {
  return (
    <section className="about-us">
      <div
        style={{
          background: 'url(/landing/ABOUT-US/ABOUT-US-BD.png)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '680px',
          width: '100%',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto',
            padding: '6rem',
            maxWidth: '72rem'
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(110, 62, 47, 0.8)',
              backdropFilter: 'blur(3px)',
              borderRadius: '24px',
              padding: '2rem',
              color: 'white'
            }}
          >
            <h2
              style={{
                textAlign: 'center',
                fontSize: '3rem',
                fontWeight: 700,
                marginBottom: '1.5rem'
              }}
            >
              Về chúng tôi
            </h2>
            <div>
              <p className="mb-3">
                <strong>Thế Giới Nhà Group</strong> - hoạt động trong lĩnh vực
                sản xuất và cung cấp vật liệu xây dựng tại Việt Nam.
              </p>
              <p className="mb-3">
                Khởi đầu từ một doanh nghiệp nhỏ vào năm 2008, trong suốt hơn 15
                năm qua, TGN group đã không ngừng phát triển và khẳng định
                thương hiệu, uy tín trong ngành xây dựng.
              </p>
              <p className="mb-3">
                Thế Giới Nhà Group hoạt động chủ yếu trong các lĩnh vực:
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
      <BusinessPhysolophy />
      <Timeline />
    </section>
  );
};

export default AboutUsView;
