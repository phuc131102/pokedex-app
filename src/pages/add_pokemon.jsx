import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  InputAdornment,
} from "@mui/material";
import { add_pokemon, allAbility, allType } from "../services/pokeAPI";
import Loading from "../components/Loading/Loading";

const finalTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            borderRadius: 20,
          }),
      },
    },
  },
});

function Signup() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState([]);
  const [ability, setAbility] = useState([]);
  const [avatarBase64, setAvatarBase64] = useState("");
  const [avatarBase64new, setAvatarBase64new] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedType = await allType();
        setType(fetchedType);
      } catch (error) {
        console.error("Error fetching type:", error);
      }
    };

    fetchData();
  }, []);

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

  const [type1, setType1] = React.useState("");
  const [type2, setType2] = React.useState("");
  const [abi1, setAbi1] = React.useState("");
  const [abi2, setAbi2] = React.useState("");
  const [abi3, setAbi3] = React.useState("");

  const handleChangeType1 = (event) => {
    setType1(event.target.value);
  };
  const handleChangeType2 = (event) => {
    setType2(event.target.value);
  };
  const handleChangeAbi1 = (event) => {
    setAbi1(event.target.value);
  };
  const handleChangeAbi3 = (event) => {
    setAbi3(event.target.value);
  };
  const handleChangeAbi2 = (event) => {
    setAbi2(event.target.value);
  };

  const [formData, setFormData] = useState({
    num: "",
    type1: "",
    type2: "",
    ability: "",
    ability2: "",
    hid_ability: "",
    category: "",
    form1: "",
    form2: "",
    name: "",
    info_en: "",
    // info_vn: "",
    image: "",
    icon: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    formData.type1 = type1;
    formData.type2 = type2;
    formData.ability = abi1;
    formData.hid_ability = abi2;
    formData.ability2 = abi3;
    formData.category = "Pokémon " + formData.category;
    formData.image = avatarBase64;
    formData.icon = avatarBase64new;

    try {
      const response = await add_pokemon(formData);
      if (response) {
        console.log("Add successfully");
        setLoading(false);
        window.location.reload();
      }
    } catch (error) {
      if (error.response) {
        const { status } = error.response;
        if (status === 404) {
          setError("All field is required.");
          setLoading(false);
        }
      }
      console.error("Add failed:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Box
        sx={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box
              sx={{
                maxWidth: "500px",
                margin: "auto",
                border: "1px solid black",
                borderRadius: "10px",
                marginTop: "10px",
                marginBottom: "10px",
                backgroundColor: "white",
                opacity: "90%",
                position: "relative",
              }}
            >
              <Grid
                item
                xs={12}
                sx={{
                  width: "90%",
                  margin: "auto",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                <ThemeProvider theme={finalTheme}>
                  <form onSubmit={handleSubmit}>
                    <Grid item xs={12}>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Typography variant="h4">Add Pokemon</Typography>
                      </Box>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <TextField
                          id="outlined-basic"
                          sx={{
                            width: "100%",
                            [`& fieldset`]: { borderRadius: 8 },
                            marginTop: "30px",
                            marginBottom: "15px",
                          }}
                          variant="outlined"
                          label="Number"
                          name="num"
                          value={formData.num}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={8}>
                        <TextField
                          id="outlined-basic"
                          sx={{
                            width: "100%",
                            [`& fieldset`]: { borderRadius: 8 },
                            marginTop: "30px",
                            marginBottom: "15px",
                          }}
                          variant="outlined"
                          label="Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <FormControl
                          variant="standard"
                          sx={{
                            width: "100%",
                            marginBottom: "15px",
                          }}
                        >
                          <InputLabel>Type 1</InputLabel>
                          <Select onChange={handleChangeType1}>
                            {type
                              .sort((a, b) => a.type.localeCompare(b.type))
                              .map((card, index) => (
                                <MenuItem value={card.type} key={index}>
                                  {card.type}
                                </MenuItem>
                              ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl
                          variant="standard"
                          sx={{
                            width: "100%",
                            marginBottom: "15px",
                          }}
                        >
                          <InputLabel>Type 2</InputLabel>
                          <Select onChange={handleChangeType2}>
                            {type
                              .sort((a, b) => a.type.localeCompare(b.type))
                              .map((card, index) => (
                                <MenuItem value={card.type} key={index}>
                                  {card.type}
                                </MenuItem>
                              ))}
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <FormControl
                          variant="standard"
                          sx={{
                            width: "100%",
                            marginBottom: "15px",
                          }}
                        >
                          <InputLabel>Ability 1</InputLabel>
                          <Select onChange={handleChangeAbi1}>
                            {ability
                              .sort((a, b) =>
                                a.ability.localeCompare(b.ability)
                              )
                              .map((card, index) => (
                                <MenuItem value={card.ability} key={index}>
                                  {card.ability}
                                </MenuItem>
                              ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl
                          variant="standard"
                          sx={{
                            width: "100%",
                            marginBottom: "15px",
                          }}
                        >
                          <InputLabel>Ability 2</InputLabel>
                          <Select onChange={handleChangeAbi3}>
                            {ability
                              .sort((a, b) =>
                                a.ability.localeCompare(b.ability)
                              )
                              .map((card, index) => (
                                <MenuItem value={card.ability} key={index}>
                                  {card.ability}
                                </MenuItem>
                              ))}
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl
                        variant="standard"
                        sx={{
                          width: "100%",
                          marginBottom: "15px",
                        }}
                      >
                        <InputLabel>Hidden Ability</InputLabel>
                        <Select onChange={handleChangeAbi2}>
                          {ability
                            .sort((a, b) => a.ability.localeCompare(b.ability))
                            .map((card, index) => (
                              <MenuItem value={card.ability} key={index}>
                                {card.ability}
                              </MenuItem>
                            ))}
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        id="outlined-basic"
                        sx={{
                          width: "100%",
                          [`& fieldset`]: { borderRadius: 8 },

                          marginBottom: "15px",
                        }}
                        variant="outlined"
                        multiline
                        label="Information"
                        name="info_en"
                        value={formData.info_en}
                        onChange={handleChange}
                      />
                    </Grid>
                    {/* <Grid item xs={12}>
                      <TextField
                        id="outlined-basic"
                        sx={{
                          width: "100%",
                          [`& fieldset`]: { borderRadius: 8 },

                          marginBottom: "15px",
                        }}
                        variant="outlined"
                        label="Info Vn"
                        name="info_vn"
                        value={formData.info_vn}
                        onChange={handleChange}
                      />
                    </Grid> */}
                    <Grid item xs={12}>
                      <TextField
                        id="outlined-basic"
                        sx={{
                          width: "100%",
                          [`& fieldset`]: { borderRadius: 8 },

                          marginBottom: "15px",
                        }}
                        variant="outlined"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              Pokémon
                            </InputAdornment>
                          ),
                        }}
                        label="Category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                      />
                    </Grid>

                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <TextField
                          id="outlined-basic"
                          sx={{
                            width: "100%",
                            [`& fieldset`]: { borderRadius: 8 },

                            marginBottom: "15px",
                          }}
                          variant="outlined"
                          multiline
                          label="Form 1"
                          name="form1"
                          value={formData.form1}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          id="outlined-basic"
                          sx={{
                            width: "100%",
                            [`& fieldset`]: { borderRadius: 8 },

                            marginBottom: "15px",
                          }}
                          variant="outlined"
                          multiline
                          label="Form 2"
                          name="form2"
                          value={formData.form2}
                          onChange={handleChange}
                        />
                      </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        {avatarBase64 ? (
                          <Box
                            sx={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <img
                              alt={avatarBase64}
                              src={avatarBase64}
                              style={{
                                width: "100%",
                                height: "auto",
                              }}
                            />
                          </Box>
                        ) : null}
                      </Grid>
                      <Grid item xs={6}>
                        {avatarBase64new ? (
                          <Box
                            sx={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <img
                              alt={avatarBase64new}
                              src={avatarBase64new}
                              style={{
                                width: "100%",
                                height: "auto",
                              }}
                            />
                          </Box>
                        ) : null}
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Box
                          sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <label
                            htmlFor="avatar-upload-1"
                            style={{
                              cursor: "pointer",
                              marginTop: "1%",
                              marginBottom: "5%",
                              padding: "12px 24px",
                              border: "2px solid #000",
                              borderRadius: "8px",
                              background: "#fff",
                              color: "#000",
                              fontWeight: "bold",
                              textAlign: "center",
                              textTransform: "uppercase",
                              fontSize: "16px",
                              letterSpacing: "1px",
                              transition: "all 0.3s ease",
                            }}
                          >
                            <input
                              id="avatar-upload-1"
                              style={{
                                display: "none",
                              }}
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                const selectedFile = e.target.files[0];
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                  const base64data = reader.result;
                                  setAvatarBase64(base64data);
                                  // setFormData({
                                  //   ...formData,
                                  //   avatar: avatarBase64,
                                  // });
                                };
                                reader.readAsDataURL(selectedFile);
                              }}
                            />
                            Add Image
                          </label>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box
                          sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <label
                            htmlFor="avatar-upload-2"
                            style={{
                              cursor: "pointer",
                              marginTop: "1%",
                              marginBottom: "5%",
                              padding: "12px 24px",
                              border: "2px solid #000",
                              borderRadius: "8px",
                              background: "#fff",
                              color: "#000",
                              fontWeight: "bold",
                              textAlign: "center",
                              textTransform: "uppercase",
                              fontSize: "16px",
                              letterSpacing: "1px",
                              transition: "all 0.3s ease",
                            }}
                          >
                            <input
                              id="avatar-upload-2"
                              style={{
                                display: "none",
                              }}
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                const selectedFile = e.target.files[0];
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                  const base64data = reader.result;
                                  setAvatarBase64new(base64data);
                                  // setFormData({
                                  //   ...formData,
                                  //   avatar: avatarBase64,
                                  // });
                                };
                                reader.readAsDataURL(selectedFile);
                              }}
                            />
                            Add Icon
                          </label>
                        </Box>
                      </Grid>
                    </Grid>

                    {error && (
                      <Typography variant="body2" color="error" align="center">
                        {error}
                      </Typography>
                    )}
                    <Grid item xs={12}>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                        }}
                      >
                        <Button
                          type="submit"
                          size="large"
                          variant="contained"
                          sx={{
                            width: "30%",
                            margin: "auto",
                            marginBottom: "15px",
                            marginTop: "15px",
                          }}
                        >
                          Add
                        </Button>
                      </Box>
                    </Grid>
                  </form>
                </ThemeProvider>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Signup;
