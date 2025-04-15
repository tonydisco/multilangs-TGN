import {CardBase} from '@/components/Common/Card';
import './style.css';

const list = [
  {
    title: 'Lĩnh vực sản xuất',
    content: (
      <p>
        <strong>Thế Giới Nhà</strong> Group sở hữu hệ thống nhà máy hiện đại,
        sản xuất đa dạng vật liệu xây dựng đạt tiêu chuẩn chất lượng cao, đáp
        ứng nhu cầu cho mọi công trình.
      </p>
    ),
    image: '',
    linkTo: ''
  },
  {
    title: 'Sản xuất bê tông thương phẩm',
    content: (
      <p>
        <strong>Thế Giới Nhà</strong> Group cung cấp bê tông tươi chất lượng
        cao, đảm bảo độ bền và đáp ứng tiêu chuẩn kỹ thuật.
      </p>
    ),
    image: '/landing/LVHD/LVSX/BTTP.png',
    linkTo: '/'
  },
  {
    title: 'sản xuất gạch tuynel',
    content: (
      <p>
        <strong>Thế Giới Nhà</strong> Group sản xuất gạch Tuynel chất lượng cao
        bằng công nghệ hiện đại, đảm bảo độ bền, khả năng chịu lực tốt.
      </p>
    ),
    image: '/landing/LVHD/LVSX/GACH.png',
    linkTo: '/'
  },
  {
    title: 'Sản xuất cấu kiện Bê Tông',
    content: (
      <p>
        <strong>Thế Giới Nhà</strong> Group sản xuất đa dạng cấu kiện như cọc,
        tấm tường, cống bê tông, gạch bê tông... phù hợp với nhiều hạng mục xây
        dựng.
      </p>
    ),
    image: '/landing/LVHD/LVSX/CKBT.png',
    linkTo: '/'
  }
];
const FieldOfProduction = () => {
  return (
    <div className="field-of-production-wrapper">
      <div className="container">
        <div className="mt-10" style={{padding: '150px 0'}}>
          <div className="row">
            {list.map((item, index) => {
              if (index === 0) {
                return (
                  <div
                    key={item.title}
                    className="col-12 col-md-6 col-lg-6 field-of-production-item"
                  >
                    <h2 className="tgn-page-title text-start">{item.title}</h2>
                    <div
                      style={{
                        marginTop: 20
                      }}
                    >
                      {item.content}
                    </div>
                  </div>
                );
              }
              return (
                <div
                  key={item.title + index}
                  className={`col-12 col-md-6 col-lg-6 field-of-production-item ${index > 1 ? 'mt-4' : ''}`}
                >
                  <CardBase
                    item={{
                      title: item.title,
                      content: item.content,
                      image: item.image,
                      linkTo: item.linkTo,
                      btnText: 'Xem chi tiết'
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldOfProduction;
