import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Landing from "../pages/landing";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Flashcards from "../pages/Flashcards";
import Books from "../pages/Books";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* auth */}
        <Route path="/home" element={<Home />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </BrowserRouter>
  );
}
