import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {ILinkButton} from '../types';
import styles from './styles';

const LinkButton = ({
  title,
  titleBold,
  onPress,
  titleStyle,
  containerStyle,
}: ILinkButton) => (
  <View style={containerStyle}>
    <TouchableOpacity onPress={onPress}>
      <Text
        style={[
          styles.titleStyle,
          titleStyle,
          titleBold && {fontWeight: 'bold'},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  </View>
);

export default LinkButton;
