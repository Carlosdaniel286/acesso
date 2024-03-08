
const constraints = {
    video: {
      width: { ideal: 1920 },
      height: { ideal: 1080 }
    }
  };


export async function mediaDevices(){
    try{
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
       return stream
    }catch(err){
        console.log(err)
        return null
    }
}
