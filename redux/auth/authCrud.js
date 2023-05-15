import axios from "axios";

export const AUTH_URL = `${process.env.REACT_APP_API_URL}/auth`;

export function login(login) {
  return axios.post(AUTH_URL, login);
}

export function forgetPassword(email) {
  return axios.post(AUTH_URL, { email })
}