import React from "react";

export default function Stats({ stat, label, navigation }) {
  return (
    <div className="font-semibold cursor-pointer" onClick={navigation}>
      <div className="w-[10rem] h-[10rem] rounded-3xl bg-neutral-300 bg-opacity-30 border-2 border-white border-opacity-10 backdrop-blur-[2.18rem] flex flex-col items-center justify-around lg:w-[15.62rem] lg:h-[15.62rem] lg:rounded-[3.12rem]">
        <img
          src={`/${label}-stat.svg`}
          alt={`${label}-stat`}
          className="w-[30%]"
        />
        <p className="text-4xl lg:text-6xl">{stat}</p>
        <p className="capitalize text-md lg:text-xl">{label}</p>
      </div>
    </div>
  );
}
