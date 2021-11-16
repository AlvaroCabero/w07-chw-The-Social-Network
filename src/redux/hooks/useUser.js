import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { userLoginAction } from "../actions/actionCreator";

import { userLoginThunk } from "../thunks/loginThunks";

const useUser = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const userLogin = useCallback(
    (user) => {
      dispatch(userLoginThunk(user));
    },
    [dispatch]
  );

  return { user, userLogin };
};

export default useUser;
