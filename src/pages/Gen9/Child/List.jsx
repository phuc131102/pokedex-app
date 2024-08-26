import React, { useMemo } from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Box,
} from "@mui/material";

function List(prop) {
  const colorToBackgroundColor = {
    0: "#b3b3ff", //poison
    1: "#ffc6b3", //fight
    A: "#b3ffb3", //grass
    B: "#ffb3b3", //fire
    C: "#b3ffff", //water
  };

  return (
    <Box
      sx={{
        width: "95%",
        margin: "auto",
      }}
    >
      <CardContent>
        {prop.filteredGen9.length === 0 ? (
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            No Pokemon Found.
          </Typography>
        ) : (
          <Grid container spacing={5}>
            {prop.currentGen9.map((card, index) => (
              <Grid item xs={6} sm={3} md={2} key={index}>
                <Card
                  sx={{
                    backgroundColor:
                      colorToBackgroundColor[card.color] || "white",
                    borderRadius: "20px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <CardActionArea onClick={() => prop.handleOpenModal(card)}>
                    <CardMedia
                      component="img"
                      sx={{ width: 100, margin: "auto" }}
                      image={card.icon}
                      alt={card.name}
                    />
                    <CardContent>
                      <Typography
                        sx={{
                          fontSize: 15,
                          textAlign: "center",
                          lineHeight: "1.2",
                          maxHeight: "1.2em",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          display: "block",
                        }}
                        color="text.primary"
                        gutterBottom
                      >
                        <b>#{card.num}</b>
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 20,
                          textAlign: "center",
                          lineHeight: "1.2",
                          maxHeight: "1.2em",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          display: "block",
                        }}
                        color="text.primary"
                        gutterBottom
                      >
                        {card.jpname ? (
                          <b>
                            {prop.showJapaneseName ? card.jpname : card.name}
                          </b>
                        ) : (
                          <b>{card.name}</b>
                        )}
                      </Typography>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={prop.getImageSource(card.type1)}
                          alt="card.type1"
                          width={prop.isMd ? "15%" : "25%"}
                          style={{
                            marginRight: card.type2 !== "" ? "10px" : null,
                          }}
                        />
                        {card.type2 !== "" ? (
                          <img
                            src={prop.getImageSource(card.type2)}
                            alt={card.type1}
                            width={prop.isMd ? "15%" : "25%"}
                          />
                        ) : null}
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </CardContent>
    </Box>
  );
}

export default List;
