import axios from "axios";
import { userSignUpAction, userLoginAction } from "../actions/actionCreator";
import jwtDecode from "jwt-decode";

const apiURL = process.env.REACT_APP_URL_API_HEROKU;

export const userSignUpThunk = (user) => async (dispatch) => {
  const response = await axios.post(`${apiURL}users/signup`, user);
  if (response.status === 200) {
    dispatch(userSignUpAction(response));
  }
};

export const userLoginThunk = (user) => async (dispatch) => {
  const response = await axios.post(`${apiURL}users/login`, user);

  if (response.status === 200) {
    const token = response.data.token;
    const user = jwtDecode(token);
    dispatch(userLoginAction(user));
    localStorage.setItem("superToken", JSON.stringify({ token }));
  }
};
