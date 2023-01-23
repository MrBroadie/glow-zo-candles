import React from "react";
import LandingPage from "./defaultPages/LandingPage";
import ErrorPage from "./defaultPages/ErrorPage";
import ThankYouPage from "./authenticatedPages/ThankYouPage";
import ProductPage from "./defaultPages/ProductPage";
import ContactUsPage from "./defaultPages/ContactUsPage";
import AboutPage from "./defaultPages/AboutPage";
import BasketPage from "./defaultPages/BasketPage";

export const defaultPages = [
  {
    title: "Landing",
    path: "/",
    element: <LandingPage />,
    showDefault: true,
  },
  {
    title: "Products",
    path: "/products",
    element: <ProductPage />,
    showDefault: true,
  },
  {
    title: "Contact",
    path: "/contact",
    element: <ContactUsPage />,
    showDefault: true,
  },
  {
    title: "About",
    path: "/about",
    element: <AboutPage />,
    showDefault: true,
  },
  {
    title: "Basket",
    path: "/basket",
    element: <BasketPage />,
    showDefault: true,
  },
];

export const authPages = [
  {
    title: "ThankYou",
    path: "/thankyou/:orderId",
    element: <ThankYouPage />,
    showDefault: false,
  },
];

const errorRerouterAuth = {
  title: "404 Rerouter",
  path: "/*",
  element: <ErrorPage />,
  showDefault: false,
};

const errorRerouterDefault = {
  title: "404 Rerouter",
  path: "/*",
  element: <ErrorPage />,
  showDefault: true,
};

const pagesData = [
  ...defaultPages,
  ...authPages,
  errorRerouterAuth,
  errorRerouterDefault,
];

export default pagesData;
