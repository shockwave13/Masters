import React from 'react';
import {TouchableOpacity, StyleProp} from 'react-native';
import {ViewStyle} from 'react-native-extended-stylesheet';
import {Icon} from 'react-native-elements';

import styles from './styles';
import EStyleSheet from 'react-native-extended-stylesheet';

interface ButtonIconProps {
  onPress?: () => void;
  iconName: string;
  iconType?: string;
  iconColor?: string;
  iconSize?: number;
  disabled?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  containerIconStyle?: StyleProp<ViewStyle>;
}

const ButtonIcon = ({
  onPress,
  iconName,
  iconType,
  iconColor = '#fff',
  disabled = false,
  iconSize = EStyleSheet.value('$appFonts.$f35'),
  containerIconStyle,
  containerStyle,
}: ButtonIconProps) => (
  <TouchableOpacity
    disabled={disabled}
    onPress={onPress}
    style={[styles.containerStyle, containerStyle]}>
    <Icon
      name={iconName}
      type={iconType}
      color={iconColor}
      size={iconSize}
      containerStyle={[styles.containerIconStyle, containerIconStyle]}
    />
  </TouchableOpacity>
);
export default ButtonIcon;
