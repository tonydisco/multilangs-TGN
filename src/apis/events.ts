import {getPosts} from '.';
import {IGetPostsOption, IGetPostResponse} from '@/models/interface';

export const getEvents = async (
  option?: Partial<IGetPostsOption>
): Promise<IGetPostResponse> => {
  const defaultOption: IGetPostsOption = {
    typeId: 'event',
    page: 1,
    pageSize: 100,
    ...option
  };
  return await getPosts<IGetPostResponse>({
    ...defaultOption
  });
};
