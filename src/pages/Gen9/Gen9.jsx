import React, { useState, useEffect, useRef } from "react";
import {
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
import getImageSource from "../../components/Type/Type";
import getImageSourceFull from "../../components/Type/Type_full";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useLocation, useNavigate } from "react-router-dom";
import RotatingImage from "../../components/RotatingImage/RotatingImage";
import Newest from "./Child/Newest";
import Spacing from "./Child/Spacing";
import Search from "./Child/Search";
import Paginate from "./Child/Pagination";
import List from "./Child/List";
import NestedModal from "./Child/NestedModal";

function Gen9() {
  const [showModal, setShowModal] = useState(false);
  const [showNestedModal, setShowNestedModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState("");
  const [abilityInfo, setAbilityInfo] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType1, setSelectedType1] = useState("");
  const [selectedType2, setSelectedType2] = useState("");
  const [form, setForm] = useState("");
  const [form2, setForm2] = useState("");
  const [form3, setForm3] = useState("");
  const [lv1, setLv1] = useState("");
  const [lv2, setLv2] = useState("");
  const [lv2Form2, setLv2Form2] = useState("");
  const [lv3, setLv3] = useState("");
  const [ability, setAbility] = useState([]);
  const { gen9, loadingGen9 } = useGen9();
  const modalContentRef = useRef(null);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const itemsPerPage = isMd ? 30 : 10;

  const location = useLocation();
  const navigate = useNavigate();

  const getQueryParams = (param) => {
    return new URLSearchParams(location.search).get(param);
  };

  const [currentPage, setCurrentPage] = useState(
    parseInt(getQueryParams("page")) || 1
  );

  const types = [
    "Normal",
    "Fire",
    "Water",
    "Electric",
    "Grass",
    "Ice",
    "Fighting",
    "Poison",
    "Ground",
    "Flying",
    "Psychic",
    "Bug",
    "Rock",
    "Ghost",
    "Dragon",
    "Dark",
    "Steel",
    "Fairy",
  ];

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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredGen9 = gen9.filter((pokemon) => {
    const matchesSearchQuery =
      (pokemon.name &&
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (pokemon.jpname &&
        pokemon.jpname.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesType1 =
      selectedType1 === "" || pokemon.type1 === selectedType1;
    const matchesType2 =
      selectedType2 === "" || pokemon.type2 === selectedType2;
    return matchesSearchQuery && matchesType1 && matchesType2;
  });

  const currentGen9 = filteredGen9
    .sort((a, b) => a.num - b.num)
    .slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    navigate(`?page=${value}`);
  };

  const handleOpenModal = (cardInfo) => {
    setSelectedCard(cardInfo);
    setShowModal(true);
    if (cardInfo.form2 !== "") {
      findForm(cardInfo.name, cardInfo.form2);
    }
    if (cardInfo.form3 !== "") {
      findForm2(cardInfo.name, cardInfo.form3);
    }
    if (cardInfo.form4 !== "") {
      findForm3(cardInfo.name, cardInfo.form4);
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

  const findForm3 = (name, form4) => {
    const abilityCard = gen9.find(
      (gen9) => gen9.name === name && gen9.form1 === form4
    );
    if (abilityCard) {
      setForm3(abilityCard);
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
      if (abilityCard.form2 !== "") {
        findLv2Form2(abilityCard.name, abilityCard.form2);
      }
    } else return null;
  };

  const findLv2Form2 = (name, form2) => {
    const abilityCard = gen9.find(
      (gen9) => gen9.name === name && gen9.form1 === form2
    );
    if (abilityCard) {
      setLv2Form2(abilityCard);
    } else return null;
  };

  const findLv3 = (lv3) => {
    const abilityCard = gen9.find((gen9) => gen9.name === lv3);
    if (abilityCard) {
      setLv3(abilityCard);
    } else return null;
  };

  const handleTypeChange1 = (event) => {
    setSelectedType1(event.target.value);
    setCurrentPage(1);
    navigate(`?page=1`);
  };

  const handleTypeChange2 = (event) => {
    setSelectedType2(event.target.value);
    setCurrentPage(1);
    navigate(`?page=1`);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
    navigate(`?page=1`);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedType1("");
    setSelectedType2("");
    setCurrentPage(1);
    navigate(`?page=1`);
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
      width: "90%",
      maxWidth: "500px",
      maxHeight: "75vh",
      backgroundColor: "white",
      boxShadow: "0 0 24px rgba(0, 0, 0, 0.5)",
      borderRadius: "10px",
      padding: "20px",
      overflow: "auto",
    },
    nestedmodal: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "90%",
      maxWidth: "400px",
      maxHeight: "75vh",
      backgroundColor: "white",
      boxShadow: "0 0 24px rgba(0, 0, 0, 0.5)",
      borderRadius: "10px",
      padding: "20px",
      overflow: "auto",
    },
    scrollbar: {
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  };

  if (loadingGen9) {
    return (
      <RotatingImage
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1026px-Pok%C3%A9_Ball_icon.svg.png"
        alt="Loading"
      />
    );
  }

  return (
    <>
      <br />

      <Spacing mt="75px" />

      <Newest
        gen9={gen9}
        isMd={isMd}
        handleOpenModal={handleOpenModal}
        getImageSource={getImageSource}
      />

      <Spacing mt="15px" />

      <Search
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        isMd={isMd}
        selectedType1={selectedType1}
        handleTypeChange1={handleTypeChange1}
        types={types}
        selectedType2={selectedType2}
        handleTypeChange2={handleTypeChange2}
        handleResetFilters={handleResetFilters}
      />

      <Paginate
        filteredGen9={filteredGen9}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        isMd={isMd}
      />

      <List
        filteredGen9={filteredGen9}
        currentGen9={currentGen9}
        handleOpenModal={handleOpenModal}
        getImageSource={getImageSource}
        isMd={isMd}
      />

      <Paginate
        filteredGen9={filteredGen9}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        isMd={isMd}
      />

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
          <Typography
            id="place-book-modal"
            variant={isMd ? "h4" : "h5"}
            textAlign="center"
          >
            {selectedCard.jpname ? (
              <>
                <sup style={{ fontSize: "10px" }}>Eng </sup>
                <b>{selectedCard.name}</b> - <b>{selectedCard.jpname}</b>
                <sup style={{ fontSize: "10px" }}> Jpn</sup>
              </>
            ) : (
              <b>{selectedCard.name}</b>
            )}
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

          {selectedCard.form2 !== "" || selectedCard.form3 !== "" ? (
            <Typography
              id="place-book-modal"
              variant="h6"
              textAlign="center"
              sx={{
                marginBottom: "15px",
              }}
            >
              <b>Dạng khác</b>
            </Typography>
          ) : null}

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
          {selectedCard.form4 !== "" ? (
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
              <CardActionArea onClick={() => handleOpenModal(form3)}>
                <CardMedia
                  component="img"
                  sx={{ width: 100, margin: "auto" }}
                  image={form3.icon}
                  alt={form3.name}
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
                    <b>{form3.name}</b>
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
                    <b>{form3.form1}</b>
                  </Typography>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={getImageSource(form3.type1)}
                      alt="Grass"
                      width={"15%"}
                      style={{
                        marginRight: form3.type2 !== "" ? "10px" : null,
                      }}
                    />
                    {form3.type2 !== "" ? (
                      <img
                        src={getImageSource(form3.type2)}
                        alt="Grass"
                        width={"15%"}
                      />
                    ) : null}
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          ) : null}
          {selectedCard.form2 !== "" ||
          selectedCard.form3 !== "" ||
          selectedCard.form4 !== "" ? (
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
                <b>Chuỗi tiến hóa</b>
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
                                  width={isMd ? "15%" : "25%"}
                                  style={{
                                    marginRight:
                                      lv1.type2 !== "" ? "10px" : null,
                                  }}
                                />
                                {lv1.type2 !== "" ? (
                                  <img
                                    src={getImageSource(lv1.type2)}
                                    alt="Grass"
                                    width={isMd ? "15%" : "25%"}
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
                                  width={isMd ? "15%" : "25%"}
                                  style={{
                                    marginRight:
                                      lv2.type2 !== "" ? "10px" : null,
                                  }}
                                />
                                {lv2.type2 !== "" ? (
                                  <img
                                    src={getImageSource(lv2.type2)}
                                    alt="Grass"
                                    width={isMd ? "15%" : "25%"}
                                  />
                                ) : null}
                              </div>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                        {lv2.form2 !== "" ? (
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
                              onClick={() => handleOpenModal(lv2Form2)}
                            >
                              <CardMedia
                                component="img"
                                sx={{ width: 100, margin: "auto" }}
                                image={lv2Form2.icon}
                                alt={lv2Form2.name}
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
                                  <b>{lv2Form2.name}</b>
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
                                  <b>#{lv2Form2.num}</b>
                                </Typography>

                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  <img
                                    src={getImageSource(lv2Form2.type1)}
                                    alt="Grass"
                                    width={isMd ? "15%" : "25%"}
                                    style={{
                                      marginRight:
                                        lv2Form2.type2 !== "" ? "10px" : null,
                                    }}
                                  />
                                  {lv2Form2.type2 !== "" ? (
                                    <img
                                      src={getImageSource(lv2Form2.type2)}
                                      alt="Grass"
                                      width={isMd ? "15%" : "25%"}
                                    />
                                  ) : null}
                                </div>
                              </CardContent>
                            </CardActionArea>
                          </Card>
                        ) : null}
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
                                    width={isMd ? "15%" : "25%"}
                                    style={{
                                      marginRight:
                                        lv3.type2 !== "" ? "10px" : null,
                                    }}
                                  />
                                  {lv3.type2 !== "" ? (
                                    <img
                                      src={getImageSource(lv3.type2)}
                                      alt="Grass"
                                      width={isMd ? "15%" : "25%"}
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

      <NestedModal
        showNestedModal={showNestedModal}
        handleCloseNestedModal={handleCloseNestedModal}
        styles={styles}
        abilityInfo={abilityInfo}
      />
    </>
  );
}

export default Gen9;
