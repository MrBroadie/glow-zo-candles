import React from "react";
import { productsObject } from "../../interfaces/productsInterface";
import MostPopularCandles from "./MostPopularCandles";

type Props = {
  product: productsObject;
};

const LandingProduct = ({ product }: Props) => {
  return (
    <div className="flex flex-row ">
      {product.products.map((productObject) => {
        return (
          <MostPopularCandles
            productObject={productObject}
            key={productObject.colour}
          />
        );
      })}
    </div>
  );
};

export default LandingProduct;
