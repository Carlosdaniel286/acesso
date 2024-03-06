/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import {  Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react"

export interface UserContextProps {
    hiddeNav: {
        overflow: boolean;
        modal: boolean;
    }
    setHiddeNav: Dispatch<SetStateAction<{
        overflow: boolean;
        modal: boolean;
    }>>
}


const UserContextHidden = createContext<UserContextProps | undefined>(undefined);


export const UserProviderHidden = ({ children }:{children:ReactNode}) => {
    const[hiddeNav, setHiddeNav]= useState({
        overflow:false,
        modal:false
    })

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
  