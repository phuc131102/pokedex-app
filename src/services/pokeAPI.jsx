import axios from "axios";

export const add_pokemon = async (data) => {
  try {
    const response = await axios.post(
      "https://pokedex-api-yn0r.onrender.com/add_pokemon",
      data
    );
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const allType = async () => {
  try {
    const response = await axios.get(
      `https://pokedex-api-yn0r.onrender.com/type`
    );
    return response.data.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const allGen9 = async () => {
  try {
    const response = await axios.get(
      `https://pokedex-api-yn0r.onrender.com/gen9`
    );
    return response.data.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const allAbility = async () => {
  try {
    const response = await axios.get(
      `https://pokedex-api-yn0r.onrender.com/ability`
    );
    return response.data.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
