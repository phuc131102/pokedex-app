import React from "react";
import { Typography } from "@mui/material";

function DetailInfo(prop) {
  return (
    <Typography variant="body1" textAlign="justify" marginTop={2}>
      {prop.selectedCard.info_en &&
        prop.selectedCard.info_en.split("\n").map((paragraph, index) => (
          <React.Fragment key={index}>
            {paragraph}
            <br />
          </React.Fragment>
        ))}
    </Typography>
  );
}

export default DetailInfo;
