import React from "react";

export default function BgContainer({ children }) {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-brandBlue via-brandDarkBlue to-brandBlue text-white flex flex-col items-center justify-center">
      <img
        src="/mind-box-logotype.svg"
        alt="mind-box"
        className="w-1/6 absolute -top-4 -left-4"
      />
      {children}
    </div>
  );
}
