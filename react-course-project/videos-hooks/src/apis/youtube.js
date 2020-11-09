import axios from "axios";

const KEY = "AIzaSyBpJhHCGL4ja8r89f8ukqmss4NPuPHKQTA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
