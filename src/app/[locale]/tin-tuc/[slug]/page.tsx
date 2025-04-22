// import {NextPage} from 'next';

// interface NewsPageProps {
//   locale?: string;
//   slug?: string;
// }
// export const getStaticPaths: GetStaticPaths = async () => {
//   // Giả sử danh sách slugs và locales
//   const slugs = ['article-1', 'article-2'];
//   const locales = ['en', 'vi'];

//   const paths = locales.flatMap((locale) =>
//     slugs.map((slug) => ({
//       params: {locale, slug}
//     }))
//   );

//   return {
//     paths,
//     fallback: 'blocking'
//   };
// };

const NewsPage = ({locale, slug}: any) => {
  return (
    <div>
      <h1>Locale: {locale}</h1>
      <h1>Slug: {slug}</h1>
    </div>
  );
};

export default NewsPage;
