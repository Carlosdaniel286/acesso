'use client'

import React, { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from 'react';




interface UserContextProps {
    controll: "" | "Exit" | "Enter"
    setControll: React.Dispatch<React.SetStateAction<"" | "Exit" | "Enter">>
}


const UserCache = createContext<UserContextProps | undefined>(undefined);

export const UserProviderCacher = ({ children }: { children: ReactNode }) => {
    const [controll, setControll] = useState<"Exit" | "Enter" | "">('Exit');
  const contextValue: UserContextProps = {
    controll,
    setControll
  };

  return <UserCache.Provider value={contextValue}>{children}</UserCache.Provider>;
};

export const useCache = () => {
  const context = useContext(UserCache);

  if (!context) {
    throw new Error('cache fora de conetxto');
  }

  return context;
};
