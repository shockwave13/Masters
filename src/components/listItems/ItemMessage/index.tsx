import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import UserAvatar from 'components/picker/UserAvatar';

import styles from './styles';
import globalStyles from 'constants/globalStyles';
import {RFValue} from 'react-native-responsive-fontsize';
import EStyleSheet from 'react-native-extended-stylesheet';

interface IItemMessage {
  userId: number;
  userAvatarUrl?: string;
  messageText: string;
  date: string;
}

const ItemMessage = ({
  userId,
  userAvatarUrl,
  messageText,
  date,
}: IItemMessage) => {
  const currentUserId = 0;
  const isIncoming = userId === currentUserId;
  if (isIncoming) {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.dateStyle}>{date}</Text>
        <View style={styles.messageContainerStyleIncoming}>
          <Image
            source={{uri: userAvatarUrl}}
            style={styles.incomingMessageUserAvatarStyle}
          />
          <View style={styles.messageStyleIncoming}>
            <Text style={globalStyles.H4Black}>{messageText}</Text>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.dateStyle}>{date}</Text>
        <View style={styles.messageContainerStyleOutgoing}>
          <Icon
            name="check"
            color={EStyleSheet.value('$white')}
            size={EStyleSheet.value('$appFonts.$f14')}
            containerStyle={styles.outgoingMessageIconStyle}
          />
          <View style={styles.messageStyleOutgoing}>
            <Text style={globalStyles.H4White}>{messageText}</Text>
          </View>
        </View>
      </View>
    );
  }
};

export default ItemMessage;
