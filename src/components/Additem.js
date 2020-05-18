import React from "react";

function Additem(props) {
  return (
    <>
      <i className="fas fa-plus-circle"></i>
      <h3>{props.add}</h3>
    </>
  );
}

export default Additem;