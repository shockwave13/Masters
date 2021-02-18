import React from 'react';
import {View, Text} from 'react-native';
import moment from 'moment';
import {useDispatch} from 'react-redux';

import UserAvatar from 'components/picker/UserAvatar';
import ButtonIcon from 'components/buttons/ButtonIcon';

import {INewRecord} from 'store/calendar/types';
import {setServiceStatus} from 'store/calendar';

import styles from './styles';

interface IItemCalendarNewProps {
  item: INewRecord;
  withoutAction?: boolean;
}

const ItemCalendarNew = ({
  item,
  withoutAction = false,
}: IItemCalendarNewProps) => {
  const {name, last_name, avatar} = item.user;
  const {service, created_at} = item.specialist_time;
  const dispatch = useDispatch();

  const onPressAccept = () => {
    dispatch(setServiceStatus({id: item.id, status: 1}));
  };

  const onPressDecline = () => {
    dispatch(setServiceStatus({id: item.id, status: 2}));
  };

  return (
    <View>
      <View style={styles.headerTitleStyle}>
        <Text style={styles.titleStyle}>
          {moment(item.recorded).format('DD MMMM')}
        </Text>
      </View>
      <View style={styles.containerStyle}>
        <View style={styles.itemContainerStyle}>
          <UserAvatar source={avatar?.url} smallAvatar />
          <View style={styles.textContainer}>
            <Text style={styles.usernameStyle}>{`${name} ${last_name}`}</Text>
            <Text style={styles.dateStyle}>
              {moment(created_at).format('DD MMMM YYYY в HH:MM')}
            </Text>
            <Text numberOfLines={3} style={styles.descriptionStyle}>
              {service.description}
            </Text>
          </View>
        </View>
        {withoutAction ?? (
          <View style={styles.iconsContainer}>
            <ButtonIcon
              onPress={onPressAccept}
              iconName="check"
              iconType="material-community"
              iconColor="#fff"
              containerStyle={styles.iconContainerStyle}
            />
            <ButtonIcon
              iconName="x"
              iconType="feather"
              iconColor="#fff"
              containerStyle={styles.iconContainerStyle}
              onPress={onPressDecline}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default ItemCalendarNew;
