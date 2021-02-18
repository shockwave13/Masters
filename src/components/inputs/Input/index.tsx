import React, {useState} from 'react';
import {TextInput, View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Icon} from 'react-native-elements';

import {IInput} from './types';
import styles from './styles';
import globalStyles from 'constants/globalStyles';

const Input = ({
  containerStyle,
  inputContainerStyle,
  inputStyle,
  typeField = 'default',
  rightText,
  ...props
}: IInput) => {
  const [isPasswordShow, setPasswordShow] = useState(true);
  const disableColor = EStyleSheet.value('$gray');
  const activeColor = EStyleSheet.value('$primary');

  const onChangePasswordVisible = () => {
    setPasswordShow(!isPasswordShow);
  };

  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <View style={[styles.inputContainerStyle, inputContainerStyle]}>
        <TextInput
          {...props}
          secureTextEntry={typeField === 'secure' && isPasswordShow}
          placeholderTextColor={disableColor}
          style={[styles.inputStyle, inputStyle]}
        />
        {rightText ? (
          <Text style={[globalStyles.H4Gray, {marginLeft: 10}]}>
            {rightText}
          </Text>
        ) : typeField === 'secure' ? (
          <Icon
            name="ios-eye"
            type="ionicon"
            color={isPasswordShow ? disableColor : activeColor}
            onPress={onChangePasswordVisible}
          />
        ) : null}
      </View>
    </View>
  );
};

export default Input;
