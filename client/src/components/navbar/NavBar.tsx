import React from "react";
import candle from "../../media/candle-burning-flame.png";
import account from "../../media/account.png";
import shoppingbasket from "../../media/shopping-basket.png";

type Props = {
  name: string;
};

const NavBar = (props: Props) => {
  const styleWords =
    "block p-4 text-sm font-semibold text-gray-400 hover:bg-pink-50 hover:text-rose-300 hover:cursor-pointer rounded";
  const styleIcons = "object-contain w-10";

  return (
    <nav className="relative px-4 py-1 flex flex-wrap items-stretch bg-white justify-between drop-shadow-2xl">
      <div className="flex flex-row justify-between items-center w-full">
        <a
          href="/"
          className="inline-flex px-4 py-4 font-semibold hover:bg-pink-50 hover:text-rose-300 rounded"
        >
          <img src={candle} alt="logo" className={styleIcons} />
          <span className="self-end">GlowZo</span>
        </a>
        <ul className="inline-flex space-x-16">
          <li className={styleWords}>Discover</li>
          <li className={styleWords}>About</li>
          <li className={styleWords}>Contact us</li>
        </ul>
        <div className="inline-flex space-x-4">
          <img src={account} alt="account" className={styleIcons} />
          <img
            src={shoppingbasket}
            alt="shopping-basket"
            className={styleIcons}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
