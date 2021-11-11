import axios from "axios";

const baseUrl = `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_VERSION}`;

export default axios.create({
  baseURL: baseUrl,
  headers: {
    // "Authorizaton": `Bearer xxx`
  },
});