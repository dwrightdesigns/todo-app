import React from "react";

function Subheader(props) {
  return (
    <>
      <h3>{props.subheader}</h3>
      <button>{props.button}</button>
    </>
  );
}

export default Subheader;
