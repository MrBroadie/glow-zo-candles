import React from "react";

// import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";

import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import { AuthPages, Pages } from "./pages";

function App() {
  // const { isAuthenticated } = useAuth0();
  const isAuthenticated = true;
  const app = isAuthenticated ? AuthPages : Pages;

  return (
    <>
      <BrowserRouter>
        <NavBar />
        {app}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
