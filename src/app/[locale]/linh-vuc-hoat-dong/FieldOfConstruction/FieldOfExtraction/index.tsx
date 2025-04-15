import {CardBase} from '@/components/Common/Card';
import './style.css';

const list = [
  {
    title: 'Lĩnh vực khai thác',
    content: (
      <p>
        <strong>Thế Giới Nhà</strong> trực tiếp khai thác và cung ứng nguồn
        nguyên vật liệu chất lượng, đảm bảo chuỗi cung ứng bền vững và tối ưu
        chi phí cho khách hàng.
      </p>
    ),
    image: '',
    linkTo: ''
  },
  {
    title: 'khai thác các loại đất đá',
    content: (
      <p>
        <strong>Thế Giới Nhà</strong> hiện đang khai thác các loại đất, đá tại
        hai mỏ Thiện Tân và Tân Cang (Đồng Nai), cung cấp nguồn nguyên liệu thô
        chất lượng cao cho ngành xây dựng.
      </p>
    ),
    image: '/landing/LVHD/LVKT/MODA.png',
    linkTo: '/'
  }
];
const FieldOfExtraction = () => {
  return (
    <div className="field-of-extraction-wrapper">
      <div className="container">
        <div className="mt-10" style={{padding: '200px 0 150px 0'}}>
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
                  key={item.title}
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

export default FieldOfExtraction;
