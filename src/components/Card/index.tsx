import React from 'react';
import {ViewStyle} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';

type Props = {
  children: React.ReactNode;
  stylesCard?: ViewStyle;
};

const Card = ({children, stylesCard}: Props) => {
  return (
    <Animatable.View
      style={[styles.container, stylesCard]}
      animation="fadeInUpBig">
      <>{children}</>
    </Animatable.View>
  );
};

export default Card;
