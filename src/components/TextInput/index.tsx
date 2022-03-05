import React, {FC} from 'react';
import {
  View,
  TextInput as Input,
  TextInputEndEditingEventData,
  NativeSyntheticEvent,
  TouchableOpacity,
} from 'react-native';
import CustomText from '../CustomText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

type CustomInputProps = {
  label: string;
  iconName?: string;
  placeholder?: string;
  onChange: (text: string) => void;
  onEndEditing?: (
    val: NativeSyntheticEvent<TextInputEndEditingEventData>,
  ) => void;
  password?: boolean;
  viewPassword?: boolean;
  onPressEye?: () => void;
};

const TextInput: FC<CustomInputProps> = ({
  label,
  iconName,
  placeholder,
  onChange,
  onEndEditing,
  password,
  viewPassword,
  onPressEye,
}) => {
  const validateEyeIcon = viewPassword ? 'eye-slash' : 'eye';
  return (
    <View style={styles.container}>
      <CustomText>{label}</CustomText>
      <View style={styles.action}>
        {iconName ? <FontAwesome name={iconName} size={20} /> : null}
        <Input
          placeholder={placeholder}
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={onChange}
          onEndEditing={onEndEditing}
          secureTextEntry={password ? viewPassword : false}
        />
        {password ? (
          <TouchableOpacity onPress={onPressEye}>
            <FontAwesome name={validateEyeIcon} size={20} />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default TextInput;
