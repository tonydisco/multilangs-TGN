import {dayjs} from '@/utils/dayjs';
import {TSetting} from './../models/types';
import {defautDateFormat} from './dayjs';
interface ISetting {
  id?: string;
  key: string;
  updatedBy?: string;
  updatedTime?: string;
  value?: string;
}

export const getBySetting = (settingKey: TSetting, arr: Array<ISetting>) => {
  if (arr?.length === 0) {
    return null;
  }
  return arr?.find((item) => item.key === settingKey);
};

export const parseDate = (date: string, format = defautDateFormat) => {
  return dayjs(date).format(format);
};
