import axios from "axios";

const getTopEntries = axios.create({
  baseURL: "https://www.reddit.com",
});

export default getTopEntries;
