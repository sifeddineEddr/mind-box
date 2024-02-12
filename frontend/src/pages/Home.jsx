import React from "react";
import AuthBgContaier from "../components/AuthBgContaier";
import Stats from "../components/Stats";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const flashcardsNav = () => navigate("/flashcards");
  const booksNav = () => navigate("/books");
  return (
    <AuthBgContaier>
      <div className="flex w-4/5 justify-around my-auto">
        <Stats label="flashcards" stat={99} navigation={flashcardsNav} />
        <Stats label="books" stat={99} navigation={booksNav} />
        <Stats label="authors" stat={99} navigation={booksNav} />
      </div>
    </AuthBgContaier>
  );
}
