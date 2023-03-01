import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-neutral-800 pt-20 px-48 self-end text-white flex justify-between flex-col">
      <div className="flex justify-around h-full border-t-2 border-white text-m p-10  ">
        <ul className="flex flex-col h-full justify-between ">
          <li className="font-sans underline underline-offset-4 ">
            Collection
          </li>
        </ul>
        <ul className="flex flex-col h-full justify-between font-sans">
          <li className="font-sans underline underline-offset-4 ">About us </li>
        </ul>
        <ul className="flex flex-col h-full justify-between font-sans">
          <li className="font-sans underline underline-offset-4 ">
            Contact us
          </li>
        </ul>
      </div>
      <p className="self-center mb-4">&#169; Tom Broad 2023</p>
    </div>
  );
};

export default Footer;
