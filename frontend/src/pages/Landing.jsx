import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import BgContainer from "../components/BgContainer";

export default function Landing() {
  const navigate = useNavigate();

  const openVault = () => navigate("/login");
  return (
    <BgContainer>
      <div class="text-gradient-from-left-to-right text-center text-red-700 text-8xl font-extrabold m-16 font-inter">
        <p class="bg-gradient-to-r from-brandRed to-white bg-clip-text text-transparent">
          Mind Box: Read Once,
          <br />
          Remember Forever.
        </p>
      </div>
      <Button label="Open the vault" action={openVault} />
    </BgContainer>
  );
}
