import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  InputAdornment,
  Autocomplete,
} from "@mui/material";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { auth, storage } from "../lib/firebase";
import { add_pokemon, allAbility, allType } from "../services/pokeAPI";
import Loading from "../components/Loading/Loading";
import { useNavigate } from "react-router-dom";

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
  const [avatarFile, setAvatarFile] = useState(null);
  const [iconFile, setIconFile] = useState(null);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        signInAnonymously(auth).catch((error) => {
          console.error("Authentication error:", error);
        });
      }
    });
    return () => unsubscribe();
  }, []);

  const [type1, setType1] = useState(null);
  const [type2, setType2] = useState(null);
  const [abi1, setAbi1] = useState(null);
  const [abi2, setAbi2] = useState(null);
  const [abi3, setAbi3] = useState(null);

  const handleChangeType1 = (event, value) => {
    setType1(value);
  };

  const handleChangeType2 = (event, value) => {
    setType2(value);
  };

  const handleChangeAbi1 = (event, value) => {
    setAbi1(value);
  };

  const handleChangeAbi3 = (event, value) => {
    setAbi3(value);
  };

  const handleChangeAbi2 = (event, value) => {
    setAbi2(value);
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
    form3: "",
    form4: "",
    name: "",
    jpname: "",
    info_en: "",
    image: "",
    icon: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const uploadImage = async (file, path) => {
    const storageRef = ref(storage, path);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let imageUrl = "";
      let iconUrl = "";

      if (avatarFile) {
        imageUrl = await uploadImage(avatarFile, `avatars/${avatarFile.name}`);
      }

      if (iconFile) {
        iconUrl = await uploadImage(iconFile, `icons/${iconFile.name}`);
      }

      const pokemonData = {
        ...formData,
        type1,
        type2,
        ability: abi1,
        hid_ability: abi2,
        ability2: abi3,
        category: "Pokémon " + formData.category,
        image: imageUrl,
        icon: iconUrl,
      };

      const response = await add_pokemon(pokemonData);
      if (response) {
        console.log("Add successfully");
        setLoading(false);
        navigate("/");
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
                maxWidth: "700px",
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
                      <Grid item xs={3}>
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
                          type="number"
                          name="num"
                          value={formData.num}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={4.5}>
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
                      <Grid item xs={4.5}>
                        <TextField
                          id="outlined-basic"
                          sx={{
                            width: "100%",
                            [`& fieldset`]: { borderRadius: 8 },
                            marginTop: "30px",
                            marginBottom: "15px",
                          }}
                          variant="outlined"
                          label="Japanese Name"
                          name="jpname"
                          value={formData.jpname}
                          onChange={handleChange}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Autocomplete
                          sx={{
                            marginBottom: "15px",
                          }}
                          options={type.map((option) => option.type)}
                          value={type1}
                          onChange={handleChangeType1}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Type 1"
                              variant="standard"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Autocomplete
                          sx={{
                            marginBottom: "15px",
                          }}
                          options={type.map((option) => option.type)}
                          value={type2}
                          onChange={handleChangeType2}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Type 2"
                              variant="standard"
                            />
                          )}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Autocomplete
                          sx={{
                            marginBottom: "15px",
                          }}
                          options={ability
                            .sort((a, b) => a.ability.localeCompare(b.ability))
                            .map((option) => option.ability)}
                          value={abi1}
                          onChange={handleChangeAbi1}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Ability 1"
                              variant="standard"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Autocomplete
                          sx={{
                            marginBottom: "15px",
                          }}
                          options={ability
                            .sort((a, b) => a.ability.localeCompare(b.ability))
                            .map((option) => option.ability)}
                          value={abi3}
                          onChange={handleChangeAbi3}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Ability 2"
                              variant="standard"
                            />
                          )}
                        />
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Autocomplete
                        sx={{
                          marginBottom: "15px",
                        }}
                        options={ability
                          .sort((a, b) => a.ability.localeCompare(b.ability))
                          .map((option) => option.ability)}
                        value={abi2}
                        onChange={handleChangeAbi2}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Hidden Ability"
                            variant="standard"
                          />
                        )}
                      />
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
                          label="Form 2"
                          name="form2"
                          value={formData.form2}
                          onChange={handleChange}
                        />
                      </Grid>
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
                          label="Form 3"
                          name="form3"
                          value={formData.form3}
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
                          label="Form 4"
                          name="form4"
                          value={formData.form4}
                          onChange={handleChange}
                        />
                      </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        {avatarFile ? (
                          <Box
                            sx={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <img
                              alt="Avatar"
                              src={URL.createObjectURL(avatarFile)}
                              style={{
                                width: "100%",
                                height: "auto",
                              }}
                            />
                          </Box>
                        ) : null}
                      </Grid>
                      <Grid item xs={6}>
                        {iconFile ? (
                          <Box
                            sx={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <img
                              alt="Icon"
                              src={URL.createObjectURL(iconFile)}
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
                              onChange={(e) => setAvatarFile(e.target.files[0])}
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
                              onChange={(e) => setIconFile(e.target.files[0])}
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
