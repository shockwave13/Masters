import React from 'react';
import {View, Text, Pressable} from 'react-native';
import moment from 'moment';

import UserAvatar from 'components/picker/UserAvatar';

import styles from './styles';
import globalStyles from 'constants/globalStyles';

interface IItemCalendarSchedule {
  onPress: () => void;
  clientName: string;
  title: string;
  dateTime: string;
  imageSource: string;
}

const ItemCalendarSchedule = ({
  onPress,
  clientName,
  title,
  dateTime,
  imageSource,
}: IItemCalendarSchedule) => (
  <Pressable onPress={onPress} style={styles.itemContainerStyle}>
    <View style={styles.avatarContainer}>
      <UserAvatar source={imageSource} smallAvatar />
    </View>
    <View style={styles.bodyContainer}>
      <Text style={globalStyles.H4Black}>{clientName}</Text>
      <Text style={styles.dateTimeStyle}>
        {moment(dateTime).format('DD MMMM YYYY в HH:mm')}
      </Text>
      <Text numberOfLines={3} style={styles.descriptionStyle}>
        {title}
      </Text>
    </View>
  </Pressable>
);

export default ItemCalendarSchedule;
