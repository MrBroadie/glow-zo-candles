export interface productsObject {
  name: string;
  products: productObject[];
}
export interface productObject {
  type: string;
  id: string;
  colour: string;
  img: string;
  scents: string[];
  price: number;
}
