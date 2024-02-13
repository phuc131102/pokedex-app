import React, { useState } from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Box,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import useGen9 from "../../utils/gen9Utils";
import Loading from "../../components/Loading/Loading";
import Grass from "../../assets/type/Grass.png";
import Grass_full from "../../assets/type/Grass_v2.png";
import Fire from "../../assets/type/Fire.png";
import Fire_full from "../../assets/type/Fire_v2.png";
import Water from "../../assets/type/Water.png";
import Water_full from "../../assets/type/Water_v2.png";

function Gen9() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState("");

  const handleOpenModal = (cardInfo) => {
    setSelectedCard(cardInfo);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const styles = {
    button: {
      color: "#fff",
      fontWeight: 600,
      borderRadius: 15,
      maxWidth: "500px",
      marginRight: "10px",
      minWidth: "150px",
      padding: "5px 10px",
      fontSize: "1.2rem",
    },
    modal: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "90%", // Adjust the width as needed for smaller screens
      maxWidth: "500px", // Set a maximum width
      maxHeight: "75vh", // Set a maximum height relative to the viewport height
      backgroundColor: "white", // Use the appropriate background color
      boxShadow: "0 0 24px rgba(0, 0, 0, 0.5)", // Adjust the box shadow as needed
      borderRadius: "10px", // Use appropriate border radius
      padding: "20px", // Adjust padding as needed
      overflow: "auto",
    },
    scrollbar: {
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  };

  const { gen9, loadingGen9 } = useGen9();

  if (loadingGen9) {
    return <Loading />;
  }

  return (
    <>
      <br />

      <div
        style={{
          borderTop: "2px solid black",
          width: "20%",
          margin: "10px auto",
          marginTop: "75px",
          marginBottom: "30px",
        }}
      ></div>

      <Card
        sx={{
          backgroundColor: "white",
          borderRadius: "20px",
          width: "95%",
          margin: "auto",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
        }}
      >
        <CardContent>
          <Grid container spacing={5}>
            {gen9
              .sort((a, b) => a.num - b.num)
              .map((card, index) => (
                <Grid item xs={6} sm={3} md={2} key={index}>
                  <Card
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "20px",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    <CardActionArea onClick={() => handleOpenModal(card)}>
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
                            src={
                              card.type1 === "Grass"
                                ? Grass
                                : card.type1 === "Fire"
                                ? Fire
                                : card.type1 === "Water"
                                ? Water
                                : null
                            }
                            alt="Grass"
                            width={"15%"}
                            style={{
                              marginRight: card.type2 !== "" ? "10px" : null,
                            }}
                          />
                          {card.type2 !== "" ? (
                            <img
                              src={
                                card.type1 === "Grass"
                                  ? Grass
                                  : card.type1 === "Fire"
                                  ? Fire
                                  : card.type1 === "Water"
                                  ? Water
                                  : null
                              }
                              alt="Grass"
                              width={"15%"}
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
      </Card>
      <div
        style={{
          borderTop: "2px solid black",
          width: "20%",
          margin: "10px auto",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      ></div>
      <br />
      <Modal
        open={showModal}
        onClose={handleCloseModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...styles.modal, ...styles.scrollbar }}>
          <Typography id="place-book-modal" variant="h6" textAlign="center">
            <b>#{selectedCard.num}</b>
          </Typography>
          <Typography id="place-book-modal" variant="h4" textAlign="center">
            <b>{selectedCard.name}</b>
          </Typography>
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
              src={selectedCard.image}
              alt={selectedCard.name}
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
              src={
                selectedCard.type1 === "Grass"
                  ? Grass_full
                  : selectedCard.type1 === "Fire"
                  ? Fire_full
                  : selectedCard.type1 === "Water"
                  ? Water_full
                  : null
              }
              alt="Grass"
              width={"25%"}
              style={{
                marginRight: selectedCard.type2 !== "" ? "10px" : null,
              }}
            />
            {selectedCard.type2 !== "" ? (
              <img
                src={
                  selectedCard.type1 === "Grass"
                    ? Grass_full
                    : selectedCard.type1 === "Fire"
                    ? Fire_full
                    : selectedCard.type1 === "Water"
                    ? Water_full
                    : null
                }
                alt="Grass"
                width={"25%"}
              />
            ) : null}
          </div>
          <TableContainer
            component={Paper}
            style={{
              marginTop: "20px",
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    style={{
                      border: "1px solid black",
                      textAlign: "center",
                    }}
                  >
                    Category
                  </TableCell>
                  <TableCell
                    style={{
                      border: "1px solid black",
                      textAlign: "center",
                    }}
                  >
                    Ability
                  </TableCell>
                  <TableCell
                    style={{
                      border: "1px solid black",
                      textAlign: "center",
                    }}
                  >
                    Hidden Ability
                  </TableCell>
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
                    {selectedCard.category}
                  </TableCell>
                  <TableCell
                    style={{
                      border: "1px solid black",
                      textAlign: "center",
                    }}
                  >
                    {selectedCard.ability}
                  </TableCell>
                  <TableCell
                    style={{
                      border: "1px solid black",
                      textAlign: "center",
                    }}
                  >
                    {selectedCard.hid_ability}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <div
            style={{
              borderTop: "2px solid black",
              width: "90%",
              margin: "10px auto",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          ></div>
          <Typography variant="body1" textAlign="justify" marginTop={2}>
            {selectedCard.info_en &&
              selectedCard.info_en.split("\n").map((paragraph, index) => (
                <React.Fragment key={index}>
                  {paragraph}
                  <br />
                </React.Fragment>
              ))}
          </Typography>
          <div
            style={{
              borderTop: "2px solid black",
              width: "90%",
              margin: "10px auto",
              marginTop: "30px",
            }}
          ></div>
          {/* <Stack direction="row" justifyContent="center" marginTop={4}>
            <Button
              variant="contained"
              sx={styles.button}
              onClick={handleCloseModal}
            >
              Cancel
            </Button>
          </Stack> */}
        </Box>
      </Modal>
    </>
  );
}

export default Gen9;