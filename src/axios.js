import axios from "axios";

const instance = axios.create({
  baseURL: "https://corona.lmao.ninja/v2",
});

// instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE";

export default instance;
