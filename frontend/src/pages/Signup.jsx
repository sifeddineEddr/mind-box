import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Signup() {
  return (
    <div className="flex flex-col items-center gap-8 h-5/6 mt-8">
      <Button label="Oauth" action={OauthSignup} />
      <div className="flex gap-24 items-center">
        <div className="flex flex-col items-start gap-8">
          <Input label="first name" type="text" />
          <Input label="last name" type="text" />
        </div>
        <div className="flex flex-col items-start gap-8">
          <Input label="email" type="email" />
          <Input label="password" type="password" />
          <Input label="confirm pwd" type="password" />
        </div>
      </div>
      <Button label="sign up" action={handleSignup} />
      <p>
        Already have an account?
        <span
          className="underline font-semibold cursor-pointer"
          onClick={loginNavigation}
        >
          Login
        </span>
      </p>
    </div>
  );
}

const OauthSignup = () => {};
const handleSignup = () => {};
const loginNavigation = () => {};
