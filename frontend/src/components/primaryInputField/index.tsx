import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { styles } from './style';

interface ICustomInput extends TextInputProps {}

const CustomInput: React.FC<ICustomInput> = ({ ...props }) => {
  return <TextInput style={styles.input} autoCapitalize="none" {...props} />;
};
export default CustomInput;
