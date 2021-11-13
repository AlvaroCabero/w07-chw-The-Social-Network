import actionTypes from "./actionTypes";

export const userLoginAction = (user) => ({
  type: actionTypes.userLogin,
  user,
});

export const userSignUpAction = () => ({
  type: actionTypes.userSignUp,
});
