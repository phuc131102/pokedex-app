import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import Line from "./Line";

function Form(prop) {
  return (
    <div>
      {prop.selectedCard.form2 !== "" ||
      prop.selectedCard.form3 !== "" ||
      prop.selectedCard.form4 !== "" ? (
        <Typography
          id="place-book-modal"
          variant="h6"
          textAlign="center"
          sx={{
            marginBottom: "15px",
            marginTop: "30px",
          }}
        >
          <b>Dạng khác</b>
        </Typography>
      ) : null}
      {prop.selectedCard.form2 !== "" ? (
        <Card
          sx={{
            backgroundColor: "white",
            borderRadius: "20px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
            width: "50%",
            margin: "auto",
          }}
        >
          <CardActionArea onClick={() => prop.handleOpenModal(prop.form)}>
            <CardMedia
              component="img"
              sx={{ width: 100, margin: "auto" }}
              image={prop.form.icon}
              alt={prop.form.name}
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
                <b>{prop.form.name}</b>
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
                <b>{prop.form.form1}</b>
              </Typography>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={prop.getImageSource(prop.form.type1)}
                  alt="Grass"
                  width={"15%"}
                  style={{
                    marginRight: prop.form.type2 !== "" ? "10px" : null,
                  }}
                />
                {prop.form.type2 !== "" ? (
                  <img
                    src={prop.getImageSource(prop.form.type2)}
                    alt="Grass"
                    width={"15%"}
                  />
                ) : null}
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      ) : null}

      {prop.selectedCard.form3 !== "" ? (
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
          <CardActionArea onClick={() => prop.handleOpenModal(prop.form2)}>
            <CardMedia
              component="img"
              sx={{ width: 100, margin: "auto" }}
              image={prop.form2.icon}
              alt={prop.form2.name}
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
                <b>{prop.form2.name}</b>
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
                <b>{prop.form2.form1}</b>
              </Typography>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={prop.getImageSource(prop.form2.type1)}
                  alt="Grass"
                  width={"15%"}
                  style={{
                    marginRight: prop.form2.type2 !== "" ? "10px" : null,
                  }}
                />
                {prop.form2.type2 !== "" ? (
                  <img
                    src={prop.getImageSource(prop.form2.type2)}
                    alt="Grass"
                    width={"15%"}
                  />
                ) : null}
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      ) : null}

      {prop.selectedCard.form4 !== "" ? (
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
          <CardActionArea onClick={() => prop.handleOpenModal(prop.form3)}>
            <CardMedia
              component="img"
              sx={{ width: 100, margin: "auto" }}
              image={prop.form3.icon}
              alt={prop.form3.name}
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
                <b>{prop.form3.name}</b>
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
                <b>{prop.form3.form1}</b>
              </Typography>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={prop.getImageSource(prop.form3.type1)}
                  alt="Grass"
                  width={"15%"}
                  style={{
                    marginRight: prop.form3.type2 !== "" ? "10px" : null,
                  }}
                />
                {prop.form3.type2 !== "" ? (
                  <img
                    src={prop.getImageSource(prop.form3.type2)}
                    alt="Grass"
                    width={"15%"}
                  />
                ) : null}
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      ) : null}
      {prop.selectedCard.form2 !== "" ||
      prop.selectedCard.form3 !== "" ||
      prop.selectedCard.form4 !== "" ? (
        <Line mb="0" />
      ) : null}
    </div>
  );
}

export default Form;
