import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import UserAvatar from 'components/picker/UserAvatar';

import styles from './styles';
import globalStyles from 'constants/globalStyles';
import {RFValue} from 'react-native-responsive-fontsize';
import ButtonIcon from 'components/buttons/ButtonIcon';

interface IItemClient {
  onPress?: () => void;
  clientName: string;
  address: string;
  phoneNumber?: string;
  imageSource?: string;
}

const ItemClient = ({
  onPress,
  address,
  clientName,
  phoneNumber,
  imageSource,
}: IItemClient) => (
  <View style={styles.containerStyle}>
    <View style={styles.itemContainerStyle}>
      <UserAvatar source={imageSource} smallAvatar />
      <View style={styles.textContainer}>
        <Text style={globalStyles.H4Black}>{clientName}</Text>
        <Text style={globalStyles.H4Gray}>{address}</Text>
      </View>
    </View>

    <ButtonIcon
      containerStyle={styles.iconContainerStyle}
      iconName="settings-phone"
    />
    <TouchableOpacity style={styles.iconContainerStyle}>
      <Icon name="settings-phone" color="#fff" size={RFValue(35)} />
    </TouchableOpacity>
  </View>
);

export default ItemClient;
