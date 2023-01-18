import React from "react";
import candleJar from "../media/jars_many.jpeg";
import candle from "../media/candle-burning-flame.png";

type Props = {
  name: string;
};

const LandingPage = (props: Props) => {
  return (
    <>
      <div className="bg-gray-500 w-full">
        <img
          src={candleJar}
          alt="candle-jar-background"
          className="w-full h-[calc(100vh-80px)]"
        />
        <div className="bg-white/90 w-1/2 h-1/2 absolute top-1/4 left-1/4 rounded-lg p-4 flex flex-col items-center	justify-around">
          <div className="flex flex-col items-center">
            <img src={candle} alt="logo" className="w-10 m-4" />
            <h1 className="m-4 font-serif">The independent candle company</h1>
            <p className="font-serif">
              All handmade with natural soy wax. GlowZo is a companion for all
              memories or something
            </p>
          </div>
          <button className="font-serif">Discover our collection</button>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
