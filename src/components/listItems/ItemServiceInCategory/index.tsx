import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';

import Row from 'components/containers/Row';
import ButtonIcon from 'components/buttons/ButtonIcon';

import styles from './styles';

interface IItemServiceInCategory {
  onPress?: () => void;
  imageSource?: string;
  title?: string;
  quantity: number;
}

const ItemServiceInCategory = ({
  onPress,
  imageSource,
  title,
  quantity,
}: IItemServiceInCategory) => (
  <Pressable onPress={onPress} style={styles.containerStyle}>
    <View style={styles.imageContainerStyle}>
      <Image
        source={
          imageSource
            ? {uri: imageSource}
            : require('../../../assets/icons/picPlaceholder.png')
        }
        resizeMode="cover"
        style={{flex: 1, height: null, width: null}}
      />
    </View>
    <Row containerStyle={styles.bottomContainerStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      <Row>
        <Text style={styles.qualityStyle}>{quantity}</Text>
        <ButtonIcon
          iconName="people"
          iconSize={25}
          containerStyle={styles.iconContainerStyle}
        />
      </Row>
    </Row>
  </Pressable>
);

export default ItemServiceInCategory;
