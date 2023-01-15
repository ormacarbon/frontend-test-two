import axios from "./index";

export const fetchEpisodes = async (page) => {
  try {
    const response = await axios.get(`/episode/?page=${page}`);
    return response?.data;
  } catch (error) {
    return {
      error: true,
      response: error?.message ?? "Something went wrong",
    };
  }
};

export const fetchFilteredEpisodes = async (name) => {
  try {
    const response = await axios.get(`/episode/?name=${name}`);
    return response?.data;
  } catch (error) {
    return {
      error: true,
      response: error?.message ?? "Something went wrong",
    };
  }
};

export const fetchEpisodeById = async (id) => {
  try {
    const response = await axios.get(`/episode/${id}`);
    return response?.data;
  } catch (error) {
    return {
      error: true,
      response: error?.message ?? "Something went wrong",
    };
  }
};
