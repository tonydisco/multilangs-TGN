import {apiRequest} from '@/services/fetchAPI';

interface IGetRoadMap {
  page: number;
  pageSize: number;
  typeId: string;
  categories: string;
  orderBy: string;
  direction: string;
}

const defaultQuery = {
  page: 1,
  pageSize: 1000,
  typeId: 'event',
  categories: 'Events_DevelopmentStages',
  orderBy: 'title',
  direction: 'asc'
};

export const getRoadMap = async (
  _query: Partial<IGetRoadMap> = defaultQuery
) => {
  return (
    await apiRequest<any>(`public/posts`, {
      params: {...defaultQuery, ..._query}
    })
  ).result;
};
