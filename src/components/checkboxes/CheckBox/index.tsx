import React from 'react';

import {View, TouchableOpacity} from 'react-native';

import styles from './styles';

interface ICheckBoxProps {
  isActive: boolean;
  onPress?: () => void;
}

const CheckBox = ({isActive = false, onPress}: ICheckBoxProps) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.containerStyle}>
      {isActive ? <View style={styles.activeContainer} /> : null}
    </View>
  </TouchableOpacity>
);

export default CheckBox;
