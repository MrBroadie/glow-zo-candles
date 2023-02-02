import React from "react";
import { useNavigate } from "react-router-dom";
import shoppingbasket from "../../media/shopping-basket.png";

type Props = {
  styleIcons: string;
};

const BasketButton = (props: Props) => {
  const navigate = useNavigate();
  return (
    <img
      src={shoppingbasket}
      alt="shopping-basket"
      className={props.styleIcons}
      onClick={() => navigate("/basket")}
    />
  );
};

export default BasketButton;
