'use client';
import {ISetting, ILanguages} from '@/models/interface';
import React, {createContext, ReactNode, useContext, useMemo} from 'react';

interface AppState {
  locale: string;
  defaultLocale: string | undefined;
  locales: ILanguages[];
  utilSetting: ISetting;
}

const AppContext = createContext<AppState | undefined>(undefined);

export const AppProvider: React.FC<{
  children: ReactNode;
  locale: string;
  defaultLocale: string;
  locales: ILanguages[];
  utilSetting: ISetting;
}> = ({children, locale, defaultLocale, locales, utilSetting}) => {
  const localeState = useMemo(() => {
    return {locale, defaultLocale, locales, utilSetting};
  }, [locale, defaultLocale, locales, utilSetting]);

  return (
    <AppContext.Provider value={localeState}>{children}</AppContext.Provider>
  );
};

export const useAppContext = (): AppState => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
