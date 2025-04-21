export const port = process.env.PORT;
export const host =
  process.env.NEXT_PUBLIC_API_URL ?? `http://localhost:${port}`;

export const routes = {
  home: '/',
  about: '/gioi-thieu',
  field: '/linh-vuc-hoat-dong',
  productionCapacity: '/nang-luc-san-xuat',
  product: '/san-pham',
  project: '/du-an',
  news: '/tin-tuc',
  contact: '/lien-he-tuyen-dung'
};

export const rmockRoute = [
  {name: 'Trang chủ', path: routes.home},
  {name: 'Giới thiệu', path: routes.about},
  {name: 'Lĩnh vực hoạt động', path: routes.field},
  {name: 'Năng lực sản xuất', path: routes.productionCapacity},
  {name: 'Sản phẩm', path: routes.product},
  {name: 'Dự án', path: routes.project},
  {name: 'Tin tức', path: routes.news},
  {name: 'Liên hệ - tuyển dụng', path: routes.contact}
];

export const newsTabs = [
  {
    title: 'tất cả',
    value: 'all',
    id: 'tab-all'
  },
  {
    title: 'tin tức nổi bật',
    value: 'featured',
    id: 'tab-featured'
  },
  {
    title: 'tin tức thị trường',
    value: 'market',
    id: 'tab-market'
  }
];

export const socialMapping: Record<string, string> = {
  Facebook: '/icon/FB.svg',
  Zalo: '/icon/ZALO.svg'
};
