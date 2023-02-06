import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  addToBasket,
  selectBasket,
  updateItemInBasket,
} from "../../app/basketSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const productObject = location.state.productObject;

  const price = productObject.price * qty;

  const colour =
    productObject.colour[0].toUpperCase() +
    productObject.colour.substring(1).toLowerCase();
  const dispatch = useAppDispatch();
  const basket = useAppSelector(selectBasket);
  const handleAddToBasket = () => {
    const basketObject = {
      productId: productObject.id,
      colour: productObject.colour,
      img: productObject.img,
      type: productObject.type,
      price: price,
      qty: qty,
      //TODO - get value from the form
      scent: "vanilla",
    };

    const checkBaksetItem = () => {
      for (let i = 0; i < basket.length; i++) {
        if (basket[i].productId === basketObject.productId) {
          // && basket[i].scent === basketObject.productId
          dispatch(
            updateItemInBasket({
              productId: basketObject.productId,
              qty: qty,
              price: productObject.price,
            })
          );
          return true;
        }
      }
      return false;
    };

    if (basket.length) {
      if (!checkBaksetItem()) dispatch(addToBasket(basketObject));
    } else dispatch(addToBasket(basketObject));

    navigate("/basket");
  };
  return (
    <div className="flex flex-col h-screen/66 bg-rose-100">
      <div className="flex h-4/6 m-4 justify-around">
        <div className="w-full flex flex-col items-center mx-4">
          <img
            src={productObject.img}
            alt={productObject.id}
            className="h-full object-contain w-full bg-slate-50 py-10 shadow-custom rounded"
          />
        </div>
        <div className=" w-1/2 h-full flex flex-col justify-between bg-white p-2 rounded-l shadow-custom">
          <p className=" font-sans text-sm md:text-xl underline">
            {colour} {productObject.type}
          </p>
          <div className="flex">
            <p>Scent: </p>
            <select className="w-full text-center">
              {productObject.scents.map((scent: string) => {
                return (
                  <option key={scent} value={scent}>
                    {scent}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex w-full justify-between items-center">
            <p>Quantity:</p>
            <div className="flex border-2 p-2 border-rose-100 w-1/4">
              <button
                className="w-full"
                onClick={() => qty > 1 && setQty(qty - 1)}
              >
                -
              </button>
              <p>{qty}</p>
              <button className="w-full" onClick={() => setQty(qty + 1)}>
                +
              </button>
            </div>
            <p className="font-sans text-sm md:text-xl text-rose-300">
              £{price.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="flex w-1/2 h-full items-end p-2 justify-center bg-white rounded-r shadow-custom">
          <Button
            text="Add to basket"
            handleClickFunction={handleAddToBasket}
          />
        </div>
      </div>
      <div className="flex justify-center h-full w-full items-center">
        <p className=" font-sans text-sm md:text-lg">
          All handmade with natural soy wax. GlowZo is the perfect companion for
          your home
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
