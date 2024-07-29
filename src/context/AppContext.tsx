import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextProps {
  isPaidVersion: boolean;
  togglePaidVersion: () => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isPaidVersion, setIsPaidVersion] = useState(false);

  const togglePaidVersion = () => {
    setIsPaidVersion((prev) => !prev);
  };

  return (
    <AppContext.Provider value={{ isPaidVersion, togglePaidVersion }}>
      {children}
    </AppContext.Provider>
  );
};
