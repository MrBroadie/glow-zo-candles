import React from "react";
import candle from "../../media/candle-burning-flame.png";
import AccountButton from "./AccountButton";
import BasketButton from "./BasketButton";

type Props = {
  name: string;
};

const NavBar = (props: Props) => {
  const styleWords =
    "block p-4 text-sm font-semibold text-gray-400 hover:bg-pink-50 hover:text-rose-300 hover:cursor-pointer rounded";
  const styleIcons = "w-10 hover:cursor-pointer";

  return (
    <nav className="sticky top-0 relative px-4 py-1 sm:flex flex-wrap bg-white justify-between drop-shadow-2xl w-full">
      <div className="sm:flex flex-row justify-between items-center w-full">
        <a
          href="/"
          className="sm:inline-flex px-4 py-4 font-semibold hover:bg-pink-50 hover:text-rose-300 rounded"
        >
          <img src={candle} alt="logo" className={styleIcons} />
          <span className="self-end">GlowZo</span>
        </a>
        <ul className="sm:inline-flex sm:space-x-16">
          <li className={styleWords}>Products</li>
          <li className={styleWords}>About</li>
          <li className={styleWords}>Contact us</li>
        </ul>
        <div className="w-full inline-flex content-end space-x-4 sm:w-auto">
          <AccountButton styleIcons={styleIcons} />
          <BasketButton styleIcons={styleIcons} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
