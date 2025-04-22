import {getLangs} from '@/apis/langs';
import {ILanguages} from '@/models/interface';
import {useState, useEffect} from 'react';

const getDefaultLang = (list: any): string => {
  const findDefaultLang = list.find((item: ILanguages) => item.isDefault);
  return findDefaultLang?.code ?? '';
};

export function useLocales() {
  const [locales, setLocales] = useState<Array<ILanguages>>([]);
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
