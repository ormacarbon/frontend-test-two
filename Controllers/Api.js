const Api = async (url) =>
  await fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log({ err });
    });

export default Api;
