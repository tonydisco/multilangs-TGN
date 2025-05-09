import {getPosts} from '.';
import {IGetPostsOption, IGetPostResponse} from '@/models/interface';

export const getProjects = async (
  option?: Partial<IGetPostsOption>
): Promise<IGetPostResponse> => {
  const defaultOption: IGetPostsOption = {
    typeId: 'project',
    page: 1,
    pageSize: 100,
    ...option
  };
  return await getPosts<IGetPostResponse>({
    ...defaultOption
  });
};
