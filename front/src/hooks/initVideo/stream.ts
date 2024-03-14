import { useContextStream } from '@/context/mediaDevices/mediaDevices';
const constraints = {
  video: {
    width: { ideal: 1920 },
    height: { ideal: 1080 }
  }
};

export function useMediaDevices() {
  const{setStream,stream,setImageSrc,imageSrc}=useContextStream()
  
 async function getMediaStream() {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
      return mediaStream;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async function initCamera() {
    try {
     if (stream) {
          closeCamera(); // Fecha o stream existente
      }
     const newStream = await getMediaStream();
      
      if (newStream) {
        setStream(newStream);
        if (imageSrc) {
            setImageSrc(imageSrc)
        }
        return newStream
      }
      return newStream
    } catch (error) {
      console.error('Erro ao inicializar a câmera:', error);
      return null
    }
  }
     function closeCamera() {
        if (stream) {
            stream.getTracks().forEach((track) => {
              track.stop();
            });
          }
        }
       
  return { stream, initCamera ,closeCamera };
}



 

