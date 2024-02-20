import { project } from "@/app/types/form";
import { addressValue } from "@/app/types/inputs";
const Address: addressValue = {
    lt: "",
    qd: ""
  };
export const HandlerChanger:project={
    name: '',
    id: 0,
    cpf: '',
    license: '',
    User:{
        name:""
    },
    inside:[{Address,createdAt:''}]
}