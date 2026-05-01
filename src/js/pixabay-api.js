import axios from "axios";

const API_KEY = "55630805-566a496cfd8411b4d8839b448";

export function getImagesByQuery(query) {
  
  return axios.get("https://pixabay.com/api/", {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
    },
  })
  .then(response => response.data);
}