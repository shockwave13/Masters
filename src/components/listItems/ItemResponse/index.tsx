import React from 'react';
import Row from 'components/containers/Row';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';
import UserAvatar from 'components/picker/UserAvatar';
import globalStyles from 'constants/globalStyles';
import styles from './styles';

interface IResponseItem {
  item?: any;
  index?: number;
}

const ItemResponse = ({item, index}: IResponseItem) => (
  <Row containerStyle={styles.itemContainerStyle}>
    <View style={styles.avatarRatingContainerStyle}>
      <UserAvatar smallAvatar />
      <Icon
        name="star"
        color={EStyleSheet.value('$primary')}
        size={EStyleSheet.value('$appHeight.$h35')}
      />
      <Text style={globalStyles.H4Gray}>{item.rating}</Text>
    </View>
    <View style={styles.messageNameDateContainer}>
      <Row containerStyle={styles.nameDateContainer}>
        <Text style={globalStyles.H4Black}>
          {item.user.first_name.slice(0, 1) + '. ' + item.user.last_name}
        </Text>
        <Text style={globalStyles.H4Gray}>{item.date}</Text>
      </Row>
      <Text style={globalStyles.H4Black}>{item.message}</Text>
    </View>
  </Row>
);

export default ItemResponse;
