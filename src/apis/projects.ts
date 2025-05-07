import {getPosts} from '.';
import {IGetPostsOption, IGetProjectResponse} from '@/models/interface';

export const getProjects = async (
  option?: Partial<IGetPostsOption>
): Promise<IGetProjectResponse> => {
  const defaultOption: IGetPostsOption = {
    typeId: 'project',
    page: 1,
    pageSize: 100,
    ...option
  };
  return await getPosts<IGetProjectResponse>({
    ...defaultOption
  });
};
