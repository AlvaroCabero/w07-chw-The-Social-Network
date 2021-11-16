import actionTypes from "../actions/actionTypes";

const usersReducer = (
  user = {
    isAuthenticated: false,
    user: {},
  },
  action
) => {
  let newUser;

  switch (action.type) {
    case actionTypes.userLogin:
      newUser = {
        isAuthenticated: true,
        user: action.user,
      };
      break;

    // case actionTypes.userSingUp:
    //   newUser = {
    //     isAuthenticated: false,
    //     user: action.user,
    //   };
    //   break;

    default:
      newUser = { ...user };
  }
  return newUser;
};

export default usersReducer;
