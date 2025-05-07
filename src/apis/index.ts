// get posts api

import {IGetPostsOption} from '@/models/interface';
import {apiRequest} from '@/services/fetchAPI';

export const getPosts = async <T>(
  queryOption: IGetPostsOption = {}
): Promise<T> => {
  return (await apiRequest<T>(`public/posts`, {params: queryOption})).result;
};
