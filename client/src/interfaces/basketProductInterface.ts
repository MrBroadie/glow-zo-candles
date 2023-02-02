export interface BasketInterface {
  text: string;
  handleClickFunction: () => void;
}

export interface BasketProduct {
  productId: string | undefined;
  colour: string | undefined;
  img: string | undefined;
  type: string | undefined;
  price: number | undefined;
  qty: number | undefined;
  scent: string;
}
