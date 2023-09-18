import React from "react";

function Links(props) {
  return (
    <a
      href={"#" + props.title.section}
      className="text-center hover:opacity-90"
    >
      {props.title.name}
    </a>
  );
}

export default Links;
