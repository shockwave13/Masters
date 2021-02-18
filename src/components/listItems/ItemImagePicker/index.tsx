import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';

import styles from './styles';

interface IItemImagePicker {
  onPress?: () => void;
  source?: string;
  editable?: boolean;
}

const ItemImagePicker = ({onPress, source, editable}: IItemImagePicker) => (
  <View style={styles.containerStyle}>
    <Image
      source={
        source
          ? {uri: source}
          : require('../../../assets/icons/picPlaceholder.png')
      }
      resizeMode="cover"
      style={styles.imageStyle}
    />
    {editable && (
      <TouchableOpacity onPress={onPress} style={styles.editIconContainerStyle}>
        <Icon
          name="pencil"
          type="material-community"
          color="#fff"
          size={RFValue(20)}
        />
      </TouchableOpacity>
    )}
  </View>
);

export default ItemImagePicker;
