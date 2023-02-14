import React from "react";
import { useLocation } from "react-router-dom";
import BasketElements from "../../components/basket/BasketElement";
import { BasketProduct } from "../../interfaces/basketProductInterface";

const ThankYouPage = () => {
  const location = useLocation();
  const productsOrdered = location.state.productsOrdered;
  const total = location.state.total;
  return (
    <>
      <h2 className="flex justify-center m-4 font-sans text-md">
        Thank you for your order request. One of our team will be in touch to
        discuss stock, shipping and payment.
      </h2>
      <div>
        <h1>Products Ordered:</h1>
        {productsOrdered.map((el: BasketProduct) => {
          return (
            <BasketElements basket={false} key={el.productId} product={el} />
          );
        })}
      </div>
      <p>Total cost: {total.toFixed(2)}</p>
    </>
  );
};

export default ThankYouPage;
