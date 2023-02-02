import React from "react";
import { useAppSelector } from "../../hooks";

const BasketPage = () => {
  const basket = useAppSelector((state) => state.basket.value);
  return (
    <>
      <div>BasketPage</div>
      {console.log(basket)}
    </>
  );
};

export default BasketPage;
