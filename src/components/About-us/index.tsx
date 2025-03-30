import BusinessPhysolophy from './Business';
import VisionMission from './VisionMission';

const AboutUsView = () => {
  return (
    <>
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
          <div className="flex justify-center items-center mx-auto p-24 max-w-6xl">
            <div
              className="rounded-[24px]  p-8 text-white"
              style={{
                backgroundColor: 'rgba(110, 62, 47, 0.8)',
                backdropFilter: 'blur(3px)'
              }}
            >
              <h2 className="text-center text-5xl font-bold mb-6">
                Về chúng tôi
              </h2>
              <div>
                <p className="mb-5">
                  <strong>Thế Giới Nhà Group</strong> - hoạt động trong lĩnh vực
                  sản xuất và cung cấp vật liệu xây dựng tại Việt Nam.
                </p>
                <p className="mb-5">
                  Khởi đầu từ một doanh nghiệp nhỏ vào năm 2008, trong suốt hơn
                  15 năm qua, TGN group đã không ngừng phát triển và khẳng định
                  thương hiệu, uy tín trong ngành xây dựng.
                </p>
                <p className="mb-5">
                  Thế Giới Nhà Group hoạt động chủ yếu trong các lĩnh vực:
                  <br />- Sản xuất bê tông tươi và cấu kiện bê tông <br /> -
                  Phân phối đa dạng các loại vật liệu xây dựng từ thô đến hoàn
                  thiện.
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
      </section>
      <VisionMission />
      <BusinessPhysolophy />
    </>
  );
};

export default AboutUsView;
