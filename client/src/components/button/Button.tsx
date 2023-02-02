import React from "react";
import { BasketInterface } from "../../interfaces/basketProductInterface";

const Button = (props: BasketInterface) => {
  return (
    <button
      onClick={props.handleClickFunction}
      className="font-sans p-4 bg-rose-300 rounded text-white hover:bg-rose-50 hover:text-rose-300 border-2 border-white hover:border-rose-300 text-center w-1/4"
    >
      {props.text}
    </button>
  );
};

export default Button;
