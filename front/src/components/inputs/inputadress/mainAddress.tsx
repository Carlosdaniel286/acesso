import Image from "next/image";
import style from './style/adress.module.css';
import { InputAdress } from "./andress";
import { useEffect, useState } from "react";
import { addressValue } from "@/app/types/inputs";

export type address = {
  setValueOfAddress: ((value: addressValue[]) => void);
};

export const InputAdressMain = (value: address) => {
  const [valueOfAddress, setValueOfAddress] = useState<addressValue[]>([{
    lt: '',
    qd: ''
  }]);
  
  const getValueOfAddress = (value: addressValue) => {
    if (valueOfAddress[0].qd == '') {
      setValueOfAddress([value]);
    } else {
      setValueOfAddress([...valueOfAddress, value]);
    }
  };
  
  const [inputadress, setInputadress] = useState([
    <InputAdress
      getValueOfAddress={getValueOfAddress}
      key={'0'}
    />
  ]);

  const [click, setClik] = useState<number>(0)

  useEffect(() => {
    setClik((prev) => prev + 1)
  }, [inputadress])

 useEffect(() => {
    value.setValueOfAddress(valueOfAddress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueOfAddress]);

  const handleAddClick = () => {
    if (inputadress.length > 9) return;
    setInputadress((prevDivs) => [...prevDivs, <InputAdress key={click} getValueOfAddress={getValueOfAddress} />]);
  };

  const handleRemoveClick = (keyToRemove: string | null) => {
    console.log(keyToRemove)
    if (keyToRemove === '0' || keyToRemove === null) return;

    const filteredInputAddress = inputadress.filter((item) => {
      console.log(item)
      console.log(keyToRemove == item.key)
      return item.key !== keyToRemove
    })

    console.log(filteredInputAddress);

    setInputadress([...filteredInputAddress]);
  };

  return (
    <div className={style.addressAdd}>
     
      <div className={style.addressArry} key={'0'}>
        {
          inputadress.map((item,id) => (
            <div key={item.key} className={style.inputsOver}>
              <div className={style.index}>{id+1}</div>
              {item}
              <div className={style.clean}>
                {item.key !== "0" && item.key !== null && (
                  <Image
                    src={'/menos.png'}
                    alt=""
                    width={20}
                    height={20}
                    layout="full"
                    quality={100}
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      handleRemoveClick(item.key);
                    }}
                  />
                )}
              </div>
            </div>
          ))
        }
      </div>
      <div className={style.imgAddress}>
        <Image
          src={'/adicionar.png'}
          alt=""
          width={30}
          height={30}
          layout="full"
          quality={100}
          style={{ cursor: 'pointer' }}
          onClick={() => {
            handleAddClick();
          }}
        />
      </div>
      
    </div>
  );
};
