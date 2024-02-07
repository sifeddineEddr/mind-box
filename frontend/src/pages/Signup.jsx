import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import BgContainer from "../components/BgContainer";
import ImportantButton from "../components/ImportantButton";
import Link from "../components/link";

export default function Signup() {
  const navigate = useNavigate();

  const OauthSignup = () => {};
  const handleSignup = () => {};
  const loginNavigation = () => navigate("/login");

  const label = (
    <span className="flex items-center gap-2">
      <img className="w-[12%]" src="/google-logo.svg" /> sign up with google
    </span>
  );

  return (
    <BgContainer>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex flex-col items-center gap-8">
          <div className="mb-8">
            <ImportantButton label={label} action={OauthSignup} />
          </div>
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12 lg:gap-40">
            <div className="flex flex-col gap-8 md:gap-12">
              <Input label="first name" type="text" />
              <Input label="last name" type="text" />
            </div>
            <div className="flex flex-col gap-8 md:gap-12">
              <Input label="email" type="email" />
              <Input label="password" type="password" />
              <Input label="confirm password" type="password" />
            </div>
          </div>
          <Button label="sign up" action={handleSignup} />
          <Link
            text="Already have an account? Log in"
            action={loginNavigation}
          />
        </div>
      </div>
    </BgContainer>
  );
}
