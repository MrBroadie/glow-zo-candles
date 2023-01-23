import React from "react";

// import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";

import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import LandingPage from "./pages/defaultPages/LandingPage";
import { AuthPages, Pages } from "./pages";

function App() {
  // const { isAuthenticated } = useAuth0();
  const isAuthenticated = false;
  const app = isAuthenticated ? AuthPages : Pages;

  return (
    <>
      <NavBar />
      <BrowserRouter>{app}</BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
