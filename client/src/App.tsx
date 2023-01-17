import React from "react";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <NavBar name="Navbar" />
      <LandingPage name="landing page" />
    </>
  );
}

export default App;
