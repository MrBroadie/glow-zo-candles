import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { selectBasket } from "../../app/basketSlice";
import { useAppSelector } from "../../app/hooks";
import BasketElements from "../../components/basket/BasketElement";
import Button from "../../components/button/Button";

const BasketPage = () => {
  const basket = useAppSelector(selectBasket);
  console.log(basket);
  const navigate = useNavigate();

  const handleNavigation = () => {
    return navigate("/collection");
  };
  const handleSendToOrder = () => {
    navigate("/orderform");
  };

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {basket.length ? (
        basket.map((el) => <BasketElements key={el.productId} product={el} />)
      ) : (
        <p>Basket is empty please add some products</p>
      )}
      <Button text="Proceed To Order" handleClickFunction={handleSendToOrder} />
      <Button text="Continue Shopping" handleClickFunction={handleNavigation} />
    </>
  );
};

export default BasketPage;
