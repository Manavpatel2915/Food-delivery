import React from "react";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";
import SignupButton from "./SignupButton";

export default function NavbarbuttonGroup(){
    return(
        <div>
            <RegisterButton/>
            <LoginButton/>
            <SignupButton/>
        </div>
    );
}