import React from "react";
import { productsObject } from "../../interfaces/productsInterface";

type Props = {
  product: productsObject;
};

const LandingProduct = ({ product }: Props) => {
  const listItem =
    "bg-rose-50 text-rose-300 w-full h-full h rounded-lg flex flex-col items-center justify-around p-4 m-2 hover:border-2 ";

  return (
    <button className={listItem}>
      <img src={product.displayImg} className="w-full h-5/6 object-contain	" />
      <p>{product.name}</p>
    </button>
  );
};

export default LandingProduct;
