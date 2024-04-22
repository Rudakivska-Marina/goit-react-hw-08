import axios from "axios";

export const LogIn = axios.create({
  baseURL: "https://connections-api.herokuapp.com/",
});

export const setToken = (token) => {
  LogIn.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  LogIn.defaults.headers.common.Authorization = ``;
};