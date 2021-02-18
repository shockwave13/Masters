import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';
import {RFValue} from 'react-native-responsive-fontsize';
import {IButtonAction} from '../types';
import styles from './styles';

const ButtonAction = ({
  title,
  onPress,
  titleStyle,
  buttonStyle,
  containerStyle,
  icon,
}: IButtonAction) => (
  <View style={[styles.containerStyle, containerStyle]}>
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.buttonStyle, buttonStyle]}>
        <Icon
          size={RFValue(35)}
          {...icon}
          color={EStyleSheet.value('$white')}
        />
        <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default ButtonAction;
