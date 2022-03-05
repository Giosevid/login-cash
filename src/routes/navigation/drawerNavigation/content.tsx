import React from 'react';
import {View} from 'react-native';
import {Avatar, Title, Caption, Drawer} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import {useAuthContext} from '../../../context/Auth/AuthContext';

const DrawerContentNavigation = (props: any) => {
  const {authContext} = useAuthContext();
  return (
    <View style={styles.drawerContent}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri: 'https://media-exp1.licdn.com/dms/image/C4E03AQEmyYOlt53MOQ/profile-displayphoto-shrink_200_200/0/1596564008451?e=1651708800&v=beta&t=aIRRuUpZERARXHnf3ScX0wizmEdPfLn1Zf2Xs5FJx7U',
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>Giosevid Acosta</Title>
                <Caption style={styles.caption}>@giosevid</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => authContext.signOut()}
        />
      </Drawer.Section>
    </View>
  );
};

export default DrawerContentNavigation;
