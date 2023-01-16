import axios from "axios";

export const fetchJoke = async () => {
  try {
    // fetching jokes and blocking nsfw, racist and sexist jokes
    const response = await axios.get(
      "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist"
    );
    return response?.data;
  } catch (error) {
    return {
      error: true,
      response: error?.message ?? "Something went wrong",
    };
  }
};
