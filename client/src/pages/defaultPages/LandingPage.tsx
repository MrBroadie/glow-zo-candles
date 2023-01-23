import React from "react";
import LandingImage from "../../components/landingPage/LandingImage";
import LandingProducts from "../../components/landingPage/LandingProducts";
import SoyWax from "../../components/landingPage/SoyWax";
import Testimonials from "../../components/landingPage/Testimonials";
import { products } from "../../components/products/mostPopular";
import { testimonials } from "../../components/reviews/testimonials";

const LandingPage = () => {
  return (
    <>
      <LandingImage />
      <LandingProducts products={products} />
      <SoyWax />
      <Testimonials testimonials={testimonials} />
    </>
  );
};

export default LandingPage;
