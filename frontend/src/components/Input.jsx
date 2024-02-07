import React from "react";

export default function Input({ label, type }) {
  return (
    <div className="flex flex-col items-start capitalize">
      <label className="text-brandRed">{label}</label>
      <input
        type={type}
        name={label}
        className="border-b-2 py-2 px-4 border-brandRed rounded-md w-[17rem] bg-transparent focus:outline-none"
        placeholder={`Enter your ${label}`}
      />
    </div>
  );
}
