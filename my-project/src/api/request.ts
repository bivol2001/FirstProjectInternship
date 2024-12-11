import axios, { AxiosBasicCredentials } from "axios";
import { userInterface } from "../page/RegisterPage";
import { userLoginInterface } from "../page/LoginPage";

export const newUser = ({
  email,
  firstName,
  lastName,
  phoneNumber,
  password,
}: userInterface) => {
  axios
    .post("/api/register", {
      email,
      firstName,
      lastName,
      phoneNumber,
      password,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const login = ({ username, password }: userLoginInterface) => {
  return axios
    .post("/api/login", {
      username,
      password,
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Login error: ", error);
      throw error;
    });
};
