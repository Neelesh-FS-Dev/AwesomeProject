import {View, Text, TextInput, TextInputProps} from 'react-native';
import React from 'react';

const InputComponent = (props: TextInputProps) => {
  return <TextInput {...props} />;
};

export default InputComponent;
