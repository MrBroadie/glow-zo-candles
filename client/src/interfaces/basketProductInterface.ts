export interface BasketInterface {
  text: string;
  handleClickFunction: () => void;
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
