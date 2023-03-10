import React from "react";
import { useNavigate } from "react-router-dom";
import candle from "../../media/candle-burning-flame.png";
import AccountButton from "./AccountButton";
import BasketButton from "./BasketButton";

const NavBar = () => {
  const navigate = useNavigate();

  const styleWords =
    "block p-4 text-lg hover:bg-rose-50 hover:text-rose-300 rounded border-2 border-white hover:border-rose-300";
  const styleIcons = "w-10 hover:cursor-pointer";

  return (
    <nav className="sticky top-0 relative px-4 py-1 sm:flex flex-wrap bg-white drop-shadow-sm w-full z-10">
      <div className="sm:flex flex-row justify-around items-center w-full hover:cursor-pointer">
        <button
          onClick={() => navigate("/")}
          className="sm:inline-flex px-4 py-4 font-semibold hover:bg-rose-50 hover:text-rose-300 rounded border-2 border-white hover:border-rose-300"
        >
          <img src={candle} alt="logo" className={styleIcons} />
          <span className="self-end">GlowZo</span>
        </button>
        <ul className="sm:inline-flex sm:space-x-16">
          <button
            onClick={() => navigate("/collection")}
            className={styleWords}
          >
            Collection
          </button>
          <button onClick={() => navigate("/about")} className={styleWords}>
            About
          </button>
          <button onClick={() => navigate("/contact")} className={styleWords}>
            Contact us
          </button>
        </ul>
        <div className="w-full inline-flex space-x-4 sm:w-auto">
          <AccountButton styleIcons={styleIcons} />
          <BasketButton styleIcons={styleIcons} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
