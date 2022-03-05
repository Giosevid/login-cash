import React from 'react';
import AuthReducer, {
  LOGIN,
  LOGOUT,
  REGISTER,
  RETRIEVE_LOGIN,
} from './AuthReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = React.createContext({});

const AuthContextProvider = props => {
  const initialState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const [authState, authDispatch] = React.useReducer(AuthReducer, initialState);

  type SignInProps = {
    userName: string;
    password: string;
    token?: string | null;
  };

  const authContext = React.useMemo(
    () => ({
      signIn: async ({userName, password, token = null}: SignInProps) => {
        const user = {
          userName,
          password,
          token,
        };
        authDispatch({type: LOGIN, ...user});
        try {
          const jsonValue = JSON.stringify(user);
          await AsyncStorage.setItem('@userToken', jsonValue);
        } catch (e) {
          console.log(e);
        }
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('@userToken');
        } catch (e) {
          console.log(e);
        }
        authDispatch({type: LOGOUT});
      },
      signUp: async ({userName, password}: SignInProps) => {
        const user = {
          userName,
          password,
          userToken: '123456',
        };
        try {
          const userValue = JSON.stringify(user);
          await AsyncStorage.setItem('@userToken', userValue);
          authDispatch({type: REGISTER, ...user});
        } catch (e) {
          console.log(e);
        }
      },
      retrieveLogin: ({token}) => {
        if (token) {
          authDispatch({type: RETRIEVE_LOGIN, token});
        } else {
          authDispatch({type: LOGOUT});
        }
      },
    }),
    [],
  );

  const authContextValue = {
    authContext,
    authState,
  };

  return <AuthContext.Provider value={authContextValue} {...props} />;
};

const useAuthContext = () => React.useContext(AuthContext);

export {AuthContextProvider, useAuthContext};
