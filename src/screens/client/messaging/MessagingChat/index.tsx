import React, {ReactElement} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';

import DefaultBgImageContainer from 'components/containers/DefaultBgImageContainer';
import Body from 'components/containers/Body';

import styles from './styles';
import {Icon} from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';
import UserAvatar from 'components/picker/UserAvatar';
import globalStyles from 'constants/globalStyles';
import Row from 'components/containers/Row';
import ItemMessage from 'components/listItems/ItemMessage';

const items = [
  {
    id: 0,
    message:
      'Привет, я хотел бы записаться на процедуру удаления татуировки на процедуру удаления татуировки…',
    user: {
      id: 0,
      avatar:
        'https://cbie.ca/wp-content/uploads/2018/08/female-placeholder-300x300.jpg',
    },
    date: '10 октября в 14:36',
  },
  {
    id: 1,
    message:
      'Привет, я хотел бы записаться на процедуру удаления татуировкиddddddddd',
    user: {
      id: 0,
      avatar:
        'https://cbie.ca/wp-content/uploads/2018/08/female-placeholder-300x300.jpg',
    },
    date: '10 октября в 14:36',
  },
  {
    id: 2,
    message:
      'Привет, я хотел бы записаться на процедуру удаления татуировки на процедуру удаления татуировки…',
    user: {
      id: 1,
      avatar:
        'https://cbie.ca/wp-content/uploads/2018/08/female-placeholder-300x300.jpg',
    },
    date: '10 октября в 14:36',
  },
  {
    id: 3,
    message:
      'Привет, я хотел бы записаться на процедуру удаления татуировки на процедуру удаления татуировки…',
    user: {
      id: 1,
      avatar:
        'https://cbie.ca/wp-content/uploads/2018/08/female-placeholder-300x300.jpg',
    },
    date: '10 октября в 14:36',
  },
];

export default function MessagingChat({navigation}: any): ReactElement {
  const {t} = useTranslation();

  const renderHeader = () => (
    <View style={styles.headerContainerStyle}>
      <View style={styles.headerTextContainer}>
        <Row containerStyle={styles.iconAndNameContainer}>
          <Icon
            name={'arrow-left'}
            type="feather"
            size={EStyleSheet.value('$appFonts.$f35')}
            color={'#fff'}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text style={globalStyles.H1White}>User Name</Text>
        </Row>

        <Text style={styles.masterProfessionTextStyle}>
          Мастер по чему то там
        </Text>
      </View>
      <UserAvatar smallAvatar />
    </View>
  );

  return (
    <DefaultBgImageContainer>
      {renderHeader()}

      <Body containerStyle={{paddingHorizontal: 0}}>
        <FlatList
          data={items}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={({item, index}) => (
            <ItemMessage
              userId={item.user.id}
              messageText={item.message}
              userAvatarUrl={item.user.avatar}
              date={item.date}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </Body>
    </DefaultBgImageContainer>
  );
}
