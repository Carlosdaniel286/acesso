import Image from "next/image"
import Overlay from "../overlay/hidden"
import style from './style/imageFull.module.css'
type fullImage={
    src:string,
    displayImage:(()=>void)
}

export default function ImageFull({src,displayImage}:fullImage){
     return(
        <>
        <Overlay
         children={
         <>
         
           <Image
            id={style.images}
            src={src}
             width={500}
             height={500}
            alt=""
            onClick={displayImage}
        />
         </>
         }
         handleOverlayVisibility={displayImage}
        />
        </>
     )
}