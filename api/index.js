export const API_URL = "https://api.nytimes.com/svc/topstories/v2";
export const API_KEY = "Zr1xxvARH1xSYni8cgAZyPKAy54k7iAY";

export const sections = [
  "arts",
  "automobiles",
  "books",
  "business",
  "fashion",
  "food",
  "health",
  "home",
  "insider",
  "magazine",
  "movies",
  "nyregion",
  "obituaries",
  "opinion",
  "politics",
  "realestate",
  "science",
  "sports",
  "sundayreview",
  "technology",
  "theater",
  "t-magazine",
  "travel",
  "upshot",
  "us",
  "world",
];

export function GET_NEWS_BY_SECTION({ section }) {
  return {
    url: `${API_URL}/${section ? section : "world"}.json?api-key=${API_KEY}`,
    options: {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    },
  };
}
