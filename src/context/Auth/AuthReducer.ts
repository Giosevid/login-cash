export const RETRIEVE_LOGIN = 'retrieve_login';
export const LOGIN = 'login';
export const LOGOUT = 'logout';
export const REGISTER = 'register';

const AuthReducer = (prevState, action) => {
  switch (action.type) {
    case RETRIEVE_LOGIN:
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case LOGIN:
      return {
        ...prevState,
        userName: action.name,
        userToken: action.token,
        password: action.password,
        isLoading: false,
      };
    case LOGOUT:
      return {
        ...prevState,
        userName: null,
        userToken: null,
        isLoading: false,
      };
    case REGISTER:
      return {
        ...prevState,
        userName: action.userName,
        password: action.password,
        userToken: action.userToken,
        isLoading: false,
      };
    default:
      prevState;
  }
};

export default AuthReducer;
