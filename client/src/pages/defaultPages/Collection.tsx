import React from "react";
import MostPopularCandles from "../../components/landingPage/MostPopularCandles";
import { collection } from "../../components/products/collection";

const Collection = () => {
  return (
    <>
      {collection.map((candleType) => {
        return (
          <div key={candleType.name}>
            <h1>{candleType.name}</h1>
            {candleType.products.map((colour) => {
              return (
                <MostPopularCandles productObject={colour} key={colour.id} />
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default Collection;
