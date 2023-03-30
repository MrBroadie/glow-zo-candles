import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";

import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import { AuthPages, Pages } from "./pages";
import { updateUser } from "./app/userSlice";
import { userObject } from "./interfaces/userInterfaces";
import { useAppDispatch } from "./app/hooks";

function App() {
  const dispatch = useAppDispatch();
  const { isAuthenticated, user } = useAuth0();
  const app = isAuthenticated ? AuthPages : Pages;

  useEffect(() => {
    if (user && user.sub && user.name && user.email) {
      const authUser: userObject = {
        sub: user.sub,
        name: user.name,
        email: user.email,
      };
      isAuthenticated && dispatch(updateUser(authUser));
    }
  }, [isAuthenticated]);

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
