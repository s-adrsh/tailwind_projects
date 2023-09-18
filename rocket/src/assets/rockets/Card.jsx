import React from "react";
import Cardlist from "./Cardlist";

function Card() {
  const img = {
    firstImg: {
      src: "src/images/rocketman.png",
      alt: "Explorer",
      price: "$",
      content: "Affordable Exploration",
    },
    secondImg: {
      src: "src/images/rocketride.png",
      alt: "Adventurer",
      price: "$$",
      content: "Best Selling Rocket!",
    },
    thirdImg: {
      src: "src/images/rocketlaunch.png",
      alt: "Infinity",
      price: "$$$",
      content: "Luxury Starship",
    },
  };
  return (
    <div>
      <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-12 sm:w-3/5">
        <Cardlist data={img.firstImg} />
        <Cardlist data={img.secondImg} />
        <Cardlist data={img.thirdImg} />
      </ul>
    </div>
  );
}

export default Card;
