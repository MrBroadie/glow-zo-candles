import React from "react";
import { productsObject } from "../../interfaces/productsInterface";
import LandingProduct from "./LandingProduct";

type Props = {
  products: productsObject[];
};

const LandingProducts = ({ products }: Props) => {
  return (
    <div className="w-full h-screen/40 lg:h-screen/66 bg-white relative p-4">
      <h2 className="font-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
        Products
      </h2>
      <p className="font-sans text-sm md:text-base text-center text-slate-400">
        Order for you or for your loved ones
      </p>
      <ul className="static rounded-lg p-4 sm:flex flex-row items-end justify-around h-full">
        {products.map((product) => {
          return <LandingProduct product={product} key={product.name} />;
        })}
      </ul>
    </div>
  );
};

export default LandingProducts;
