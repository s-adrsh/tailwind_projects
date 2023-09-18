import React from "react";

function Cardlist(props) {
  return (
    <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black  py-6 px-2 rounded-3xl shadow-xl">
      <img src={props.data.src} alt={props.data.alt} className="w-1/2 mb-6" />
      <h3 className="text-3xl text-center text-slate-900 dark:text-white ">
        {props.data.alt}
      </h3>

      <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">
        {props.data.price}
      </p>

      <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">
        {" "}
        {props.data.content}
      </p>
    </li>
  );
}

export default Cardlist;
