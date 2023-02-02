import React from "react";
import { removeItemFromBasket } from "../../app/basketSlice";
import { useAppDispatch } from "../../app/hooks";
import { BasketProduct } from "../../interfaces/basketProductInterface";
import bin from "../../media/bin.png";

type Props = {
  product: BasketProduct;
};

const BasketElements = (props: Props) => {
  const colour =
    props.product.colour &&
    props.product.colour[0].toUpperCase() +
      props.product.colour.substring(1).toLowerCase();

  const dispatch = useAppDispatch();
  const handleRemoveItem = () => {
    dispatch(removeItemFromBasket(props.product.productId));
  };
  return (
    <>
      <div>
        <img
          src={props.product.img}
          alt={props.product.colour}
          className="w-40 h-1/2 m-4 object-contain self-center"
        />
        <div className="bg-white w-full flex flex-col p-2 h-full justify-center">
          <p className="font-sans text-sm md:text-base ">
            {colour} {props.product.type}
          </p>
          <p className="font-sans text-sm md:text-base self-end">
            £{props.product.price}
          </p>
          <p className="font-sans text-sm md:text-base self-end">
            {props.product.qty}
          </p>
        </div>
        <img
          src={bin}
          alt="delete"
          className="w-10 hover:cursor-pointer"
          onClick={handleRemoveItem}
        />
      </div>
    </>
  );
};

export default BasketElements;
