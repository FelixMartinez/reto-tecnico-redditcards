import axios from "axios";

const redditFirebase = axios.create({
  baseURL: "https://reto-tecnico-reddit-default-rtdb.firebaseio.com/",
});

export default redditFirebase;
