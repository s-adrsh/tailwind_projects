import React from "react";
import Links from "./Links";

function Mobile(props) {
  const mobTitles = [
    { section: "hero", name: "Home" },
    ...props.titles,
    { section: "footer", name: "Legal" },
  ];

  return (
    <section
      id="mobile-menu"
      className="absolute top-0 bg-black w-full text-5xl hidden flex-col justify-content-center origin-top animate-open-menu  "
    >
      <button className="text-8xl self-end px-6">&times;</button>
      <nav
        className="flex flex-col min-h-screen items-center py-8 gap-6"
        aria-label="mobile"
      >
        {mobTitles.map((title) => (
          <Links title={title} />
        ))}
      </nav>
    </section>
  );
}

export default Mobile;
