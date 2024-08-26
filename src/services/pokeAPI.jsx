import axios from "axios";

export const add_pokemon = async (data) => {
  try {
    const response = await axios.post(
      "https://pokedex-api-6vy9.onrender.com/add_pokemon",
      data
    );
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const add_ability = async (data) => {
  try {
    const response = await axios.post(
      "https://pokedex-api-6vy9.onrender.com/add_ability",
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
      `https://pokedex-api-6vy9.onrender.com/type`
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
      `https://pokedex-api-6vy9.onrender.com/gen9`
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
      `https://pokedex-api-6vy9.onrender.com/ability`
    );
    return response.data.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
