import React from "react";

export default function Button({ label, action }) {
  return (
    <button
      className="border-2 border-black px-4 py-1 rounded"
      onClick={action}
    >
      {label}
    </button>
  );
}
