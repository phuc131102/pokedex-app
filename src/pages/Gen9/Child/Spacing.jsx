import React from "react";

function Spacing(prop) {
  return (
    <div
      style={{
        width: "20%",
        margin: "10px auto",
        marginTop: prop.mt,
      }}
    ></div>
  );
}

export default Spacing;
