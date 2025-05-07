import {host} from '@/utils/config';
import {ApiRequestOptions, ApiResult} from '@/models/interface';

function buildQueryString(
  params?: Record<string, string | number | boolean | undefined>
): string {
  if (!params) return '';
  const esc = encodeURIComponent;
  const query = Object.entries(params)
    .filter(([, v]) => v !== undefined)
    .map(([k, v]) => `${esc(k)}=${esc(String(v))}`)
    .join('&');
  return query ? `?${query}` : '';
}

export const apiRequest = async <T>(
  _url: string,
  {
    method = 'GET',
    headers = {
      'Content-Type': 'application/json'
    },
    params,
    ...options
  }: ApiRequestOptions = {}
): Promise<ApiResult<T>> => {
  try {
    const url = host + _url + buildQueryString(params);

    if (options?.body) {
      options.body = JSON.stringify(options.body);
    }

    const fetchOptions: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      cache: 'no-cache',
      ...options
    };

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
