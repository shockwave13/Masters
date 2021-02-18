import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {IRegularButton} from '../types';
import styles from './styles';

const RegularButton = ({
  title,
  onPress,
  titleStyle,
  buttonStyle,
  containerStyle,
  whiteButton,
  disabled,
}: IRegularButton) => (
  <View style={[styles.containerStyle, containerStyle]}>
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <View
        style={[
          disabled
            ? styles.disabledButtonStyle
            : whiteButton
            ? styles.whiteButtonStyle
            : styles.buttonStyle,
          buttonStyle,
        ]}>
        <Text
          style={[
            whiteButton ? styles.whiteButtonTitleStyle : styles.titleStyle,
            titleStyle,
          ]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default RegularButton;
