import {apiRequest, HttpMethod} from '@/services/fetchAPI';

interface IContactUs {
  title: 'string';
  name: 'string';
  company: 'string';
  email: 'string';
  tel: 'string';
  content: 'string';
}

export const contactUs = async ({
  payload,
  method = 'POST'
}: {
  payload: IContactUs;
  method?: HttpMethod;
}) => {
  return apiRequest<any>(`public/contact-us`, {
    method,
    body: payload
  });
};
