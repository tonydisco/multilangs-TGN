import {CardProduct} from '@/components/Common/Card';
import {routes} from '@/utils/config';

const ProductList = () => {
  return (
    <div className="tgn-product-list-container">
      <div className="tgn-flex-list-box tgn-products-container">
        {mockProducts.map((item, idx) => {
          const itemIndex = 1 + idx;
          return (
            <CardProduct
              item={{
                title: item.title,
                image: item.image,
                linkTo: item.linkTo
              }}
              key={`product-${itemIndex}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
const mockProducts = [
  {
    title: 'bê tông thương phẩm',
    image: '/landing/PRODUCTS/PRODUCT_ICO_1.png',
    linkTo: routes.product
  },
  {
    title: 'cống btct rung ép',
    image: '/landing/PRODUCTS/PRODUCT_ICO_2.png',
    linkTo: routes.product
  },
  {
    title: 'cọc bê tông ly tâm dự ứng lực',
    image: '/landing/PRODUCTS/PRODUCT_ICO_3.png',
    linkTo: routes.product + '/coc-betong-ly-tam-du-ung-luc'
  },
  {
    title: 'gạch tuynel',
    image: '/landing/PRODUCTS/PRODUCT_ICO_4.png',
    linkTo: routes.product
  },
  {
    title: 'gạch terrazzo',
    image: '/landing/PRODUCTS/PRODUCT_ICO_5.png',
    linkTo: routes.product
  },
  {
    title: 'gạch không nung',
    image: '/landing/PRODUCTS/PRODUCT_ICO_6.png',
    linkTo: routes.product
  },
  {
    title: 'gạch tự chèn',
    image: '/landing/PRODUCTS/PRODUCT_ICO_7.png',
    linkTo: routes.product
  },
  {
    title: 'các sản phẩm cấu kiện BT KHÁC',
    image: '/landing/PRODUCTS/PRODUCT_ICO_8.png',
    linkTo: routes.product
  },
  {
    title: 'sản phẩm khai thác mỏ',
    image: '/landing/PRODUCTS/PRODUCT_ICO_9.png',
    linkTo: routes.product
  },
  {
    title: 'sản phẩm phân phối khác',
    image: '/landing/PRODUCTS/PRODUCT_ICO_10.png',
    linkTo: routes.product
  }
];
