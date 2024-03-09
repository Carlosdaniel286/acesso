// utils/cameraUtils.js


import { useContextStream} from "@/context/mediaDevices/mediaDevices";

export const useCamera = () => {
  const{videoRef,setPhoto,setImageSrc}=useContextStream()

  const takePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement("canvas");
      canvas.height = 400;
      canvas.width = 400;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(videoRef.current, 0, 0, 400, 400);
      canvas.toBlob(async (blob) => {
        if (!blob) return;
        const formData = new FormData();
        formData.append('photo', blob, 'foto.png'); 
        setPhoto(formData);
        const temporaryUrl = URL.createObjectURL(blob);
        setImageSrc(temporaryUrl);
      });
    }
  };

  return {takePhoto};
};
