import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Box,
} from "@mui/material";

function Newest(prop) {
  return (
    <Box
      sx={{
        width: "95%",
        margin: "auto",
      }}
    >
      <CardContent>
        <Grid container spacing={5}>
          {prop.isMd
            ? prop.gen9
                .slice()
                .reverse()
                .slice(0, 6)
                .map((card, index) => (
                  <Grid item xs={6} sm={3} md={2} key={index}>
                    <Card
                      sx={{
                        backgroundColor: "white",
                        borderRadius: "20px",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      <CardActionArea
                        onClick={() => prop.handleOpenModal(card)}
                      >
                        {card.new ? (
                          <div
                            style={{
                              position: "absolute",
                              top: "10px",
                              right: "10px",
                              backgroundColor: "red",
                              color: "white",
                              padding: "4px 8px",
                              borderRadius: "10px",
                              fontSize: "12px",
                            }}
                          >
                            New
                          </div>
                        ) : null}
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
                            <b>{card.name}</b>
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
                              width={"15%"}
                              style={{
                                marginRight: card.type2 !== "" ? "10px" : null,
                              }}
                            />
                            {card.type2 !== "" ? (
                              <img
                                src={prop.getImageSource(card.type2)}
                                alt={card.type1}
                                width={"15%"}
                              />
                            ) : null}
                          </div>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))
            : prop.gen9
                .slice()
                .reverse()
                .slice(0, 2)
                .map((card, index) => (
                  <Grid item xs={6} sm={3} md={2} key={index}>
                    <Card
                      sx={{
                        backgroundColor: "white",
                        borderRadius: "20px",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      <CardActionArea
                        onClick={() => prop.handleOpenModal(card)}
                      >
                        {card.new ? (
                          <div
                            style={{
                              position: "absolute",
                              top: "10px",
                              right: "10px",
                              backgroundColor: "red",
                              color: "white",
                              padding: "4px 8px",
                              borderRadius: "10px",
                              fontSize: "12px",
                            }}
                          >
                            New
                          </div>
                        ) : null}
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
                            <b>{card.name}</b>
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
                              width={"25%"}
                              style={{
                                marginRight: card.type2 !== "" ? "10px" : null,
                              }}
                            />
                            {card.type2 !== "" ? (
                              <img
                                src={prop.getImageSource(card.type2)}
                                alt={card.type1}
                                width={"25%"}
                              />
                            ) : null}
                          </div>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
        </Grid>
      </CardContent>
    </Box>
  );
}

export default Newest;
