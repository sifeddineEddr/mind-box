import React from "react";

export default function ImportantButton({ label, action }) {
  return (
    <button
      className="px-20 py-2 rounded-3xl bg-brandRed shadow-3xl border-2 border-brandRed font-semibold text-lg"
      onClick={action}
    >
      {label}
    </button>
  );
}
