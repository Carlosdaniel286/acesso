'use client'

import React, { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from 'react';
import { project } from '@/app/types/form';




interface UserContextProps {
  visitors: project[]|[];
  setVisitors: Dispatch<SetStateAction<project[]>>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProviderVisitors = ({ children }: { children: ReactNode }) => {
  const [visitors, setVisitors] = useState<project[]|[]>([
    {
      name: '' ,
       cpf:'',
       id:0,
       license:'',
       User:{
        name:''
       }
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
