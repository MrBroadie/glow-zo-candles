import React from "react";

type Props = {
  name: string;
};

const LandingPage = (props: Props) => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Welcome!</h1>
      <p>{props.name}</p>
    </>
  );
};

export default LandingPage;
