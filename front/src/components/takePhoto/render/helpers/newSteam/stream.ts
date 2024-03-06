export async function mediaDevices(){
    try{
      const stream = await navigator.mediaDevices.getUserMedia({video:true});
       return stream
    }catch(err){
        console.log(err)
        return null
    }
}
