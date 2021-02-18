import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';

import {IButtonWithIcons} from '../types';
import styles from './styles';

import colors from 'constants/colors';

const ButtonWithIcons = ({
  title,
  onPress,
  titleStyle,
  buttonStyle,
  containerStyle,
  coloredButton,
  leftIcon,
  smallButton,
}: IButtonWithIcons) => (
  <View style={[styles.containerStyle, containerStyle]}>
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          coloredButton ? styles.coloredButtonStyle : styles.buttonStyle,
          buttonStyle,
          smallButton && styles.smallButtonStyle,
        ]}>
        {leftIcon && (
          <Icon
            size={EStyleSheet.value('$appFonts.$f30')}
            color={colors.IconGray}
            {...leftIcon}
          />
        )}
        <Text
          numberOfLines={2}
          style={[
            styles.titleStyle,
            coloredButton && styles.coloredButtonTitleStyle,
            !leftIcon && styles.withoutLeftIconTitleStyle,
            titleStyle,
          ]}>
          {title}
        </Text>
        <Icon
          name="arrow-right"
          type="feather"
          color={coloredButton ? '#fff' : colors.IconGray}
          size={EStyleSheet.value('$appFonts.$f40')}
        />
      </View>
    </TouchableOpacity>
  </View>
);

export default React.memo(ButtonWithIcons, (prevProps, nextProps) => {
  return (
    prevProps.leftIcon?.name === nextProps.leftIcon?.name &&
    prevProps.onPress === nextProps.onPress
  );
});
