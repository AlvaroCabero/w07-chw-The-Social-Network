import actionTypes from "./actionTypes";

export const userLoginAction = (user) => ({
  type: actionTypes.userLogin,
  user,
});

export const userSignUpAction = () => ({
  type: actionTypes.userSignUp,
});

export const loadUsersAction = (users) => ({
  type: actionTypes.loadUsers,
  users,
});
