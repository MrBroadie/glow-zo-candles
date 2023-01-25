import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  text: string;
  route: string;
  basket?: boolean;
};

const Button = (props: Props) => {
  const navigate = useNavigate();

  const handleAddToBasket = () => {
    console.log(props.basket);
    //Logic for useContext --> global basket state
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
