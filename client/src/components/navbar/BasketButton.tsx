import React from "react";
import shoppingbasket from "../../media/shopping-basket.png";

type Props = {
  styleIcons: string;
};

const BasketButton = (props: Props) => {
  return (
    <img
      src={shoppingbasket}
      alt="shopping-basket"
      className={props.styleIcons}
    />
  );
};

export default BasketButton;
