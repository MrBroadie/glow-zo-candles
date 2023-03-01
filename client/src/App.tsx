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
        <div className="flex flex-col justify-between min-h-screen">
          <NavBar />
          {app}
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
