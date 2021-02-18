import React from 'react';
import {View, TouchableOpacity, Text, StyleProp, ViewStyle} from 'react-native';

import CheckBox from 'components/checkboxes/CheckBox';

import styles from './styles';
import globalStyles from 'constants/globalStyles';

interface IItemCheckBoxProps {
  id: number;
  title: string;
  isActive: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  itemContainerStyle?: StyleProp<ViewStyle>;
  onPress: (id: number) => void;
}

const ItemCheckBox = ({
  id,
  title,
  isActive,
  containerStyle,
  itemContainerStyle,
  onPress,
}: IItemCheckBoxProps) => {
  const handlePressItem = () => {
    onPress(id);
  };

  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <TouchableOpacity onPress={handlePressItem}>
        <View style={[styles.itemContainerStyle, itemContainerStyle]}>
          <Text
            style={[
              isActive ? globalStyles.H4Black : globalStyles.H4Gray,
              {flex: 1},
            ]}>
            {title}
          </Text>
          <CheckBox isActive={isActive} onPress={handlePressItem} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ItemCheckBox;
