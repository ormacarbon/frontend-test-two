import axios from "./index";

export const fetchLocations = async (page) => {
  try {
    const response = await axios.get(`/location/?page=${page}`);
    return response?.data;
  } catch (error) {
    return {
      error: true,
      response: error?.message ?? "Something went wrong",
    };
  }
};

export const fetchFilteredLocations = async (name) => {
  try {
    const response = await axios.get(`/location/?name=${name}`);
    return response?.data;
  } catch (error) {
        return {
      error: true,
      response: error?.message ?? "Something went wrong",
    };
  }
};

export const fetchLocationById = async (id) => {
  try {
    const response = await axios.get(`/location/${id}`);
    return response?.data;
  } catch (error) {
        return {
      error: true,
      response: error?.message ?? "Something went wrong",
    };
  }
}