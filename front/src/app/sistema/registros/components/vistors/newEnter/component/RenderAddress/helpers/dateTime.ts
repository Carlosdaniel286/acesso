import { format } from 'date-fns';
export const formatDate=((date:Date|string)=>{
    try{
    if(date =='') return ""
   const formated = format(date, "dd/MM/yyyy HH:mm")
   if(!formated) return ''
   return formated
    }catch(err){
        console.log(err)
        return ""
    }
})