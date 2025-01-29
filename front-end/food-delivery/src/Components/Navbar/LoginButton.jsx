import React, {useContext} from "react";
import { LoginContext } from "../../contexts/loginContext";
export default function LoginButton(){
    const {isOpen, setisOpen} = useContext(LoginContext);
    return(
        <>
            <button className="cursor-pointer" onClick={()=>{setisOpen(true)}}>Log in</button>
        </>
    );
}