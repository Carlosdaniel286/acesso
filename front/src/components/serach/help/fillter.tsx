/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import axios from 'axios';
import { Inputs } from "@/types/inputs";
import { project } from "@/types/form";
import dotenv from 'dotenv'
dotenv.config()
const urlBase = process.env.NEXT_PUBLIC_URL_BASE as string
export const FillterThis = async (
    codes: string,
    inputs: Inputs,
    updateVistors: (ev: project[]) => void
) => {
    try {
        let queryParams = '';
        if (inputs.name === '' && inputs.cpf === '' && codes === '') {
            const response = await axios.get(`${urlBase}/getvisitor`,{
                withCredentials:true
            });
            updateVistors(response.data);
            return;
        }

        const { cpf, name } = inputs;
        const code = codes === '' ? "" : Number(codes);
    const response = await axios.post(`${urlBase}/filltervisitor`,{cpf,name,code},{
            withCredentials:true
        });
        console.log(response)
        updateVistors(response.data);
    } catch (error) {
        console.error("Error filtering visitors:", error);
    }
};

  