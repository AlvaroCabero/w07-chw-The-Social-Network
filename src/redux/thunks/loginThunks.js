import axios from "axios";
import { userSignUpAction, userLoginAction } from "../actions/actionCreator";
import jwtDecode from "jwt-decode";

const apiURL = process.env.REACT_APP_URL_API_HEROKU;

export const userSignUpThunk = (user) => async (dispatch) => {
  const response = await axios.post(`${apiURL}user/signup`, user);
  if (response.status === 200) {
    dispatch(userSignUpAction(response));
  }
};

export const userLoginThunk = (user) => async (dispatch) => {
  const response = await axios.post(`${apiURL}user/login`, user);
  if (response.status === 200) {
    const token = response.data.token;
    const user = jwtDecode(token);
    dispatch(userLoginAction(user));
    localStorage.setItem("tokenStorage", JSON.stringify({ token }));
  }
};
