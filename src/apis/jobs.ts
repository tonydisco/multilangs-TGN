import {apiRequest} from '@/services/fetchAPI';

interface IGetjobs {
  contents: Array<{
    language: string;
    title: string;
    blocks: Array<{
      index: number;
      name: string;
      conttent: string;
      setting: string;
    }>;
  }>;
  id: string;
  typeId: string;
  title: string;
  slug: string;
}
export const getJobs = async (options?: {
  page?: number;
  pageSize?: number;
  typeId?: string;
  attributes?: string;
}) => {
  const params = {
    page: 1,
    pageSize: 1000,
    typeId: 'job',
    attributes: 'Job.NumberOfVacancies:1'
  };
  return apiRequest<{
    posts: IGetjobs[];
    total: number;
  }>(`public/posts`, {
    params: {...params, ...options}
  });
};
