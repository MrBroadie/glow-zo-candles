import React from "react";
import { productsObject } from "../../interfaces/productsInterface";
import MostPopularCandles from "./MostPopularCandles";

type Props = {
  product: productsObject;
};

const LandingProduct = ({ product }: Props) => {
  return (
    <div className="h-full w-full ">
      <div className="grid grid-cols-4 justify-items-center h-full">
        {product.products.map((productObject) => {
          return (
            <MostPopularCandles
              name={product.name}
              productObject={productObject}
              key={productObject.colour}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LandingProduct;
