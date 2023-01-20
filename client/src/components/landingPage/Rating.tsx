import React from "react";
import goldStar from "../../media/goldStar.png";
import whiteStar from "../../media/whiteStar.png";

type Props = {
  rating: number;
};

const Rating = (props: Props) => {
  const howManyStars = Array(5)
    .fill(null)
    .map((value, index) => (
      <img
        key={index}
        src={index < props.rating ? goldStar : whiteStar}
        alt={props.rating.toString()}
        className="w-6"
      />
    ));

  return <>{howManyStars}</>;
};

export default Rating;
