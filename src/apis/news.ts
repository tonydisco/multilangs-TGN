import {getPosts} from '.';
import {IGetPostsOption, IGetPostResponse} from '@/models/interface';

export const getNews = async (
  option?: Partial<IGetPostsOption>
): Promise<IGetPostResponse> => {
  const defaultOption: IGetPostsOption = {
    typeId: 'news',
    page: 1,
    pageSize: 100,
    ...option
  };
  return await getPosts<IGetPostResponse>({
    ...defaultOption
  });
};
