import {apiRequest} from '@/services/fetchAPI';

export const getAlbum = async (slug: string) => {
  return (await apiRequest<any>(`public/albums?album=${slug}`)).result;
};
