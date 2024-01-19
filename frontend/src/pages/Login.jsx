import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Login() {
  return (
    <div className="flex flex-col items-center gap-8 h-5/6 mt-8">
      <Button label="Oauth" action={OauthLogin} />
      <div className="flex flex-col items-start gap-8">
        <Input label="email" type="email" />
        <Input label="password" type="password" />
      </div>
      <Button label='login' action={handleLogin}/>
      <p>New user? <span className="underline font-semibold cursor-pointer" onClick={signupNavigation}>Sign up</span> </p>
    </div>
  );
}

const OauthLogin = () => {};
const handleLogin = () => {};
const signupNavigation = () => {};
