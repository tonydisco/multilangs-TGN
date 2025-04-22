import React from 'react';
import {GetStaticPaths, GetStaticProps, NextPage} from 'next';

interface NewsPageProps {
  locale: string;
  slug: string;
}
export const getStaticPaths: GetStaticPaths = async () => {
  // Giả sử danh sách slugs và locales
  const slugs = ['article-1', 'article-2'];
  const locales = ['en', 'vi'];

  const paths = locales.flatMap((locale) =>
    slugs.map((slug) => ({
      params: {locale, slug}
    }))
  );

  return {
    paths,
    fallback: 'blocking' // hoặc 'blocking' nếu cần fallback
  };
};

export const getStaticProps: GetStaticProps<NewsPageProps> = async ({
  params
}) => {
  const locale = params?.locale as string;
  const slug = params?.slug as string;

  try {
    // Gọi API để lấy dữ liệu bài viết dựa trên locale và slug
    const response = await fetch(
      `https://your-api.com/api/news/${locale}/${slug}`
    );
    const article = response.json();

    return {
      props: {
        locale,
        slug,
        content: null // Dữ liệu bài viết
      },
      revalidate: 60 // ISR: Cập nhật dữ liệu sau 60 giây
    };
  } catch (error) {
    console.error('Error fetching article:', error);
    return {
      notFound: true // Trả về 404 nếu bài viết không tồn tại
    };
  }
};

const NewsPage: NextPage<NewsPageProps> = ({locale, slug}) => {
  return (
    <div>
      <h1>Locale: {locale}</h1>
      <h1>Slug: {slug}</h1>
    </div>
  );
};

export default NewsPage;
