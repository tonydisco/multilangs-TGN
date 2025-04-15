'use client';
import React, {createContext, useContext, ReactNode, useMemo} from 'react';

// Create a context provider to manage the state of the application and locale

interface AppState {
  locale: string;
  //   setLocale: (locale: string) => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

export const AppProvider: React.FC<{children: ReactNode; locale: string}> = ({
  children,
  locale
}) => {
  const localeState = useMemo(() => {
    return {locale};
  }, [locale]);

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
