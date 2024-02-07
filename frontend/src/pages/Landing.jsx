import React from "react";
import { useNavigate } from "react-router-dom";
import BgContainer from "../components/BgContainer";
import ImportantButton from "../components/ImportantButton";

export default function Landing() {
  const navigate = useNavigate();

  const openVault = () => navigate("/login");
  return (
    <BgContainer>
      <div class="text-gradient-from-left-to-right text-center text-red-700 text-3xl  font-extrabold md:text-6xl md:m-12 lg:m-16 lg:text-7xl">
        <p class="bg-gradient-to-r from-brandRed to-white bg-clip-text text-transparent">
          Mind Box: Read Once,
          <br />
          Remember Forever.
        </p>
      </div>

      <ImportantButton label="Open the vault" action={openVault} />
    </BgContainer>
  );
}
