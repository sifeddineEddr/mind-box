import React from "react";

export default function AuthBgContaier({ children }) {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-brandBlue via-brandDarkBlue to-brandBlue text-white flex flex-col items-center justify-center font-inter">
      <div className="w-full h-screen absolute bg-[url('/squares-patterns.png')]" />
      <div className="absolute w-2/5 h-1/2 bg-red-950 rounded-full blur-[12.5rem]" />
      <div className="absolute w-2/5 h-1/2 bg-red-800 rounded-full blur-[18.75rem]" />
      <div className="w-[90%] h-[90%] bg-slate-900 bg-opacity-20 rounded-[3.12rem] border-2 border-white border-opacity-10 backdrop-blur-[2.18rem] flex flex-col items-center p-8">
        {children}
      </div>
    </div>
  );
}
