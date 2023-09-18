import React from "react";

function Paratest(props) {
  return (
    <p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2  after:content-['\201D'] after:font-serif after:absolute after:bottom after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2  ">
      {props.testimonial}
    </p>
  );
}

export default Paratest;
