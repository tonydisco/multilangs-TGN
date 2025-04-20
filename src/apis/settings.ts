import {ISetting} from '@/models/interface';
import {apiRequest} from '@/services/fetchAPI';

export const getSettings = async () => {
  return apiRequest<ISetting>(`public/settings`);
};
