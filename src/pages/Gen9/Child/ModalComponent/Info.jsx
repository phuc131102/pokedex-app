import React from "react";
import { Typography } from "@mui/material";

function Info(prop) {
  return (
    <>
      <Typography id="place-book-modal" variant="h6" textAlign="center">
        <b>#{prop.selectedCard.num}</b>
      </Typography>
      <Typography id="place-book-modal" variant="h4" textAlign="center">
        {prop.selectedCard.jpname ? (
          <b>
            {prop.showJapaneseName
              ? prop.selectedCard.jpname
              : prop.selectedCard.name}
          </b>
        ) : (
          <b>{prop.selectedCard.name}</b>
        )}
      </Typography>
      {prop.selectedCard.form1 !== "" ? (
        <Typography id="place-book-modal" variant="h6" textAlign="center">
          <b>{prop.selectedCard.form1}</b>
        </Typography>
      ) : null}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "15px",
          marginBottom: "15px",
        }}
      >
        <img
          src={prop.selectedCard.image}
          alt={prop.selectedCard.name}
          height={"250px"}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={prop.getImageSourceFull(prop.selectedCard.type1)}
          alt={prop.selectedCard.type1}
          width={"25%"}
          style={{
            marginRight: prop.selectedCard.type2 !== "" ? "10px" : null,
          }}
        />
        {prop.selectedCard.type2 !== "" ? (
          <img
            src={prop.getImageSourceFull(prop.selectedCard.type2)}
            alt={prop.selectedCard.type1}
            width={"25%"}
          />
        ) : null}
      </div>
    </>
  );
}

export default Info;
