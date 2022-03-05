import {StackScreenProps} from '@react-navigation/stack';
import {DrawerNavigationProp} from '@react-navigation/drawer';

export type RootStackParamList = {
  Home: undefined;
  Details: {Slug: string};
  SignInScreen: undefined;
};

export type NavigationProps = StackScreenProps<RootStackParamList>;

export type NavigationDrawerProps = DrawerNavigationProp<RootStackParamList>;
