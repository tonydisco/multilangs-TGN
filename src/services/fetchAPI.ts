import {host} from '@/config';
import {ApiResult} from '@/models/interface';

export const apiRequest = async <T>(
  _url: string,
  options: RequestInit = {}
): Promise<ApiResult<T>> => {
  try {
    const url = host + _url;
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      cache: 'no-cache',
      ...options
    });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    return data as ApiResult<T>;
  } catch (error) {
    return error as ApiResult<T>;
  }
};
