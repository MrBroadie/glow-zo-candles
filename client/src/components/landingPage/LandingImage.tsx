import React from "react";
import candleJar from "../../media/backgroundImg.webp";
import candle from "../../media/candle-burning-flame.png";
import Button from "../button/Button";

const LandingImage = () => {
  return (
    <div className="w-full">
      <img
        src={candleJar}
        alt="candle-jar-background"
        className="w-full h-[calc(100vh-80px)] object-cover"
      />
      <div className="bg-white/90 w-1/2 h-1/2 absolute top-1/4 left-1/4 rounded-lg p-4 flex flex-col items-center	justify-around z-0">
        <div className="flex flex-col items-center">
          <img src={candle} alt="logo" className="w-10 m-4" />
          <h1 className="m-4 font-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            The independent candle
          </h1>
          <p className="font-sans text-sm md:text-base text-slate-500">
            All handmade with natural soy wax. GlowZo is the perfect companion
            for your home
          </p>
        </div>
        <Button text="Discover our collection" route={"/collection"} />
      </div>
    </div>
  );
};

export default LandingImage;
