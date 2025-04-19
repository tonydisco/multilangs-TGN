'use client';
import {Languages} from '@/models/interface';
import React, {createContext, ReactNode, useContext, useMemo} from 'react';

interface AppState {
  locale: string;
  defaultLocale: string | undefined;
  locales: Languages[];
}

const AppContext = createContext<AppState | undefined>(undefined);

export const AppProvider: React.FC<{
  children: ReactNode;
  locale: string;
  defaultLocale: string;
  locales: Languages[];
}> = ({children, locale, defaultLocale, locales}) => {
  const localeState = useMemo(() => {
    return {locale, defaultLocale, locales};
  }, [locale, defaultLocale, locales]);

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
