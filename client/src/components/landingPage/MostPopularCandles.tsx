import React from "react";
import { useNavigate } from "react-router-dom";
import { productObject } from "../../interfaces/productsInterface";

type Props = {
  productObject: productObject;
};

const MostPopularCandles = (props: Props) => {
  const navigate = useNavigate();
  const colour =
    props.productObject.colour[0].toUpperCase() +
    props.productObject.colour.substring(1).toLowerCase();

  return (
    <button
      onClick={() =>
        navigate(`/product/${props.productObject.id}`, {
          state: { productObject: props.productObject },
        })
      }
      className="bg-slate-50 m-2 flex flex-col shadow-md lg:w-72 w-52 text-slate-500 hover:text-rose-300 hover:cursor-pointer"
    >
      <img
        src={props.productObject.img}
        alt={props.productObject.colour}
        className="w-40 h-1/2 m-4 object-contain self-center"
      />
      <div className="bg-white w-full flex flex-col p-2 h-full justify-center">
        <p className="font-sans text-sm md:text-base ">
          {colour} {props.productObject.type}
        </p>
        <p className="font-sans text-sm md:text-base self-end">
          £{props.productObject.price}
        </p>
      </div>
    </button>
  );
};

export default MostPopularCandles;
