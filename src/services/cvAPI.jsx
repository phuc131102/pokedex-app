import axios from "axios";

export const gen9 = async (data) => {
  try {
    const response = await axios.get(
      `https://homemateapi.onrender.com/get_cv_info/${data}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const delete_cv = async (data) => {
  try {
    const response = await axios.delete(
      `https://homemateapi.onrender.com/delete_cv/${data}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
