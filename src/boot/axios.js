import { boot } from "quasar/wrappers";
import axios from "axios";

const getToken = () => {
  if (!localStorage.getItem("user")) {
    return "";
  }
  const { token } = JSON.parse(localStorage.getItem("user"));

  console.log("tokensss", token);
  if (token) {
    return token;
  } else {
    return "";
  }
};

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer " + getToken(),
  },
  withCredentials: true,
});

//samctum, crfs token
const crfsToken = axios.create({
  baseURL: "http://localhost:8000/",
  credentials: "include",
});
const apiUsers = axios.create({
  baseURL: "http://10.30.0.35:82/api",
  credentials: "include",
});

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;

  app.config.globalProperties.$api = api;

  app.config.globalProperties.$apiUsers = apiUsers;
  // api para conectar con gestion de recursos

  app.config.globalProperties.$crfsToken = crfsToken;
  // api para conectar con gestion de recursos y obtener el crfs
});

export { api, apiUsers, crfsToken };
