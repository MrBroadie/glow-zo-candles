import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { emptyBasket, selectBasket } from "../../app/basketSlice";
import { resetCost, selectCost } from "../../app/costSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import BasketElements from "../../components/basket/BasketElement";

interface FormInterface {
  [key: string]: string;
}

const OrderForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const basket = useAppSelector(selectBasket);
  const totalCost = useAppSelector(selectCost);
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formObj: FormInterface = {};

    for (const [key, value] of Array.from(formData.entries())) {
      formObj[key] = value.toString();
    }
    //Email formObj
    console.log("send email to Zoe", formObj);
    navigate("/thankyou", {
      state: {
        productsOrdered: basket,
        total: totalCost,
      },
    });
    dispatch(emptyBasket());
    dispatch(resetCost());
  };

  return (
    <>
      <h2 className="flex justify-center m-4 font-sans text-md">
        Due to this being a local business, all orders are submitted as an email
        address request. Please fill out the following form and one of our team
        will be in touch to discuss stock, shipping and payment.
      </h2>
      <form onSubmit={handleOrder}>
        <div className="flex flex-col items-center bg-red-100 p-4">
          {/* add auth0 email and username here */}
          <label className="flex-col flex">
            Name:
            <input type="text" name="name" placeholder="Name" required />
          </label>
          <label className="flex-col flex">
            Email:
            <input type="text" name="email" placeholder="Auth0 email" />
          </label>
          <label className="flex-col flex">
            Address:
            <input type="text" name="address" required />
          </label>
          <label className="flex-col flex">
            Postcode:
            <input type="text" name="postcode" required />
          </label>
        </div>
        <div>
          <h2 className="flex mx-4 font-sans text-md mt-4">Order Summary:</h2>
          {basket.map((el) => (
            <BasketElements basket={false} key={el.productId} product={el} />
          ))}
          {totalCost > 0 ? <p>Total cost: {totalCost.toFixed(2)}</p> : <></>}
          <div className="flex justify-center my-4">
            <button
              type="submit"
              className="font-sans p-4 bg-rose-300 rounded text-white hover:bg-rose-50 hover:text-rose-300 border-2 border-white hover:border-rose-300 text-center w-1/4"
            >
              Submit Order Request
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default OrderForm;
