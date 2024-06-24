import React from "react";
import Line from "./Line";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function Evoluation(prop) {
  return (
    <div>
      {prop.selectedCard.lv1 ||
      prop.selectedCard.lv2 ||
      prop.selectedCard.lv3 ? (
        <>
          <Typography
            id="place-book-modal"
            variant="h6"
            textAlign="center"
            sx={{
              marginBottom: "15px",
              marginTop: "30px",
            }}
          >
            <b>Chuỗi tiến hóa</b>
          </Typography>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    style={{
                      border: "1px solid black",
                      textAlign: "center",
                    }}
                  >
                    Chưa tiến hóa
                  </TableCell>

                  <TableCell
                    style={{
                      border: "1px solid black",
                      textAlign: "center",
                    }}
                  >
                    Tiến hóa lần 1
                  </TableCell>
                  {prop.selectedCard.lv3 ? (
                    <TableCell
                      style={{
                        border: "1px solid black",
                        textAlign: "center",
                      }}
                    >
                      Tiến hóa lần 2
                    </TableCell>
                  ) : null}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell
                    style={{
                      border: "1px solid black",
                      textAlign: "center",
                    }}
                  >
                    <Card
                      sx={{
                        backgroundColor: "white",
                        borderRadius: "20px",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                        width: "100%",
                        margin: "auto",
                      }}
                    >
                      <CardActionArea
                        onClick={() => prop.handleOpenModal(prop.lv1)}
                      >
                        <CardMedia
                          component="img"
                          sx={{ width: 100, margin: "auto" }}
                          image={prop.lv1.icon}
                          alt={prop.lv1.name}
                        />
                        <CardContent>
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
                            <b>
                              {prop.showJapaneseName
                                ? prop.lv1.jpname
                                : prop.lv1.name}
                            </b>
                          </Typography>
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
                            <b>#{prop.lv1.num}</b>
                          </Typography>

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <img
                              src={prop.getImageSource(prop.lv1.type1)}
                              alt="Grass"
                              width={prop.isMd ? "15%" : "25%"}
                              style={{
                                marginRight:
                                  prop.lv1.type2 !== "" ? "10px" : null,
                              }}
                            />
                            {prop.lv1.type2 !== "" ? (
                              <img
                                src={prop.getImageSource(prop.lv1.type2)}
                                alt="Grass"
                                width={prop.isMd ? "15%" : "25%"}
                              />
                            ) : null}
                          </div>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </TableCell>

                  <TableCell
                    style={{
                      border: "1px solid black",
                      textAlign: "center",
                    }}
                  >
                    <Card
                      sx={{
                        backgroundColor: "white",
                        borderRadius: "20px",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                        width: "100%",
                        margin: "auto",
                      }}
                    >
                      <CardActionArea
                        onClick={() => prop.handleOpenModal(prop.lv2)}
                      >
                        <CardMedia
                          component="img"
                          sx={{ width: 100, margin: "auto" }}
                          image={prop.lv2.icon}
                          alt={prop.lv2.name}
                        />
                        <CardContent>
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
                            <b>
                              {prop.showJapaneseName
                                ? prop.lv2.jpname
                                : prop.lv2.name}
                            </b>
                          </Typography>
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
                            <b>#{prop.lv2.num}</b>
                          </Typography>

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <img
                              src={prop.getImageSource(prop.lv2.type1)}
                              alt="Grass"
                              width={prop.isMd ? "15%" : "25%"}
                              style={{
                                marginRight:
                                  prop.lv2.type2 !== "" ? "10px" : null,
                              }}
                            />
                            {prop.lv2.type2 !== "" ? (
                              <img
                                src={prop.getImageSource(prop.lv2.type2)}
                                alt="Grass"
                                width={prop.isMd ? "15%" : "25%"}
                              />
                            ) : null}
                          </div>
                        </CardContent>
                      </CardActionArea>
                    </Card>

                    {prop.lv2.form2 !== "" ? (
                      <Card
                        sx={{
                          backgroundColor: "white",
                          borderRadius: "20px",
                          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                          width: "100%",
                          margin: "auto",
                          marginTop: "15px",
                        }}
                      >
                        <CardActionArea
                          onClick={() => prop.handleOpenModal(prop.lv2Form2)}
                        >
                          <CardMedia
                            component="img"
                            sx={{ width: 100, margin: "auto" }}
                            image={prop.lv2Form2.icon}
                            alt={prop.lv2Form2.name}
                          />
                          <CardContent>
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
                              <b>
                                {prop.showJapaneseName
                                  ? prop.lv2Form2.jpname
                                  : prop.lv2Form2.name}
                              </b>
                            </Typography>
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
                              <b>#{prop.lv2Form2.num}</b>
                            </Typography>

                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <img
                                src={prop.getImageSource(prop.lv2Form2.type1)}
                                alt="Grass"
                                width={prop.isMd ? "15%" : "25%"}
                                style={{
                                  marginRight:
                                    prop.lv2Form2.type2 !== "" ? "10px" : null,
                                }}
                              />
                              {prop.lv2Form2.type2 !== "" ? (
                                <img
                                  src={prop.getImageSource(prop.lv2Form2.type2)}
                                  alt="Grass"
                                  width={prop.isMd ? "15%" : "25%"}
                                />
                              ) : null}
                            </div>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    ) : null}
                  </TableCell>

                  {prop.selectedCard.lv3 ? (
                    <TableCell
                      style={{
                        border: "1px solid black",
                        textAlign: "center",
                      }}
                    >
                      <Card
                        sx={{
                          backgroundColor: "white",
                          borderRadius: "20px",
                          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                          width: "100%",
                          margin: "auto",
                        }}
                      >
                        <CardActionArea
                          onClick={() => prop.handleOpenModal(prop.lv3)}
                        >
                          <CardMedia
                            component="img"
                            sx={{ width: 100, margin: "auto" }}
                            image={prop.lv3.icon}
                            alt={prop.lv3.name}
                          />
                          <CardContent>
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
                              <b>
                                {prop.showJapaneseName
                                  ? prop.lv3.jpname
                                  : prop.lv3.name}
                              </b>
                            </Typography>
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
                              <b>#{prop.lv3.num}</b>
                            </Typography>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <img
                                src={prop.getImageSource(prop.lv3.type1)}
                                alt="Grass"
                                width={prop.isMd ? "15%" : "25%"}
                                style={{
                                  marginRight:
                                    prop.lv3.type2 !== "" ? "10px" : null,
                                }}
                              />
                              {prop.lv3.type2 !== "" ? (
                                <img
                                  src={prop.getImageSource(prop.lv3.type2)}
                                  alt="Grass"
                                  width={prop.isMd ? "15%" : "25%"}
                                />
                              ) : null}
                            </div>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </TableCell>
                  ) : null}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Line mb="0" />
        </>
      ) : null}
    </div>
  );
}

export default Evoluation;
