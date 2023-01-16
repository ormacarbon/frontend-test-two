import axios from "axios";

export const pagination = (direction, page) => {
    switch (direction) {
        case "prev":
            return page === 1 ? page : page - 1;
        case "next":
            return page + 1;
        default:
            return page;
    }
}

export const getContentFromEndpoints = async (endpoints, currentName) => {
    const requests = endpoints.map((endpoint) =>
      axios.get(endpoint).catch(() => "")
    );
    let imageUrls = [];
    try {
      const responses = await Promise.all(requests);
      responses.forEach((response) => {
        if (response !== "") {
          const imagesList = {
            id: response?.data?.id,
            content: response?.data?.[currentName],
          };
          imageUrls.push(imagesList);
        }
      });
    } catch (error) {
      console.log(error);
    }
    return imageUrls;
}

export const formatDate = (target) => {
  const date = new Date(target);
  const options = { month: "2-digit", day: "2-digit", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
};