import React, { useState, useEffect, useRef } from "react";
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
import { allAbility } from "../../services/pokeAPI";
import Loading from "../../components/Loading/Loading";
import Grass from "../../assets/type/Grass.png";
import Grass_full from "../../assets/type/Grass_v2.png";
import Fire from "../../assets/type/Fire.png";
import Fire_full from "../../assets/type/Fire_v2.png";
import Water from "../../assets/type/Water.png";
import Water_full from "../../assets/type/Water_v2.png";
import Normal from "../../assets/type/Normal.png";
import Normal_full from "../../assets/type/Normal_v2.png";

function Gen9() {
  const [showModal, setShowModal] = useState(false);
  const [showNestedModal, setShowNestedModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState("");
  const [abilityInfo, setAbilityInfo] = useState("");
  const [form, setForm] = useState("");
  const [ability, setAbility] = useState([]);
  const { gen9, loadingGen9 } = useGen9();
  const modalContentRef = useRef(null); // Ref for modal content

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedAbility = await allAbility();
        setAbility(fetchedAbility);
      } catch (error) {
        console.error("Error fetching type:", error);
      }
    };
    fetchData();
  }, []);

  const handleOpenModal = (cardInfo) => {
    setSelectedCard(cardInfo);
    setShowModal(true);
    if (cardInfo.form2 !== "") {
      findForm(cardInfo.name, cardInfo.form2);
    }
    if (modalContentRef.current) {
      modalContentRef.current.scrollTop = 0;
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenNestedModal = (name) => {
    const abilityCard = ability.find((ability) => ability.ability === name);
    if (abilityCard) {
      setAbilityInfo(abilityCard);
      setShowNestedModal(true);
    }
  };

  const handleCloseNestedModal = () => {
    setShowNestedModal(false);
  };

  const findForm = (name, form2) => {
    const abilityCard = gen9.find(
      (gen9) => gen9.name === name && gen9.form1 === form2
    );
    if (abilityCard) {
      setForm(abilityCard);
    } else return null;
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
    nestedmodal: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "90%", // Adjust the width as needed for smaller screens
      maxWidth: "400px", // Set a maximum width
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
                                : card.type1 === "Normal"
                                ? Normal
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
                                  : card.type1 === "Normal"
                                  ? Normal
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
        <Box
          sx={{ ...styles.modal, ...styles.scrollbar }}
          ref={modalContentRef}
        >
          <Typography id="place-book-modal" variant="h6" textAlign="center">
            <b>#{selectedCard.num}</b>
          </Typography>
          <Typography id="place-book-modal" variant="h4" textAlign="center">
            <b>{selectedCard.name}</b>
          </Typography>
          {selectedCard.form1 !== "" ? (
            <Typography id="place-book-modal" variant="h6" textAlign="center">
              <b>{selectedCard.form1}</b>
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
                  : selectedCard.type1 === "Normal"
                  ? Normal_full
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
                    : selectedCard.type1 === "Normal"
                    ? Normal_full
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
                    Chủng loại
                  </TableCell>
                  {selectedCard.ability2 === "" ? (
                    <TableCell
                      style={{
                        border: "1px solid black",
                        textAlign: "center",
                      }}
                    >
                      Đặc tính
                    </TableCell>
                  ) : (
                    <>
                      <TableCell
                        style={{
                          border: "1px solid black",
                          textAlign: "center",
                        }}
                      >
                        Đặc tính 1
                      </TableCell>
                      <TableCell
                        style={{
                          border: "1px solid black",
                          textAlign: "center",
                        }}
                      >
                        Đặc tính 2
                      </TableCell>
                    </>
                  )}
                  <TableCell
                    style={{
                      border: "1px solid black",
                      textAlign: "center",
                    }}
                  >
                    Đặc tính ẩn
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
                  {selectedCard.ability2 === "" ? (
                    <TableCell
                      onClick={() =>
                        handleOpenNestedModal(selectedCard.ability)
                      }
                      style={{
                        border: "1px solid black",
                        textAlign: "center",
                        cursor: "pointer",
                        transition: "all 0.3s",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.backgroundColor = "lightgray")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.backgroundColor = "white")
                      }
                    >
                      {selectedCard.ability}
                    </TableCell>
                  ) : (
                    <>
                      <TableCell
                        onClick={() =>
                          handleOpenNestedModal(selectedCard.ability)
                        }
                        style={{
                          border: "1px solid black",
                          textAlign: "center",
                          cursor: "pointer",
                          transition: "all 0.3s",
                        }}
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = "lightgray")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor = "white")
                        }
                      >
                        {selectedCard.ability}
                      </TableCell>
                      <TableCell
                        onClick={() =>
                          handleOpenNestedModal(selectedCard.ability2)
                        }
                        style={{
                          border: "1px solid black",
                          textAlign: "center",
                          cursor: "pointer",
                          transition: "all 0.3s",
                        }}
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = "lightgray")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor = "white")
                        }
                      >
                        {selectedCard.ability2}
                      </TableCell>
                    </>
                  )}
                  <TableCell
                    onClick={() =>
                      handleOpenNestedModal(selectedCard.hid_ability)
                    }
                    style={{
                      border: "1px solid black",
                      textAlign: "center",
                      cursor: "pointer",
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "lightgray")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "white")
                    }
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
              marginBottom: "30px",
            }}
          ></div>
          {selectedCard.form2 !== "" ? (
            <Card
              sx={{
                backgroundColor: "white",
                borderRadius: "20px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                width: "50%",
                margin: "auto",
              }}
            >
              <CardActionArea onClick={() => handleOpenModal(form)}>
                <CardMedia
                  component="img"
                  sx={{ width: 100, margin: "auto" }}
                  image={form.icon}
                  alt={form.name}
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
                    <b>{form.name}</b>
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
                    <b>{form.form1}</b>
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
                        form.type1 === "Grass"
                          ? Grass
                          : form.type1 === "Fire"
                          ? Fire
                          : form.type1 === "Water"
                          ? Water
                          : form.type1 === "Normal"
                          ? Normal
                          : null
                      }
                      alt="Grass"
                      width={"15%"}
                      style={{
                        marginRight: form.type2 !== "" ? "10px" : null,
                      }}
                    />
                    {form.type2 !== "" ? (
                      <img
                        src={
                          form.type1 === "Grass"
                            ? Grass
                            : form.type1 === "Fire"
                            ? Fire
                            : form.type1 === "Water"
                            ? Water
                            : form.type1 === "Normal"
                            ? Normal
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
          ) : null}
        </Box>
      </Modal>

      <Modal
        open={showNestedModal}
        onClose={handleCloseNestedModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...styles.nestedmodal, ...styles.scrollbar }}>
          <Typography id="place-book-modal" variant="h4" textAlign="center">
            <b>{abilityInfo.ability}</b>
          </Typography>
          <Typography variant="body1" textAlign="justify" marginTop={2}>
            {abilityInfo.info}
          </Typography>
          <div
            style={{
              borderTop: "2px solid black",
              width: "90%",
              margin: "10px auto",
              marginTop: "30px",
            }}
          ></div>
        </Box>
      </Modal>
    </>
  );
}

export default Gen9;
