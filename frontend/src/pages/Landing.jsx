import React from "react";
import Button from "../components/Button";

export default function Landing() {
  return (
    <div>
      <div
        className="fixed bottom-12 left-[45%] "
      >
        <Button label='Open the vault' action={openVault}/>
      </div>
    </div>
  );
}

const openVault = () => {};
