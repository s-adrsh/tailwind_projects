import React from "react";
import Heading from "../../utilities/Heading";
import HLine from "../../utilities/HLine";
import Card from "./Card";

function Rockets() {
  return (
    <div>
      <section
        id="rockets"
        className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height"
      >
        <Heading value="Our Rockets" />
        <Card />
      </section>
      <HLine />
    </div>
  );
}

export default Rockets;
