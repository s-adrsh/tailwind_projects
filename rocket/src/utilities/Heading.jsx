import React from "react";

function Heading(props) {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
        {props.value}
      </h2>
    </div>
  );
}

export default Heading;
