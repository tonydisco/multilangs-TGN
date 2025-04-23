// import {GetStaticPaths, NextPage} from 'next';

// interface NewsPageProps {
//   locale: string;
//   slug: string;
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

const NewsPage = async ({params}: any) => {
  const {slug, locale} = await params;
  return (
    <div style={{height: 500, textAlign: 'center'}}>
      <div className="container">
        <div style={{padding: '100px 0'}}>
          <h1>slug: {slug}</h1>
          <h1>Locale: {locale}</h1>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
