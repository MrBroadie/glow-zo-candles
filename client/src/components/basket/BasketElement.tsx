import React, { useState } from "react";
import {
  removeItemFromBasket,
  updateItemInBasket,
} from "../../app/basketSlice";
import { decrementCost, incrementCost } from "../../app/costSlice";
import { useAppDispatch } from "../../app/hooks";
import { BasketProduct } from "../../interfaces/basketProductInterface";
import bin from "../../media/bin.png";

type Props = {
  product: BasketProduct;
  basket: boolean;
};

const BasketElements = (props: Props) => {
  const [qty, setQty] = useState(props.product.qty);

  const colour =
    props.product.colour &&
    props.product.colour[0].toUpperCase() +
      props.product.colour.substring(1).toLowerCase();

  const price = props.product.price / qty;

  const dispatch = useAppDispatch();
  const handleRemoveItem = () => {
    dispatch(
      removeItemFromBasket({
        productId: props.product.productId,
        scent: props.product.scent,
      })
    );
    dispatch(decrementCost(props.product.price));
  };
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="flex w-full h-full bg-slate-100 justify-around items-center mt-4 mx-4">
          <img
            src={props.product.img}
            alt={props.product.colour}
            className="w-40 m-4 object-contain self-center"
          />
          <div className="bg-white flex p-2 justify-around items-center w-1/2">
            <p className="font-sans text-sm md:text-base ">
              {colour} {props.product.type}
            </p>
            <p className="font-sans text-sm md:text-base">
              £{props.product.price.toFixed(2)}
            </p>
            <p className="font-sans text-sm md:text-base">
              {props.product.scent}
            </p>

            <div className="flex w-1/4 justify-center">
              {props.basket && (
                <button
                  className="w-full bg-red-100 mx-2"
                  onClick={() => {
                    qty > 1 && setQty(qty - 1);
                    qty > 1 &&
                      dispatch(
                        updateItemInBasket({
                          productId: props.product.productId,
                          scent: props.product.scent,
                          qty: -1,
                          price: price,
                        })
                      );
                    qty > 1 && dispatch(decrementCost(price));
                  }}
                >
                  -
                </button>
              )}
              <p className="font-sans text-sm md:text-base">{qty}</p>
              {props.basket && (
                <button
                  className="w-full bg-red-100 mx-2"
                  onClick={() => {
                    setQty(qty + 1);
                    dispatch(
                      updateItemInBasket({
                        productId: props.product.productId,
                        scent: props.product.scent,
                        qty: 1,
                        price: price,
                      })
                    );
                    dispatch(incrementCost(price));
                  }}
                >
                  +
                </button>
              )}
            </div>
          </div>
          {props.basket ? (
            <div className="flex justify-center p-2">
              <img
                src={bin}
                alt="delete"
                className="w-10 hover:cursor-pointer object-contain "
                onClick={handleRemoveItem}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default BasketElements;
