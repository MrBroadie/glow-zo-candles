import React from "react";
import { productsObject } from "../../interfaces/productsInterface";
import LandingProduct from "./LandingProduct";

type Props = {
  products: productsObject[];
};

const LandingProducts = ({ products }: Props) => {
  return (
    <div className="bg-white relative p-4 flex flex-col justfy-center items-center">
      <div className="flex flex-col items-center p-6">
        <h2 className="font-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl ">
          Most popular
        </h2>
        <p className="font-sans text-sm md:text-base text-slate-500">
          Order for you or for your loved ones
        </p>
      </div>
      <div className="flex w-5/6 h-full p-4 text-white overflow-y-scroll">
        {/* add scrollable div */}
        {products.map((product) => {
          return <LandingProduct product={product} key={product.name} />;
        })}
      </div>
      <button className="font-sans p-4 m-4 bg-rose-300 rounded text-white hover:bg-pink-50 hover:text-rose-300 border-2 border-white hover:border-rose-300 text-center">
        See all products
      </button>
    </div>
  );
};

export default LandingProducts;
