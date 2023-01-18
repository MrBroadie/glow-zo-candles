import React from "react";
import LandingImage from "../components/landingPage/LandingImage";
import LandingProducts from "../components/landingPage/LandingProducts";
import { products } from "../components/products/products";

const LandingPage = () => {
  return (
    <>
      <LandingImage />
      <LandingProducts products={products} />
    </>
  );
};

export default LandingPage;
