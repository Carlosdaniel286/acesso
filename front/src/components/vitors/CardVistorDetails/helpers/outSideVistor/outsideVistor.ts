import axios from 'axios';
import { addressValue } from '@/app/types/inputs';
import Swal from 'sweetalert2';
import { project } from '@/app/types/form';
import { Dispatch, SetStateAction } from 'react';
import dotenv from 'dotenv'
dotenv.config()
const urlBase = process.env.NEXT_PUBLIC_URL_BASE as string
type NewEnter = {
  //valueOfAddress: addressValue[];
  cards: project;
  hiddeNav: {
    overflow: boolean;
    modal: boolean;
  };
  setHiddeNav: Dispatch<SetStateAction<{
    overflow: boolean;
    modal: boolean;
  }>>;
};

export const newExitVistor = async ({
  cards,
  setHiddeNav,
  hiddeNav,
}: NewEnter) => {
  const newExit = {
    visitorId: cards.id,
  };

  try {
    await axios.post(`${urlBase}/visitorsExit`, newExit,{
      withCredentials:true
    });
    await Swal.fire({
      icon: 'success',
      title: 'OK',
      showConfirmButton: false,
      timer: 500,
    });
    setHiddeNav({ ...hiddeNav, overflow: false });
  } catch (err) {
    console.log(err)
    if (axios.isAxiosError(err)) {
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.message,
        showConfirmButton: true,
      });
    } else {
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'erro no servidor',
        showConfirmButton: true,
      });
    }
  }
};


  //"visitorsExit"