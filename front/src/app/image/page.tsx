import Image from "next/image";

export default function Images() {
 return(
    <div className=""
    style={{
        display:'flex',
        width:'100vw',
        height:'100vh',
        alignItems:'center',
        justifyContent:'center'
    }}
    >
    <div  style={{borderRadius:'50%'}}>
    <Image
     alt=""
     width={500}
     height={500}
     src={'/logo.png'}
     style={{borderRadius:'50%'}}
    />
    </div>
    </div>
 )

}