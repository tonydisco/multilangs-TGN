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
export const dynamicRoutes = ['tin-tuc', 'san-pham'];
// Map file system paths to translated route segments
export const routeTranslations: {[key: string]: {[key: string]: string}} = {
  en: {
    'du-an': 'projects',
    'gioi-thieu': 'about',
    'lien-he-tuyen-dung': 'contact-us',
    'linh-vuc-hoat-dong': 'activity-areas',
    'nang-luc-san-xuat': 'production-capacity',
    'san-pham': 'products',
    'tin-tuc': 'news'
  },
  vi: {
    'du-an': 'du-an',
    'gioi-thieu': 'gioi-thieu',
    'lien-he-tuyen-dung': 'lien-he-tuyen-dung',
    'linh-vuc-hoat-dong': 'linh-vuc-hoat-dong',
    'nang-luc-san-xuat': 'nang-luc-san-xuat',
    'san-pham': 'san-pham',
    'tin-tuc': 'tin-tuc'
  }
};

// Reverse mapping for converting translated segments back to file system paths
export const reverseRouteTranslations: {
  [key: string]: {[key: string]: string};
} = {
  en: {
    projects: 'du-an',
    about: 'gioi-thieu',
    'contact-us': 'lien-he-tuyen-dung',
    'activity-areas': 'linh-vuc-hoat-dong',
    'production-capacity': 'nang-luc-san-xuat',
    products: 'san-pham',
    news: 'tin-tuc'
  },
  vi: {
    'du-an': 'du-an',
    'gioi-thieu': 'gioi-thieu',
    'lien-he-tuyen-dung': 'lien-he-tuyen-dung',
    'linh-vuc-hoat-dong': 'linh-vuc-hoat-dong',
    'nang-luc-san-xuat': 'nang-luc-san-xuat',
    'san-pham': 'san-pham',
    'tin-tuc': 'tin-tuc'
  }
};

export const BREAK_POINTS = {
  MOBILE: 768,
  TABLET: 1024,
  LAPTOP: 1440,
  DESKTOP: 2560
};
