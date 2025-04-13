export const port = process.env.PORT;
export const host =
  process.env.NEXT_PUBLIC_API_URL ?? `http://localhost:${port}`;

export const rmockRoute = [
  {name: 'Trang chủ', path: '/'},
  {name: 'Giới thiệu', path: '/gioi-thieu'},
  {name: 'Lĩnh vực hoạt động', path: '/linh-vuc-hoat-dong'},
  {name: 'Năng lực sản xuất', path: '/nang-luc-san-xuat'},
  {name: 'Sản phẩm', path: '/san-pham'},
  {name: 'Dự án', path: '/du-an'},
  {name: 'Tin tức', path: '/tin-tuc'},
  {name: 'Liên hệ - tuyển dụng', path: '/lienhe-tuyendung'}
];
