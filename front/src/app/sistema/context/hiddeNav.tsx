/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import {  Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react"

interface UserContextProps {
    hiddeNav: boolean,
    setHiddeNav:Dispatch<SetStateAction<boolean>>
}


const UserContextHidden = createContext<UserContextProps | undefined>(undefined);


export const UserProviderHidden = ({ children }:{children:ReactNode}) => {
    const[hiddeNav, setHiddeNav]= useState(false)

    const contextValue: UserContextProps = {
        hiddeNav,
        setHiddeNav
        
    }

    return(
    <UserContextHidden.Provider value={contextValue}>
        {children}
    </UserContextHidden.Provider>
        )
  
}


export const useContextHiddent = () => {
    const context =useContext(UserContextHidden);
  
    if (!context) {
      throw new Error('ChangeInput deve ser usado dentro de um UserProviderVisitors');
    }
  
    return context;
  };
  