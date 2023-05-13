export const validEmail = new RegExp(
    '^[a-zA-Z0-9_]{3,}@[A-Za-z]{3,}[.]{1}[a-zA-z.]{2,6}$'
 );


 export const validPassword = new RegExp('^[0-9A-Za-z!@#$%^&*]{4,10}$');

 export const validaadhar = new RegExp('^[0-9]{12}$');
 

 export const validname = new RegExp('^[A-Za-z. ]{3,30}$');
 export const validanumber = new RegExp('^[0-9]{10}$');
 export const validpincode = new RegExp('^[0-9]{6}$');
