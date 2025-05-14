import {apiRequest} from '@/services/fetchAPI';

export const getAttributes = async (type: string = 'Job') => {
  if (!type) {
    return null;
  }
  return (await apiRequest<any>(`public/attributes?typeId=${type}`)).result;
};
