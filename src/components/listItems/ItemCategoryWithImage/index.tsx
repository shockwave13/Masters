import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';

import styles from './styles';

interface IItemCategoryWithImage {
  onPress?: () => void;
  imageSource?: string;
  title?: string;
  selected?: boolean;
}

const ItemCategoryWithImage = ({
  onPress,
  imageSource,
  title,
  selected,
}: IItemCategoryWithImage) => (
  <Pressable style={styles.containerStyle} onPress={onPress}>
    <View style={{flex: 1}}>
      <Image
        source={
          imageSource
            ? {
                uri: imageSource,
              }
            : require('../../../assets/icons/picPlaceholder.png')
        }
        resizeMode="cover"
        style={{flex: 1, height: null, width: null}}
      />
    </View>
    <View
      style={
        selected
          ? styles.selectedTitleContainerStyle
          : styles.titleContainerStyle
      }>
      <Text style={selected ? styles.selectedLabel : styles.label}>
        {title}
      </Text>
    </View>
  </Pressable>
);

export default ItemCategoryWithImage;
