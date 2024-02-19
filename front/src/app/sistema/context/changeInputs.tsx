'use client'

import React, { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from 'react';



export type Input = 'cpf' | 'nome' | 'codigo';

interface UserContextProps {
    changeInput: Input;
    setChangeInput: React.Dispatch<React.SetStateAction<Input>>;
}

const ChangeInput = createContext<UserContextProps | undefined>(undefined);

export const UserChangeInput = ({ children }: { children: ReactNode }) => {
  const [changeInput, setChangeInput] = useState<Input>('nome');

  const contextValue: UserContextProps = {
    changeInput,
    setChangeInput
  };

  return <ChangeInput.Provider value={contextValue}>{children}</ChangeInput.Provider>;
};

export const useChangeInput = () => {
  const context = useContext(ChangeInput);

  if (!context) {
    throw new Error('ChangeInput deve ser usado dentro de um ChangeInput');
  }

  return context;
};
