import React from "react";
import { useLocation } from "react-router-dom";
import BasketElements from "../../components/basket/BasketElement";
import { BasketProduct } from "../../interfaces/basketProductInterface";

const ThankYouPage = () => {
  const location = useLocation();
  const productsOrdered = location.state.productsOrdered;
  return (
    <>
      <div>
        <h1>Products Ordered:</h1>
        {productsOrdered.map((el: BasketProduct) => {
          return <BasketElements key={el.productId} product={el} />;
        })}
      </div>
    </>
  );
};

export default ThankYouPage;
