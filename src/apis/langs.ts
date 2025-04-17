import {apiRequest} from '@/services/fetchAPI';

export const getLangs = async () => {
  return apiRequest<any>('public/languages');
};

// lib/fetchTranslations.ts
interface Translation {
  key: string;
  value: string;
}

interface Language {
  code: string;
  translations: Translation[];
}

interface ApiResponse {
  languages: Language[];
}
// interface Setting {
//   icon: string;
//   isDisabled: boolean;
//   isDefault: boolean;
// }

export async function fetchTranslations(): Promise<
  Record<string, Record<string, string>>
> {
  const data = await apiRequest<ApiResponse>('public/languages'); // Thay bằng URL API của bạn

  const translations: Record<string, Record<string, string>> = {};
  // let setting:any<Setting> ={}

  data.result.languages.forEach((language) => {
    translations[language.code] = language.translations.reduce(
      (acc, {key, value}) => ({
        ...acc,
        [key]: value
      }),
      {}
    );
    // setting[]
  });

  return translations;
}
