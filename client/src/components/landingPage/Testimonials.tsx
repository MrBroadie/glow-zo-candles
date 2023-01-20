import React from "react";
import { testimonialObject } from "../../interfaces/testimonialObject";
import Rating from "./Rating";

type Props = {
  testimonials: testimonialObject[];
};

const Testimonials = (props: Props) => {
  return (
    <div className="bg-rose-50 relative p-4 flex flex-col justfy-center items-center">
      <div className="flex flex-col items-center p-6">
        <h2 className="font-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl ">
          Testimonials
        </h2>
        <p className="font-sans text-sm md:text-base text-slate-500">
          Some quotes from our happy customers
        </p>
      </div>
      <div className="w-full flex justify-center h-screen/50 items-center">
        {props.testimonials.map((testimonial) => {
          return (
            <div
              key={testimonial.name}
              className="flex flex-col items-center justify-around p-6 bg-white rounded-lg shadow-lg w-1/4 m-4 h-4/6"
            >
              <img
                src={testimonial.img}
                alt="image of person"
                className="w-20 rounded-full"
              />
              <div className="flex justify-between w-2/6">
                <Rating rating={testimonial.rating} />
              </div>
              <p className="font-sans text-sm md:text-lg text-black">
                &quot;{testimonial.review}&quot;
              </p>
              <p className="font-sans text-sm md:text-base text-slate-500">
                {testimonial.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
