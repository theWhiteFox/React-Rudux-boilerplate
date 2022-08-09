import React from "react";
import Navbar from "../components/NavBar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="App">
        <header>
          <h1>A React Redux boilerplate</h1>
        </header>
        <main>
          <h2>This will be my boilerplate for React projects</h2>
          <p></p>
        </main>
      </div>
    </>
  );
};

export default HomePage;
