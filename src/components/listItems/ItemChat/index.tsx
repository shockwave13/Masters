import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import UserAvatar from 'components/picker/UserAvatar';

import styles from './styles';
import globalStyles from 'constants/globalStyles';
import {RFValue} from 'react-native-responsive-fontsize';

interface IItemChat {
  onPress?: () => void;
  clientName?: string;
  lastMessage?: string;
  imageSource?: string;
  premium?: boolean;
}

const ItemChat = ({
  onPress,
  clientName,
  phoneNumber,
  lastMessage,
  imageSource,
  premium,
}: IItemChat) => (
  <TouchableOpacity onPress={onPress} style={styles.containerStyle}>
    <View style={styles.itemContainerStyle}>
      <UserAvatar source={imageSource} smallAvatar />
      <View style={styles.textContainer}>
        <Text style={globalStyles.H4Black}>{clientName}</Text>
        <Text
          numberOfLines={2}
          style={[
            styles.lastMessageTextStyle,
            premium && styles.lastMessageTextPremiumStyle,
          ]}>
          {lastMessage}
        </Text>
      </View>
    </View>

    <Icon
      containerStyle={styles.iconContainerStyle}
      name="check"
      color="#fff"
      size={RFValue(12)}
    />
  </TouchableOpacity>
);

export default ItemChat;
