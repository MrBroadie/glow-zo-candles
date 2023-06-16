import React from "react";
import { BasketInterface } from "../../interfaces/basketProductInterface";

const Button = (props: BasketInterface) => {
  return (
    <button
      type={props.type}
      onClick={props.handleClickFunction}
      className={`${props.css} w-48 p-2 hover:bg-rose-400 rounded text-white bg-slate-300 hover:text-white  text-center`}
    >
      {props.text}
    </button>
  );
};

export default Button;
