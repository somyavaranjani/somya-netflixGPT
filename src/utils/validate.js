export const checkValidateData=(email ,password)=>{

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)
    if(!isEmailValid) return "email id is not vaild";
    if(!isPasswordValid) return "password is not vaild";

    return null; //means no error (if string is return ie error)
};