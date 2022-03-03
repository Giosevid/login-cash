import React from 'react';
import * as Animatable from 'react-native-animatable';
import styles from './styles';

type Props = {
  children: React.ReactNode;
};

const Card = ({children}: Props) => {
  return (
    <Animatable.View style={styles.footer} animation="fadeInUpBig">
      <>{children}</>
    </Animatable.View>
  );
};

export default Card;
