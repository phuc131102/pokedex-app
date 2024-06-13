import React from "react";

function Line(prop) {
  return (
    <div
      style={{
        borderTop: "2px solid black",
        width: "90%",
        margin: "10px auto",
        marginTop: "30px",
        marginBottom: prop.mb,
      }}
    ></div>
  );
}

export default Line;
