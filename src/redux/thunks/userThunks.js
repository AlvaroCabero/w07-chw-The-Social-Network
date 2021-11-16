import axios from "axios";
import { loadUsersAction } from "../actions/actionCreator";

const apiURL = process.env.REACT_APP_URL_API_HEROKU;

export const loadUsersThunks = () => async (dispatch) => {
  const { token } = JSON.parse(localStorage.getItem("superToken"));
  const response = await axios.get(`${apiURL}home/`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  dispatch(loadUsersAction(response.data));
};
