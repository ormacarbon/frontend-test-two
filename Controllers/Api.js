async function Api(url) {
  return await fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      throw new Error({ err });
    });
}

export default Api;
