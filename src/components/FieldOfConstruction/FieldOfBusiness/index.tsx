import {CardBase} from '@/components/Common/Card';
import './style.css';

const FieldOfBusiness = () => {
  return (
    <div className="field-of-business-wrapper">
      <div className="container">
        <div
          style={{
            padding: '100px 0',
            textAlign: 'center'
          }}
        >
          <h2 className="tgn-page-title ">Lĩnh vực kinh doanh</h2>
          <div
            style={{
              marginTop: 20
            }}
          >
            <strong>Thế Giới Nhà Group</strong> vận hành hệ thống Siêu thị vật
            liệu xây dựng quy mô lớn, cung cấp <br /> giải pháp toàn diện với
            danh mục sản phẩm phong phú từ thô đến hoàn thiện.
          </div>
          <div className="mt-5">
            <div className="row">
              {fieldOfBusinessList.map((item, index) => {
                return (
                  <div
                    key={item.title}
                    className={`col-12 col-md-6 col-lg-6 ${index > 1 ? 'mt-4' : ''}`}
                  >
                    <CardBase
                      item={{
                        title: item.title,
                        content: item.content,
                        image: item.image,
                        linkTo: item.linkTo,
                        btnText: 'Xem chi tiết',
                        cardStyle: {
                          height: 340
                        }
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldOfBusiness;

const fieldOfBusinessList = [
  {
    title: 'Cung ứng bê tông thương phẩm, cấu kiện bê tông',
    content: (
      <p>
        <strong> Thế Giới Nhà Group</strong> cung ứng trực tiếp bê tông thương
        phẩm, cấu kiện bê tông đúc sẵn, đáp ứng tiêu chuẩn chất lượng cao cho
        mọi công trình.
      </p>
    ),
    image: '/landing/LVHD/LVKD/CUBT.png',
    linkTo: ''
  },
  {
    title: 'phân phối vật liệu xây dựng',
    content: (
      <p>
        Bên cạnh sản phẩm tự sản xuất, <strong>Thế Giới Nhà Group</strong> còn
        phân phối đa dạng vật liệu xây dựng từ các thương hiệu uy tín, bao gồm
        xi măng, sắt thép, gạch, sơn, và các vật liệu hoàn thiện khác.
      </p>
    ),
    image: '/landing/LVHD/LVKD/PPVLXD.png',
    linkTo: '/'
  }
];
