import {host} from '@/utils/config';
import {ApiResult} from '@/models/interface';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export const apiRequest = async <T>(
  _url: string,
  method: HttpMethod = 'GET',
  body?: any,
  options: RequestInit = {}
): Promise<ApiResult<T>> => {
  try {
    const url = host + _url;

    const fetchOptions: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      cache: 'no-cache',
      ...options
    };

    if (body !== undefined && method !== 'GET') {
      fetchOptions.body = JSON.stringify(body);
    }

    const res = await fetch(url, fetchOptions);

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    return data as ApiResult<T>;
  } catch (error) {
    return error as ApiResult<T>;
  }
};
