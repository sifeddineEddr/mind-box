import React from "react";
import { useNavigate } from "react-router-dom";
import ImportantButton from "../components/ImportantButton";
import Button from "../components/Button";
import Input from "../components/Input";
import BgContainer from "../components/BgContainer";
import Link from "../components/link";

export default function Login() {
  const navigate = useNavigate();

  const OauthLogin = () => {};
  const handleLogin = () => {};
  const handleForgetPwd = () => {};
  const signupNavigation = () => navigate("/signup");

  const label = (
    <span className="flex items-center gap-2">
      <img className="w-[12%]" src="/google-logo.svg" /> log in with google
    </span>
  );

  return (
    <BgContainer>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex flex-col items-center gap-8">
          <div className="mb-8">
            <ImportantButton label={label} action={OauthLogin} />
          </div>
          <div className="flex flex-col items-start gap-4 lg:gap-12">
            <Input label="email" type="email" />
            <Input label="password" type="password" />
          </div>
          <Button label="login" action={handleLogin} />
          <div className="flex gap-24 justify-between">
            <Link text="Forgot your password?" action={handleForgetPwd} />
            <Link text="Create a new account" action={signupNavigation} />
          </div>
        </div>
      </div>
    </BgContainer>
  );
}
