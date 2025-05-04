import {newsTabs} from '@/utils/config';
import {NewsItem, NewsTabs} from '@/components/Common/News';
import {newsItems} from '@/mockData';

const NewsList = () => {
  return (
    <div className="tgn-newslist-container">
      <NewsTabs tabs={newsTabs} />
      <div className="tgn-newslist-content">
        {newsItems.map((item) => (
          <div key={item.id} className="tgn-news-item">
            <NewsItem
              title={item.title}
              date={item.date}
              imageUrl={item.imageUrl}
              shortDescription="Trong quá trình xây dựng, việc chọn vật liệu phù hợp đóng vai trò quan trọng trong việc đảm bảo chất lượng và độ bền của công trình xây dựng. Bê tông tươi là một trong những vật liệu xây dựng phổ biến nhất hiện nay, được sử dụng rộng rãi trong các công trình xây dựng lớn nhỏ. Tuy nhiên, không phải ai cũng hiểu rõ về bê tông tươi và cách sử dụng nó một cách hiệu quả. Trong bài viết này, chúng tôi sẽ cung cấp cho bạn những thông tin cần thiết về bê tông tươi và cách sử dụng nó trong xây dựng."
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
