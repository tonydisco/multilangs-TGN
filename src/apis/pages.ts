import {apiRequest} from '@/services/fetchAPI';

export const getPage = async (slug: string) => {
  if (!slug) {
    return null;
  }
  return (await apiRequest<any>(`public/posts/contents?slug=${slug}`)).result;
};
