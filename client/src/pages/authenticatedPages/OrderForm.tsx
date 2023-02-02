import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { emptyBasket, selectBasket } from "../../app/basketSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import BasketElements from "../../components/basket/BasketElement";
import Button from "../../components/button/Button";

const OrderForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const basket = useAppSelector(selectBasket);
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleOrder = () => {
    //TODO
    console.log("send email to Zoe");
    navigate("/thankyou", {
      state: { productsOrdered: basket },
    });
    dispatch(emptyBasket());
  };

  return (
    <>
      <h2>
        Due to this being a local business, all orders are submitted as an email
        address request. Please fill out the following form and one of our team
        will be in touch to discuss stock, shipping and payment.
      </h2>
      <form>
        {/* add auth0 email and username here */}
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <label>
          Address:
          <input type="text" name="address" />
        </label>
        <label>
          Postcode:
          <input type="text" name="postcode" />
        </label>
        <div>
          <h2>Order Summary:</h2>
          {basket.map((el) => (
            <BasketElements key={el.productId} product={el} />
          ))}
          <Button
            text="Submit Order Request"
            handleClickFunction={handleOrder}
          />
        </div>
      </form>
    </>
  );
};

export default OrderForm;
