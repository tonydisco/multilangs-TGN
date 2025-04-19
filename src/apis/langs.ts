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
  icon?: string;
  name?: string;
  isDefault?: boolean;
  isDisabled?: boolean; 
}

interface ApiResponse {
  languages: Language[];
}

export async function fetchTranslations(): Promise<{
  translations: Record<string, Record<string, string>>;
  result: {
    languages: Language[];
  };
}> {
  const data = await apiRequest<ApiResponse>('public/languages');
  const translations: Record<string, Record<string, string>> = {};

  data.result.languages.forEach((language) => {
    translations[language.code] = language.translations.reduce(
      (acc, {key, value}) => ({
        ...acc,
        [key]: value
      }),
      {}
    );
  });
 

  return {translations, result: data.result};
}
