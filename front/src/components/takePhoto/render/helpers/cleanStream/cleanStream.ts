export function cleaStream(stream:MediaStream) {
    if (stream) {
      stream.getTracks().forEach((marck) => {
        console.log(marck.id)
       marck.stop();
      });
    }
  }