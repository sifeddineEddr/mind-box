import React from "react";

export default function Link({ text, action }) {
  return (
    <div className="text-brandLightRed cursor-pointer" onClick={action}>
      {text}
    </div>
  );
}
