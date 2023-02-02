import React from "react";
import { useNavigate } from "react-router-dom";
import { productsObject } from "../../interfaces/productsInterface";
import Button from "../button/Button";
import LandingProduct from "./LandingProduct";

type Props = {
  products: productsObject[];
};

const LandingProducts = ({ products }: Props) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    return navigate("/collection");
  };
  return (
    <div className="bg-white p-4 flex flex-col justfy-center items-center">
      <div className="flex flex-col items-center p-6">
        <h2 className="font-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl ">
          Most popular
        </h2>
        <p className="font-sans text-sm md:text-base text-slate-500">
          Order for you or for your loved ones
        </p>
      </div>
      <div className="flex w-5/6 h-full p-4">
        {/* add scrollable div */}
        {products.map((product) => {
          return <LandingProduct product={product} key={product.name} />;
        })}
      </div>
      <Button text="View all" handleClickFunction={handleNavigation} />
    </div>
  );
};

export default LandingProducts;
