import React from "react";
import { useNavigate } from "react-router-dom";
import blueAndWhiteCandle from "../../media/blue_and_white_jars_bed.jpeg";
import Button from "../button/Button";

const SoyWax = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    return navigate("/about");
  };
  return (
    <div className="flex flex-col w-full bg-slate-200 lg:h-screen/66 h-screen/50 justify-center lg:justify-around ">
      <div className="flex ">
        <div className="w-full flex flex-col h-full justify-around lg:px-72 md:px-24 px-12">
          <div className="flex flex-col justify-around lg:h-60 h-full">
            <h1 className="font-sans text-xl lg:text-2xl md:text-xl w-full">
              Clean and <br />
              fragrant soy wax
            </h1>
            <p className="font-sans text-sm md:text-base text-rose-300">
              Made for your home and your wellness
            </p>
            <ul className="font-sans text-sm md:text-base text-slate-500">
              <li>
                ✓ Eco-sustainable:All recyclable materials, 0% CO2 emissions
              </li>
              <li>
                {" "}
                <br />✓ Hyphoallergenic: 100% natural, vegan friendly
                ingredients{" "}
              </li>
              <li>
                {" "}
                <br />✓ Handmade: All candles are craftly made with love.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <img
            src={blueAndWhiteCandle}
            alt="Blue and white candle"
            className="md:w-80 w-52 drop-shadow-lg rounded"
          />
        </div>
      </div>
      <Button
        css="font-sans self-center mt-16"
        text="Learn more"
        handleClickFunction={handleNavigation}
      />
    </div>
  );
};

export default SoyWax;
