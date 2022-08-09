import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../src/components/NavBar";
import BottomNav from "../src/components/SimpleBottomNavigation";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <BottomNav />
    </>
  );
}

export default App;
