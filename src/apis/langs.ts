import {apiRequest} from '@/services/fetchAPI';

export const getLangs = async () => {
  return apiRequest<any>('public/languages');
};
