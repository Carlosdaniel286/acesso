'use client'

import React, { createContext, useState, useContext, ReactNode } from 'react';

// Defina o formato do contexto
interface UserContextProps {
  inputs: {
    cpf: string;
    cnh: string;
    name: string;
    password: string;
    address: {
        qd: number
        lt: number
    }
}
setInputs: React.Dispatch<React.SetStateAction<{
  cpf: string;
  cnh: string;
  name: string;
  password: string;
  address: {
      qd: number
      lt: number
    };
  }>>

}

// Crie o contexto com valores padrão
const UserContext = createContext<UserContextProps | undefined>(undefined);

// Crie um provedor que será usado para envolver seus componentes
export const UserProvider = ({ children }:{children:ReactNode}) => {
 
  const [inputs, setInputs]=useState({
    cpf:'',
    cnh:'',
    name:'',
    password:'',
    address:{
        qd:0,
        lt:0
    }
  })
  
  
  

  const contextValue: UserContextProps = {
    inputs,
    setInputs
    
};

  
  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

// Função utilitária para usar o contexto em componentes
export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser deve ser usado dentro de um UserProvider');
  }

  return context;
};
