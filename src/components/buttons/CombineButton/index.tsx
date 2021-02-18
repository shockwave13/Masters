import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {Icon, IconProps} from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';

import styles from './styles';

interface ICombineButtonProps {
  onPress: () => void;
  leftIcon?: IconProps;
  rightIcon?: IconProps;
  title: string;
}

const CombineButton = ({
  title,
  leftIcon,
  rightIcon,
  onPress,
}: ICombineButtonProps) => (
  <View style={styles.containerStyle}>
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonContainerStyle}>
        <View>{leftIcon ? <Icon {...leftIcon} /> : null}</View>
        <View style={{flex: 1}}>
          <Text style={styles.titleStyle}>{title}</Text>
        </View>
        <View>
          {rightIcon && (
            <Icon {...{...rightIcon, color: EStyleSheet.value('$gray')}} />
          )}
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

export default CombineButton;
