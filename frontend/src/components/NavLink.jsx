import React from "react";

export default function NavLink({ icon, link }) {
  return (
    <div>
      <img
        src={`/${icon}.svg`}
        alt={icon}
        className="cursor-pointer h-4/5"
        onClick={link}
      />
    </div>
  );
}
