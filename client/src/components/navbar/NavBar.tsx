import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectUser } from "../../app/userSlice";
import { userObject } from "../../interfaces/userInterfaces";
import candle from "../../media/candle-burning-flame.png";
import BasketButton from "./BasketButton";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const NavBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [userState, setUserState] = useState<userObject>({
    sub: "",
    email: "",
    name: "",
  });

  const loggedInUser = useAppSelector(selectUser);

  useEffect(() => {
    console.log("loggedInUser", loggedInUser);
    setUserState(loggedInUser);
  }, [loggedInUser]);

  console.log("nav", userState);

  const styleWords =
    "block p-2 text-lg  hover:bg-rose-50 hover:text-rose-300 rounded border-white w-full";
  const styleIcons = "w-10 hover:cursor-pointer";

  return (
    <>
      <nav className="sticky top-0 px-4 py-1 bg-white h-20 drop-shadow-sm z-10">
        <div className="flex justify-between items-center w-full ">
          <button
            onClick={() => navigate("/")}
            className="flex px-4 py-4 rounded font-semibold"
          >
            <img src={candle} alt="logo" className={styleIcons} />
            <span className="self-end">GlowZo</span>
          </button>
          {/* Show when large screen */}
          <ul className="hidden lg:flex w-1/2">
            <button
              onClick={() => navigate("/collection")}
              className={styleWords}
            >
              Collection
            </button>
            <button onClick={() => navigate("/")} className={styleWords}>
              Home
            </button>
            <button onClick={() => navigate("/about")} className={styleWords}>
              About
            </button>
            <button onClick={() => navigate("/contact")} className={styleWords}>
              Contact us
            </button>
          </ul>
          <div className="hidden lg:flex space-x-4 p-4">
            <BasketButton styleIcons={styleIcons} />
            {userState.sub.length ? (
              <LogoutButton styleIcons={styleIcons} />
            ) : (
              <LoginButton styleIcons={styleIcons} />
            )}
          </div>

          {/* Show when small screen */}
          <button onClick={toggleMenu} className="lg:hidden">
            <div className={`flex flex-col h-full justify-center items-end`}>
              <span
                className={`h-0.5 w-8 my-2 bg-slate-500 transform transition duration-500 ease-in-out ${
                  isOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              ></span>
              <span
                className={`h-0.5 w-8 bg-slate-500 transform transition duration-500 ease-in-out ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`h-0.5 w-8 bg-slate-500 my-2 transform transition duration-500 ease-in-out ${
                  isOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </nav>
      <div
        className={`transition duration-200 ease-in-out transform p-2 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-20 right-0 z-20 w-64  overflow-auto bg-white h-fit rounded p-4 lg:hidden`}
      >
        <ul>
          <button
            onClick={() => navigate("/collection")}
            className={styleWords}
          >
            Collection
          </button>
          <button onClick={() => navigate("/")} className={styleWords}>
            Home
          </button>
          <button onClick={() => navigate("/about")} className={styleWords}>
            About
          </button>
          <button onClick={() => navigate("/contact")} className={styleWords}>
            Contact us
          </button>
        </ul>
        <div className="w-full flex justify-around space-x-4 p-4">
          <BasketButton styleIcons={styleIcons} />
          {userState.sub.length ? (
            <LogoutButton styleIcons={styleIcons} />
          ) : (
            <LoginButton styleIcons={styleIcons} />
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
