import React from "react";
import MostPopularCandles from "../../components/landingPage/MostPopularCandles";
import { collection } from "../../components/products/collection";

const Collection = () => {
  return (
    <>
      {collection.map((candleType) => {
        return (
          <div className={`${candleType.color}`} key={candleType.name}>
            <h1 className="w-full flex justify-center items-center h-12 text-lg lg:text-xl underline text-slate-600 bg-white">
              {candleType.name}
            </h1>
            <div className="grid gap-2 w-full hide-scrollbar grid-flow-col overflow-x-auto">
              {candleType.products.map((colour) => {
                return (
                  <MostPopularCandles productObject={colour} key={colour.id} />
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Collection;
