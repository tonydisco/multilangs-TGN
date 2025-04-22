import {apiRequest} from '@/services/fetchAPI';

export const getPage = async (slug: string) => {
  return (await apiRequest<any>(`public/posts/contents?slug=${slug}`)).result;
};
