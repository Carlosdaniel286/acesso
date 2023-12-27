'use client'

import React, { createContext, useState, useContext, ReactNode } from 'react';

// Defina o formato do contexto
interface UserContextProps {
  cpf: string;
  cnh: string;
  nome: string;
  senha:string;
  adress:{qd:string,lt:string}
  updateCpf: (cpf: string) => void;
  updateCnh: (cnh: string) => void;
  updateSenha: (senha: string) => void;
  updateNome: (nome: string) => void;
  updateAdress: (adress:{qd:string,lt:string}) => void;
}

// Crie o contexto com valores padrão
const UserContext = createContext<UserContextProps | undefined>(undefined);

// Crie um provedor que será usado para envolver seus componentes
export const UserProvider = ({ children }:{children:ReactNode}) => {
 
  const [inputs, setInputs]=useState({
    cpf:'',
    cnh:'',
    nome:'',
    senha:'',
    adress:{
        qd:'',
        lt:''
    }
  })
  
  
  const updateCpf = (cpf: string) => {
    setInputs({...inputs,cpf});
  };

  const updateCnh = (cnh: string) => {
    setInputs({...inputs,cnh});
  };

  const updateSenha= (senha: string) => {
    setInputs({...inputs,senha});
  };

  const updateNome = (nome: string) => {
    setInputs({...inputs,nome});
  };

  const updateAdress = (adress:{
    qd: string;
    lt: string;
}) => {
    setInputs({...inputs,adress});
  };

  const contextValue: UserContextProps = {
    cpf:inputs.cpf,
    cnh:inputs.cnh,
    nome:inputs.nome,
    senha:inputs.senha,
    adress:inputs.adress,
    updateCpf,
    updateCnh,
    updateNome,
    updateSenha,
    updateAdress,
    
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
