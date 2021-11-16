
import axios from "axios";
import {
  
  loadUsersAction,
  
} from "../actions/actionCreator";
import jwtDecode from "jwt-decode";

const response = await axios.get(urlAPI, {Authorization:`Bearer ${token}`}); 

const apiURL=

export const loadUsersThunks = () => async (dispatch) => {
  const { token } = JSON.parse(localStorage.getItem("superToken"));
  const response = await axios.get(`${apiURL}home/`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  dispatch(loadUsersAction(response.data));
};
