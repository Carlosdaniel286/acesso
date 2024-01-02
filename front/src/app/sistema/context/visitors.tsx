'use client'

import React, { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from 'react';

type UserAddress = {
  qd: string;
  lt: string;
};

type UserVisitors = {
  name: string ,
  cpf:number,
  id:number
};

interface UserContextProps {
  visitors: UserVisitors[];
  setVisitors: Dispatch<SetStateAction<UserVisitors[]>>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProviderVisitors = ({ children }: { children: ReactNode }) => {
  const [visitors, setVisitors] = useState<UserVisitors[]>([
    {
      name: '' ,
       cpf:0,
       id:0
    }
  ]);

  const contextValue: UserContextProps = {
    visitors,
    setVisitors
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export const useVisitors = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useVisitors deve ser usado dentro de um UserProviderVisitors');
  }

  return context;
};
