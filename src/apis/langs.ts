import {ILanguages} from '@/models/interface';
import {apiRequest} from '@/services/fetchAPI';
interface ApiResponse {
  languages: ILanguages[];
}

export const getLangs = async () => {
  return apiRequest<ApiResponse>('public/languages');
};

export async function fetchTranslations(): Promise<{
  translations: Record<string, Record<string, string>>;
  result: {
    languages: ILanguages[];
  };
}> {
  const data = await getLangs();

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
