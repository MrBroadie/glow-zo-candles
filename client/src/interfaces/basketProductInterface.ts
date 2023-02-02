import { productObject } from "./productsInterface";

export interface BasketInterface {
  text: string;
  route: string;
  basket?: boolean;
  productObject?: productObject;
  qty?: number;
  price?: number;
}

export interface BasketProduct {
  productId: string | undefined;
  colour: string | undefined;
  img: string | undefined;
  price: number | undefined;
  qty: number | undefined;
  scent: string;
}
