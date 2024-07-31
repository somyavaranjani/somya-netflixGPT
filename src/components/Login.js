import { useState , useRef } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";

const Login =()=>{
  const [isSignIn , setisSignIn]= useState(true);
  const [errorMessage , seterrorMessage]=useState(null);
  const handleForm =()=>{
    setisSignIn(!isSignIn);
  }
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick =()=>{
    //validate form data
    console.log(email.current.value ,"email");
    console.log(password.current.value,"pass");
    const message = checkValidateData(email.current.value,password.current.value);
    console.log(message,"msg");
    seterrorMessage(message);
    //sign in sign up
  };

    return(<div>
     <Header/>
     <div className="w-full absolute">
        <img alt="bg-img" src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg"/>
     </div>
        <form onSubmit={(e)=>e.preventDefault()} className="bg-black absolute p-2 mx-auto right-0 left-0 my-36  w-4/12 opacity-80 text-white">
            <h1 className="p-4 my-4 w-full font-bold text-3xl"> {isSignIn ? "Sign In ":"Sign Up"}</h1>
           {!isSignIn && < input className="p-4 my-4 w-full rounded-lg bg-gray-700"  type="text" placeholder="enter name"/> } 
            <input
            ref={email}
             className="p-4 my-4 w-full rounded-lg bg-gray-700"  type="email" placeholder="enter email"/>
            <input
            ref={password}
             className="p-4 my-4 w-full rounded-lg  bg-gray-700" type="password" placeholder="password"/>
            <button className="bg-red-700 p-4 my-4 w-full rounded-lg cursor-pointer"
            onClick={handleButtonClick}> {isSignIn ? "Sign In ":"Sign Up"}</button>
            <p className="text-red-500 text-lg font-semibold">{errorMessage}</p>
            <p className="p-4 my-4 cursor-pointer"
            onClick={handleForm}
            
            > {isSignIn ? "new to netflix? sign up now.":"already have an account? sign in."}</p>
        </form>
    </div>)
}
export default  Login;