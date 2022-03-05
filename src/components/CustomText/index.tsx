import React, {FC} from 'react';
import {Text, TextStyle} from 'react-native';
import styles from './styles';

type CustomTextProps = {
  textType?: 'regular' | 'bold' | 'light';
  textStyle?: TextStyle | TextStyle[];
};

const CustomText: FC<CustomTextProps> = ({
  children,
  textStyle,
  textType = 'regular',
}) => {
  const applyStyle = {
    regular: styles.regular,
    bold: styles.bold,
    light: styles.light,
  };

  return <Text style={[textStyle, applyStyle[textType]]}>{children}</Text>;
};

export default CustomText;
