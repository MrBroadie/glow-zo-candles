import React from "react";
import { useNavigate } from "react-router-dom";
import { addToBasket } from "../basket/basketSlice";
import { BasketInterface } from "../../interfaces/basketProductInterface";
import { useAppSelector, useAppDispatch } from "../../hooks";

const Button = (props: BasketInterface) => {
  const basket = useAppSelector((state) => state.basket.value);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleAddToBasket = () => {
    const basketObject = {
      productId: props.productObject?.id,
      colour: props.productObject?.colour,
      img: props.productObject?.img,
      price: props.price,
      qty: props.qty,
      scent: "vanilla",
    };

    dispatch(addToBasket([...basket, basketObject]));
  };

  return (
    <button
      onClick={() => {
        props.basket && handleAddToBasket();
        navigate(props.route);
      }}
      className="font-sans p-4 bg-rose-300 rounded text-white hover:bg-rose-50 hover:text-rose-300 border-2 border-white hover:border-rose-300 text-center w-1/4"
    >
      {props.text}
    </button>
  );
};

export default Button;
