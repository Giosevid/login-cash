import React, {useState} from 'react';
import AuthStackScreen from './navigation/AuthStackScreen';
import DrawerNavigation from './navigation/drawerNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/Loader';
import {useAuthContext} from '../context/Auth/AuthContext';

const Routes = () => {
  const [loading, setLoading] = useState(true);
  const {authContext, authState} = useAuthContext();

  React.useEffect(() => {
    setTimeout(async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@userToken');
        console.log('jsonValue', jsonValue);
        if (jsonValue !== null) {
          const {token} = JSON.parse(jsonValue);
          console.log('userToken', token);
          authContext.retrieveLogin({token});
        } else {
          authContext.signOut();
        }
      } catch (e) {
        console.error('Error al buscar en storage');
      } finally {
        setLoading(false);
      }
    }, 1000);
  }, [authContext]);

  if (loading) {
    return <Loader />;
  }

  return authState.userToken ? <DrawerNavigation /> : <AuthStackScreen />;
};

export default Routes;
