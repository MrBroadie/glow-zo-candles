import React from "react";
import LandingImage from "../components/landingPage/LandingImage";

type Props = {
  name: string;
};

const LandingPage = (props: Props) => {
  return (
    <>
      <LandingImage />
    </>
  );
};

export default LandingPage;
