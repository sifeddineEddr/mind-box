import React from "react";

export default function Stats({ stat, label, navigation }) {
  return (
    <div className="font-semibold cursor-pointer" onClick={navigation}>
      <div className="w-[250px] h-[250px] bg-neutral-300 bg-opacity-30 rounded-[50px] border-2 border-white border-opacity-10 backdrop-blur-[35px] flex flex-col items-center justify-around">
        <img
          src={`/${label}-stat.svg`}
          alt={`${label}-stat`}
          className="w-[30%]"
        />
        <p className="text-6xl">{stat}</p>
        <p className="capitalize text-xl">{label}</p>
      </div>
    </div>
  );
}
