import {getPosts} from '.';
import {IGetPostsOption, IGetPostResponse} from '@/models/interface';

export const getFactories = async (
  option?: Partial<IGetPostsOption>
): Promise<IGetPostResponse> => {
  const defaultOption: IGetPostsOption = {
    typeId: 'factory',
    page: 1,
    pageSize: 1000,
    ...option
  };
  return await getPosts<IGetPostResponse>({
    ...defaultOption
  });
};
