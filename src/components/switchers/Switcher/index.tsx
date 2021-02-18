import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Icon, IconProps} from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';

import styles from './styles';
interface ISwitcherItem {
  id: number;
  icon: IconProps;
  title: string;
}

interface ISwitcherProps {
  selectedItem?: number;
  items: ISwitcherItem[];
  onPress: (id: number) => void;
  activeAll: boolean;
}

interface ISwitcherItemProps {
  isActive: boolean;
  title: string;
  icon: any;
  onPress: () => void;
}

export const SwitcherItem = ({
  isActive = false,
  title,
  icon,
  onPress,
}: ISwitcherItemProps) => (
  <TouchableOpacity
    style={[
      styles.itemContainerStyle,
      isActive ? styles.activeItem : styles.inactiveItem,
    ]}
    onPress={onPress}>
    <Icon
      {...icon}
      color={
        isActive ? EStyleSheet.value('$white') : EStyleSheet.value('$gray')
      }
    />
    <Text
      style={[
        styles.itemTitleStyle,
        isActive ? styles.activeTitle : styles.inactiveTitle,
      ]}>
      {title}
    </Text>
  </TouchableOpacity>
);

const Switcher = ({
  selectedItem,
  items,
  onPress,
  activeAll,
}: ISwitcherProps) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {items.map((item, index) => (
        <SwitcherItem
          key={index}
          isActive={activeAll || selectedItem === item.id}
          {...item}
          onPress={() => onPress(item.id)}
        />
      ))}
    </View>
  );
};

export default Switcher;
