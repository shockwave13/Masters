import React from 'react';
import {TextInput, View, TextInputProps} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import styles from './styles';

interface IInputMultiline extends TextInputProps {}

const InputMultiline = ({...props}: IInputMultiline) => {
  const disableColor = EStyleSheet.value('$gray');

  return (
    <View style={styles.inputContainerStyle}>
      <TextInput
        {...props}
        placeholderTextColor={disableColor}
        style={styles.inputStyle}
        multiline
      />
    </View>
  );
};

export default InputMultiline;
