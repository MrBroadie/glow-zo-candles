export interface productsObject {
  name: string;
  products: productObject[];
}
export interface productObject {
  colour: string;
  img: string;
  scents: string[];
  price: number;
}
