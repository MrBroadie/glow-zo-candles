export interface BasketInterface {
  text: string;
  handleClickFunction: () => void;
  type?: "submit" | "reset" | "button" | undefined;
}

export interface BasketProduct {
  productId: string;
  colour: string;
  img: string;
  type: string;
  price: number;
  qty: number;
  scent: string;
}
