import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {ISmallButton} from '../types';
import styles from './styles';

const SmallButton = ({
  title,
  icon,
  onPress,
  titleStyle,
  buttonStyle,
  containerStyle,
}: ISmallButton) => (
  <View style={[styles.containerStyle, containerStyle]}>
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.buttonStyle, buttonStyle]}>
        {icon}
        <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default SmallButton;
