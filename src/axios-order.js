import axios from "axios";

const instance = axios.create({
  baseURL: "https://covid19-20d6a.firebaseio.com/",
});

export default instance;
