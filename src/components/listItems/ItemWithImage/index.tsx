import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

import styles from './styles';

interface IItemWithImageProps {
  onPress: () => void;
  title: string;
  image: string;
}

const ItemWithImage = ({onPress, title, image}: IItemWithImageProps) => (
  <View style={styles.containerStyle}>
    <TouchableOpacity onPress={onPress}>
      <View style={styles.itemContainerStyle}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: image}}
            resizeMode="cover"
            style={{flex: 1, width: null, height: null}}
          />
        </View>
        <View style={{flex: 3, paddingHorizontal: 15}}>
          <Text>{title}</Text>
        </View>
        <Icon
          name="arrow-right"
          type="material-community"
          color="black"
          size={25}
        />
      </View>
    </TouchableOpacity>
  </View>
);

export default ItemWithImage;
