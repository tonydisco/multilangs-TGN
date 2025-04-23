import {IPageDefaultProps} from '@/models/interface';

const NewsPage = async ({params}: Readonly<IPageDefaultProps>) => {
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
