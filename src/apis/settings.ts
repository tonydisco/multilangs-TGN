import {apiRequest} from '@/services/fetchAPI';

interface ISetting {
  data: Array<{
    id: string;
    key: string;
    value: string;
  }>;
}

export const getSettings = async () => {
  return apiRequest<ISetting>(`public/settings`);
};
