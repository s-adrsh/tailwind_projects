import React from "react";
import Mobile from "./Mobile";
import Links from "./Links";

function Header() {
  const titles = [
    { section: "rockets", name: "Our Rockets" },
    {
      section: "testimonials",
      name: "Testimonials",
    },
    {
      section: "contact",
      name: "Contact Us",
    },
  ];

  return (
    <header className="bg-teal-700 text-white sticky top-0 z-10 ">
      <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-medium">
          <a href="#hero">🚀 ACME Rockets</a>
        </h1>
        <div>
          <button
            id="hamburger-button"
            className="text-3xl md:hidden cursor-pointer"
          >
            &#9776;
          </button>

          <nav className="hidden md:block space-x-8 text-xl " aria-label="main">
            {titles.map((title) => (
              <Links title={title} />
            ))}
          </nav>
        </div>
      </section>
      <Mobile titles={titles} />
    </header>
  );
}

export default Header;
