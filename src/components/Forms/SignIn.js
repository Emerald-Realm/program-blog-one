import React from "react";
import { BaseButtonTwo } from "../Templates/BaseButton/BaseButton";

function SignIn() {
  return (
    <div className="sign-in">
      <p className="sign-in-title h4">You can Login with the following options</p>
      <div className="sign-in-options">
        <BaseButtonTwo buttonText="Login with Google" newClass='wide' />
        <BaseButtonTwo buttonText="Login with Facebook"  newClass='wide'/>
        <BaseButtonTwo buttonText="Login with Email" newClass= 'wide' />
      </div>
    </div>
  );
}

export default SignIn;
