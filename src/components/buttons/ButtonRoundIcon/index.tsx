import React from 'react';
import {TouchableOpacity, StyleProp, Text} from 'react-native';
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
  title?: string;
  align?: 'left' | 'right';
}

const ButtonRoundIcon = ({
  onPress,
  iconName,
  iconType,
  iconColor = '#fff',
  disabled = false,
  iconSize = EStyleSheet.value('$appFonts.$f35'),
  title,
  align,
}: ButtonIconProps) => {
  const getAlignStyle = () => {
    switch (align) {
      case 'right':
        return styles.containerRightStyle;
      case 'left':
        return styles.containerLeftStyle;
      default:
        return styles.containerStyle;
    }
  };
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={getAlignStyle()}>
      <Icon
        name={iconName}
        type={iconType}
        color={iconColor}
        size={iconSize}
        containerStyle={styles.containerIconStyle}
      />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
export default ButtonRoundIcon;
