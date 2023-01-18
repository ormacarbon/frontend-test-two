import axios from "axios";

export async function validationEmail(number) {
  const BASE_URL = "https://phonevalidation.abstractapi.com/v1/",
    API_KEY = "a218c2876d8747cda8b6ff28a5322a3b";

  axios
    .get(`${BASE_URL}?api_key=${API_KEY}&email=${number}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
