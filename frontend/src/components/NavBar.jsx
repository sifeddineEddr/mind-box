import React from "react";
import { useNavigate } from "react-router-dom";
import NavLink from "./NavLink";

export default function NavBar() {
  const navigate = useNavigate();

  const home = () => navigate("/home");
  const flashcards = () => navigate("/flashcards");
  const books = () => navigate("/books");
  const logout = () => {};

  return (
    <div className="flex">
      <img
        src="/mind-box-logotype.svg"
        alt="mind-box"
        className="hidden -top-2 -left-2 md:block md:w-1/3 lg:w-1/6 absolute lg:-top-4 lg:-left-4"
      />
      <img
        src="/mind-box-logo.svg"
        alt="mind-box"
        className="w-1/3 absolute -top-5 -left-2 md:hidden"
      />

      <div className="flex gap-8 absolute right-12">
        <NavLink icon="home" link={home} />
        <NavLink icon="flashcards" link={flashcards} />
        <NavLink icon="books" link={books} />
        <NavLink icon="logout" link={logout} />
      </div>
    </div>
  );
}
