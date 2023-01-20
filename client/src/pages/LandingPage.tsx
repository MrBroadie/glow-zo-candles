import React from "react";
import LandingImage from "../components/landingPage/LandingImage";
import LandingProducts from "../components/landingPage/LandingProducts";
import SoyWax from "../components/landingPage/SoyWax";
import { products } from "../components/products/products";

const LandingPage = () => {
  return (
    <>
      <LandingImage />
      <LandingProducts products={products} />
      <SoyWax />
    </>
  );
};

export default LandingPage;
