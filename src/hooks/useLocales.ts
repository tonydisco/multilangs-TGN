import {getLangs} from '@/apis/langs';
import {Languages} from '@/models/interface';
import {useState, useEffect} from 'react';

const getDefaultLang = (list: any): string => {
  const findDefaultLang = list.find((item: Languages) => item.isDefault);
  return findDefaultLang?.code ?? '';
};

export function useLocales() {
  const [locales, setLocales] = useState<Array<Languages>>([]);
  const [defaultLocale, setDefaultLocale] = useState<string>();

  useEffect(() => {
    (async () => {
      const {result} = await getLangs();
      if (result?.languages) {
        const defaut = getDefaultLang(result.languages);
        setDefaultLocale(defaut);
        setLocales(result.languages);
      }
    })();
  }, []);

  return {defaultLocale, locales};
}
