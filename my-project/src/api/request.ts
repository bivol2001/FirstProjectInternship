import axios, { AxiosBasicCredentials } from "axios";
import { userInterface } from "../page/RegisterPage";
import { userLoginInterface } from "../page/LoginPage";


export const newUser = ({ email, password }: userInterface) => {
  return axios
    .post("https://reqres.in/api/register", { email, password })
    .then((response) => {
      console.log("Registration successful", response.data);
    })
    .catch((error) => {
      console.error(
        "Registration error: ",
        error.response?.data || error.message
      );
      throw error;
    });
};

export const login = ({ username, password }: userLoginInterface) => {
  return axios
    .post("https://reqres.in/api/login", { username, password })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Login error: ", error.response?.data || error.message);
      throw error;
    });
};
