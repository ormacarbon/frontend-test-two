import axios from "./index";

export const fetchCharacters = async (page) => {
  try {
    const response = await axios.get(`/character/?page=${page}`);
    return response?.data;
  } catch (error) {
    return {
      error: true,
      response: error?.message ?? "Something went wrong",
    };
  }
};

export const fetchFilteredCharacters = async (name) => {
  try {
    const response = await axios.get(`/character/?name=${name}`);
    return response?.data;
  } catch (error) {
        return {
      error: true,
      response: error?.message ?? "Something went wrong",
    };
  }
};

export const fetchCharacterById = async (id) => {
  try {
    const response = await axios.get(`/character/${id}`);
    return response?.data;
  } catch (error) {
        return {
      error: true,
      response: error?.message ?? "Something went wrong",
    };
  }
}
