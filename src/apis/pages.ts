import {apiRequest} from '@/services/fetchAPI';

export const getLvhd = async (_slug: string) => {
  return apiRequest<any>(`public/posts/contents?slug=${_slug}`);
};
