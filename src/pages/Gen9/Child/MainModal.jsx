import React from "react";

function MainModal(prop) {
  return (
    <Modal
      open={showModal}
      onClose={handleCloseModal}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...styles.modal, ...styles.scrollbar }} ref={modalContentRef}>
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
                    onClick={() => handleOpenNestedModal(selectedCard.ability)}
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
                                  marginRight: lv1.type2 !== "" ? "10px" : null,
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
                                  marginRight: lv2.type2 !== "" ? "10px" : null,
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
                          <CardActionArea onClick={() => handleOpenModal(lv3)}>
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
  );
}

export default MainModal;
