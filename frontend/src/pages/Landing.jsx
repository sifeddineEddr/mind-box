import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Landing() {
  const navigate = useNavigate();

  const openVault = () => navigate("/login");
  return (
    <div>
      <button className="btn btn-outline btn-warning">Warning</button>
      <div className="fixed bottom-12 left-[45%] ">
        <Button label="Open the vault" action={openVault} />
      </div>
    </div>
  );
}
