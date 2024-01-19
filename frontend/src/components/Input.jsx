import React from "react";

export default function Input({ label, type }) {
  return (
    <div className="flex flex-col items-start">
      <label>{label}</label>
      <input type={type} name={label} className="border-2 border-black rounded-md w-56" />
    </div>
  );
}
