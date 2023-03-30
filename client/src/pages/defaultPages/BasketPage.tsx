import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { selectBasket } from "../../app/basketSlice";
import { selectCost } from "../../app/costSlice";
import { useAppSelector } from "../../app/hooks";
import { selectUser } from "../../app/userSlice";
import BasketElements from "../../components/basket/BasketElement";
import Button from "../../components/button/Button";

const BasketPage = () => {
  const { loginWithPopup } = useAuth0();
  const basket = useAppSelector(selectBasket);
  const totalCost = useAppSelector(selectCost);
  const authUser = useAppSelector(selectUser);
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
      <div className="flex flex-col items-center">
        {basket.length ? (
          basket.map((el) => (
            <BasketElements
              basket={true}
              key={el.productId + el.scent}
              product={el}
            />
          ))
        ) : (
          <p className="font-sans mt-4">
            Basket is empty please add some products
          </p>
        )}
        <div
          className="flex
        w-full justify-center my-4"
        >
          {basket.length > 0 && (
            <>
              <p>Total cost: {totalCost.toFixed(2)}</p>
              <Button
                text="Continue to review order"
                handleClickFunction={
                  authUser.sub.length ? handleSendToOrder : loginWithPopup
                }
              />
            </>
          )}
          <Button
            text="Continue Shopping"
            handleClickFunction={handleNavigation}
          />
        </div>
      </div>
    </>
  );
};

export default BasketPage;
