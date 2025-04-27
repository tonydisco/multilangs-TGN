import {CardProduct} from '@/components/Common/Card';

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
                image: item.image
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
    image: '/landing/PRODUCTS/PRODUCT_ICO_1.png'
  },
  {
    title: 'cống btct rung ép',
    image: '/landing/PRODUCTS/PRODUCT_ICO_2.png'
  },
  {
    title: 'cọc bê tông ly tâm dự ứng lực',
    image: '/landing/PRODUCTS/PRODUCT_ICO_3.png'
  },
  {
    title: 'gạch tuynel',
    image: '/landing/PRODUCTS/PRODUCT_ICO_4.png'
  },
  {
    title: 'gạch terrazzo',
    image: '/landing/PRODUCTS/PRODUCT_ICO_5.png'
  },
  {
    title: 'gạch không nung',
    image: '/landing/PRODUCTS/PRODUCT_ICO_6.png'
  },
  {
    title: 'gạch tự chèn',
    image: '/landing/PRODUCTS/PRODUCT_ICO_7.png'
  },
  {
    title: 'các sản phẩm cấu kiện BT KHÁC',
    image: '/landing/PRODUCTS/PRODUCT_ICO_8.png'
  },
  {
    title: 'sản phẩm khai thác mỏ',
    image: '/landing/PRODUCTS/PRODUCT_ICO_9.png'
  },
  {
    title: 'sản phẩm phân phối khác',
    image: '/landing/PRODUCTS/PRODUCT_ICO_10.png'
  }
];
