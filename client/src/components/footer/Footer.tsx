import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-neutral-800 h-screen/40 pt-20 px-48">
      <div className="flex text-white justify-around h-full border-t-2 border-white text-m p-10  ">
        <ul className="flex flex-col h-full justify-between ">
          <li className="font-sans underline underline-offset-4 ">
            Collection
          </li>
          <li>How it works</li>
          <li>Testimonials</li>
          <li>Careers</li>
        </ul>
        <ul className="flex flex-col h-full justify-between font-sans">
          <li className="font-sans underline underline-offset-4 ">About us </li>
          <li>How it works</li>
          <li>Testimonials</li>
          <li>Careers</li>
        </ul>
        <ul className="flex flex-col h-full justify-between font-sans">
          <li className="font-sans underline underline-offset-4 ">
            Contact us
          </li>
          <li>How it works</li>
          <li>Testimonials</li>
          <li>Careers</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
