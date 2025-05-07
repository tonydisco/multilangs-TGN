import {NewsItem, NewsTabs} from '@/components/Common/News';
import {IGetPostResponse} from '@/models/interface';
import {useAppContext} from '@/Providers';
import {parseDate} from '@/utils/common';
import {newsTabs, routes} from '@/utils/config';

const NewsList = (props: {news: IGetPostResponse}) => {
  const {news} = props;
  const {locale} = useAppContext();
  return (
    <div className="tgn-newslist-container">
      <NewsTabs tabs={newsTabs} />
      <div className="tgn-newslist-content">
        {news.posts.map((item) => {
          const contentByLocale = item?.contents?.find(
            (content) => content.language === locale
          );
          if (!contentByLocale) {
            return null;
          }
          const {title, excerpt} = contentByLocale;
          return (
            <div key={item.id} className="tgn-news-item">
              <NewsItem
                locale={locale}
                linkTo={routes.news + `/${item.slug}`}
                title={title}
                imageUrl={item.featuredImageUrl}
                date={parseDate(item.publicationDate)}
                shortDescription={excerpt}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsList;
