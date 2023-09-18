import React from "react";
import Heading from "../../utilities/Heading";
import HLine from "../../utilities/HLine";
import Paratest from "./Paratest";
import Figtest from "./Figtest";

function Testimonials() {
  const comments = [
    {
      name: "Wile E. Coyote, Genius",
      comment:
        "Acme has always been there for me. Their Explorer rocket arrived in a wooden crate as expected. Life long customer! A++ shopping experience.",
    },
    {
      name: "Marvin The Martian & K-9",
      comment: `The Acme Adventurer Rocket has thwarted my Illudium Q-36 Explosive Space Modulator on several occasions. This makes me very, very angry! Nevertheless K-9 and I have awarded Acme the Martian contract for space exploration rockets based on Acme's quality and sturdy designs.`,
    },
    {
      name: "Buzz Lightyear",
      comment: `I knew I not only wanted -I needed-  Acme's Infinity Rocket for my mission in space. Acme delivered in one day! Nothing says Take me to your leader like Acme's Infinity Rocket!`,
    },
  ];

  return (
    <div>
      <section id="testimonials" className="p-6 my-12 scroll-mt-20">
        <Heading value="Testimonials" />
        {comments.map((cmnt) => {
          return (
            <figure className="my-12 sm:w-3/5 mx-auto ">
              <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
                <Paratest testimonial={cmnt.comment} />
              </blockquote>
              <Figtest name={cmnt.name} />
            </figure>
          );
        })}
      </section>
      <HLine />
    </div>
  );
}

export default Testimonials;
