import React from "react";

export default function BgContainer({ children }) {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-brandBlue via-brandDarkBlue to-brandBlue text-white flex flex-col items-center justify-center font-inter">
      <img
        src="/mind-box-logotype.svg"
        alt="mind-box"
        className="hidden -top-2 -left-2 md:block md:w-1/3 lg:w-1/6 absolute lg:-top-4 lg:-left-4"
      />
      <img
        src="/mind-box-logo.svg"
        alt="mind-box"
        className="w-1/2 absolute -top-2 -left-2 md:hidden"
      />
      {children}
    </div>
  );
}
