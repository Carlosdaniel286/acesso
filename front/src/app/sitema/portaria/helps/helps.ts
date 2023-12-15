import zxcvbn from 'zxcvbn';

export const checkPasswordStrength = (password:string) => {
  const result = zxcvbn(password);
  const { score } = result;
  
  
switch (score) {
    case 0:
      return { text:'Muito Fraca',score};
    case 1:
      return {text:'Fraca',score};
    case 2:
      return {text:'Média',score}
    case 3:
      return {text:'Forte',score};
    case 4:
      return {text:'Muito Forte',score};
    default:
      return {text:'Inválida',score:0};
  }
};



