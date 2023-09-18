import React from "react";

function Figtest(props) {
  return (
    <figcaption className="italic text-xl sm:text-2xl text-right mt-4 text-slate-500 dark:text-slate-400">
      &#8212; {props.name}
    </figcaption>
  );
}

export default Figtest;
