import React from "react";
import blueAndWhiteCandle from "../../media/blue_and_white_jars_bed.jpeg";
import Button from "../button/Button";

const SoyWax = () => {
  return (
    <div className="flex w-full items-center bg-slate-50 px-48 py-12 h-screen/66">
      <div className="w-full flex flex-col h-full justify-around mx-20 px-4 py-16">
        <div className="flex flex-col justify-around h-2/6">
          <h1 className="font-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl w-full">
            Clean and <br />
            fragrant soy wax
          </h1>
          <p className="font-sans text-sm md:text-base text-rose-300">
            Made for your home and your wellness
          </p>
        </div>
        <ul className="font-sans text-sm md:text-base text-slate-500">
          <li>✓ Eco-sustainable:All recyclable materials, 0% CO2 emissions</li>
          <li>
            {" "}
            <br />✓ Hyphoallergenic: 100% natural, vegan friendly ingredients{" "}
          </li>
          <li>
            {" "}
            <br />✓ Handmade: All candles are craftly made with love.
          </li>
        </ul>
        <Button text="Learn more" route={"/about"} />
      </div>
      <div className="w-full flex justify-center">
        <img
          src={blueAndWhiteCandle}
          alt="Blue and white candle"
          className="w-80 mx-24 drop-shadow-lg rounded"
        />
      </div>
    </div>
  );
};

export default SoyWax;
