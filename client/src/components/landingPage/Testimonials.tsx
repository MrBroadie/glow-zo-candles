import React from "react";
import { testimonialObject } from "../../interfaces/testimonialObject";
import Rating from "./Rating";

type Props = {
  testimonials: testimonialObject[];
};

const Testimonials = (props: Props) => {
  return (
    <div className="bg-rose-50 p-4 lg:h-screen/66  h-screen/50">
      <div className="flex flex-col items-center p-6">
        <h2 className="font-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl ">
          Testimonials
        </h2>
        <p className="font-sans text-sm md:text-base text-slate-500">
          Some quotes from our happy customers
        </p>
      </div>
      <div className="w-full flex justify-center h-3/4 items-center">
        <div
          className={` hide-scrollbar grid grid-flow-col overflow-x-auto w-full`}
        >
          {props.testimonials.map((testimonial) => {
            return (
              <div
                key={testimonial.name}
                className="flex flex-col items-center justify-around p-6 w-52 lg:w-80 bg-white rounded-lg shadow-lg m-4"
              >
                <img
                  src={testimonial.img}
                  alt="image of person"
                  className="w-20 rounded-full hidden lg:flex"
                />
                <p className="font-sans text-sm lg:text-base text-slate-500 p-2">
                  {testimonial.name}
                </p>
                <p className="font-sans text-center text-sm lg:text-base text-black p-2">
                  &quot;{testimonial.review}&quot;
                </p>
                <div className="flex justify-between p-2">
                  <Rating rating={testimonial.rating} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
