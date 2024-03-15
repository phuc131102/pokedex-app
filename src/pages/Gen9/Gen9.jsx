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
import getImageSource from "../../components/Type/Type";
import getImageSourceFull from "../../components/Type/Type_full";

function Gen9() {
  const [showModal, setShowModal] = useState(false);
  const [showNestedModal, setShowNestedModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState("");
  const [abilityInfo, setAbilityInfo] = useState("");
  const [form, setForm] = useState("");
  const [form2, setForm2] = useState("");
  const [lv1, setLv1] = useState("");
  const [lv2, setLv2] = useState("");
  const [lv3, setLv3] = useState("");
  const [ability, setAbility] = useState([]);
  const { gen9, loadingGen9 } = useGen9();
  const modalContentRef = useRef(null);

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
    if (cardInfo.form3 !== "") {
      findForm2(cardInfo.name, cardInfo.form3);
    }
    if (cardInfo.lv1) {
      findLv1(cardInfo.lv1);
    }
    if (cardInfo.lv2) {
      findLv2(cardInfo.lv2);
    }
    if (cardInfo.lv3) {
      findLv3(cardInfo.lv3);
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

  const findForm2 = (name, form3) => {
    const abilityCard = gen9.find(
      (gen9) => gen9.name === name && gen9.form1 === form3
    );
    if (abilityCard) {
      setForm2(abilityCard);
    } else return null;
  };

  const findLv1 = (lv1) => {
    const abilityCard = gen9.find((gen9) => gen9.name === lv1);
    if (abilityCard) {
      setLv1(abilityCard);
    } else return null;
  };

  const findLv2 = (lv2) => {
    const abilityCard = gen9.find((gen9) => gen9.name === lv2);
    if (abilityCard) {
      setLv2(abilityCard);
    } else return null;
  };

  const findLv3 = (lv3) => {
    const abilityCard = gen9.find((gen9) => gen9.name === lv3);
    if (abilityCard) {
      setLv3(abilityCard);
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
                            src={getImageSource(card.type1)}
                            alt="card.type1"
                            width={"15%"}
                            style={{
                              marginRight: card.type2 !== "" ? "10px" : null,
                            }}
                          />
                          {card.type2 !== "" ? (
                            <img
                              src={getImageSource(card.type2)}
                              alt={card.type1}
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
              src={getImageSourceFull(selectedCard.type1)}
              alt={selectedCard.type1}
              width={"25%"}
              style={{
                marginRight: selectedCard.type2 !== "" ? "10px" : null,
              }}
            />
            {selectedCard.type2 !== "" ? (
              <img
                src={getImageSourceFull(selectedCard.type2)}
                alt={selectedCard.type1}
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
                  {selectedCard.hid_ability !== "" ? (
                    <TableCell
                      style={{
                        border: "1px solid black",
                        textAlign: "center",
                      }}
                    >
                      Đặc tính ẩn
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
                  {selectedCard.hid_ability !== "" ? (
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
                  ) : null}
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
                      src={getImageSource(form.type1)}
                      alt="Grass"
                      width={"15%"}
                      style={{
                        marginRight: form.type2 !== "" ? "10px" : null,
                      }}
                    />
                    {form.type2 !== "" ? (
                      <img
                        src={getImageSource(form.type2)}
                        alt="Grass"
                        width={"15%"}
                      />
                    ) : null}
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          ) : null}

          {selectedCard.form3 !== "" ? (
            <Card
              sx={{
                backgroundColor: "white",
                borderRadius: "20px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                width: "50%",
                margin: "auto",
                marginTop: "30px",
              }}
            >
              <CardActionArea onClick={() => handleOpenModal(form2)}>
                <CardMedia
                  component="img"
                  sx={{ width: 100, margin: "auto" }}
                  image={form2.icon}
                  alt={form2.name}
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
                    <b>{form2.name}</b>
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
                    <b>{form2.form1}</b>
                  </Typography>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={getImageSource(form2.type1)}
                      alt="Grass"
                      width={"15%"}
                      style={{
                        marginRight: form2.type2 !== "" ? "10px" : null,
                      }}
                    />
                    {form2.type2 !== "" ? (
                      <img
                        src={getImageSource(form2.type2)}
                        alt="Grass"
                        width={"15%"}
                      />
                    ) : null}
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          ) : null}
          {selectedCard.form2 !== "" || selectedCard.form3 !== "" ? (
            <div
              style={{
                borderTop: "2px solid black",
                width: "90%",
                margin: "10px auto",
                marginTop: "30px",
                marginBottom: "30px",
              }}
            ></div>
          ) : null}
          {selectedCard.lv1 || selectedCard.lv2 || selectedCard.lv3 ? (
            <>
              <Typography id="place-book-modal" variant="h6" textAlign="center">
                <b>Tiến hóa</b>
              </Typography>

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
                      {selectedCard.lv3 ? (
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
                          <CardActionArea onClick={() => handleOpenModal(lv1)}>
                            <CardMedia
                              component="img"
                              sx={{ width: 100, margin: "auto" }}
                              image={lv1.icon}
                              alt={lv1.name}
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
                                <b>{lv1.name}</b>
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
                                <b>#{lv1.num}</b>
                              </Typography>

                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <img
                                  src={getImageSource(lv1.type1)}
                                  alt="Grass"
                                  width={"15%"}
                                  style={{
                                    marginRight:
                                      lv1.type2 !== "" ? "10px" : null,
                                  }}
                                />
                                {lv1.type2 !== "" ? (
                                  <img
                                    src={getImageSource(lv1.type2)}
                                    alt="Grass"
                                    width={"15%"}
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
                          <CardActionArea onClick={() => handleOpenModal(lv2)}>
                            <CardMedia
                              component="img"
                              sx={{ width: 100, margin: "auto" }}
                              image={lv2.icon}
                              alt={lv2.name}
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
                                <b>{lv2.name}</b>
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
                                <b>#{lv2.num}</b>
                              </Typography>

                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <img
                                  src={getImageSource(lv2.type1)}
                                  alt="Grass"
                                  width={"15%"}
                                  style={{
                                    marginRight:
                                      lv2.type2 !== "" ? "10px" : null,
                                  }}
                                />
                                {lv2.type2 !== "" ? (
                                  <img
                                    src={getImageSource(lv2.type2)}
                                    alt="Grass"
                                    width={"15%"}
                                  />
                                ) : null}
                              </div>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </TableCell>
                      {selectedCard.lv3 ? (
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
                              onClick={() => handleOpenModal(lv3)}
                            >
                              <CardMedia
                                component="img"
                                sx={{ width: 100, margin: "auto" }}
                                image={lv3.icon}
                                alt={lv3.name}
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
                                  <b>{lv3.name}</b>
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
                                  <b>#{lv3.num}</b>
                                </Typography>

                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  <img
                                    src={getImageSource(lv3.type1)}
                                    alt="Grass"
                                    width={"15%"}
                                    style={{
                                      marginRight:
                                        lv3.type2 !== "" ? "10px" : null,
                                    }}
                                  />
                                  {lv3.type2 !== "" ? (
                                    <img
                                      src={getImageSource(lv3.type2)}
                                      alt="Grass"
                                      width={"15%"}
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
              <div
                style={{
                  borderTop: "2px solid black",
                  width: "90%",
                  margin: "10px auto",
                  marginTop: "30px",
                  marginBottom: "30px",
                }}
              ></div>
            </>
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
