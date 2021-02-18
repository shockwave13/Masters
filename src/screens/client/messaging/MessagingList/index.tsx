import React, {ReactElement} from 'react';
import {FlatList} from 'react-native';
import {useTranslation} from 'react-i18next';

import DefaultBgImageContainer from 'components/containers/DefaultBgImageContainer';
import Body from 'components/containers/Body';
import DefaultHeader from 'components/headers/DefaultHeader';
import ItemChat from 'components/listItems/ItemChat';

import styles from './styles';

const items = [
  {
    address:
      'Привет, я хотел бы записаться на процедуру удаления татуировки на процедуру удаления татуировки…',
    name: 'А. Чернецкая',
    avatar:
      'https://cbie.ca/wp-content/uploads/2018/08/female-placeholder-300x300.jpg',
  },
  {
    address: 'Привет',
    name: 'А. Чернецкая',
    avatar:
      'https://cbie.ca/wp-content/uploads/2018/08/female-placeholder-300x300.jpg',
  },
  {
    address: 'Здравствуйте, могу записать вас завтра на 12:00. Будет удобно?',
    name: 'А. Чернецкая',
    avatar:
      'https://cbie.ca/wp-content/uploads/2018/08/female-placeholder-300x300.jpg',
  },
  {
    address: 'Привет, я хотел бы записаться на процедуру удаления татуировки…',
    name: 'А. Чернецкая',
    avatar:
      'https://cbie.ca/wp-content/uploads/2018/08/female-placeholder-300x300.jpg',
  },
  {
    address: 'Здравствуйте, могу записать вас завтра на 12:00. Будет удобно?',
    name: 'А. Чернецкая',
    avatar:
      'https://cbie.ca/wp-content/uploads/2018/08/female-placeholder-300x300.jpg',
  },
  {
    address: 'Привет, я хотел бы записаться на процедуру удаления татуировки…',
    name: 'А. Чернецкая',
    avatar:
      'https://cbie.ca/wp-content/uploads/2018/08/female-placeholder-300x300.jpg',
  },
  {
    address: 'Здравствуйте, могу записать вас завтра на 12:00. Будет удобно?',
    name: 'А. Чернецкая',
    avatar:
      'https://cbie.ca/wp-content/uploads/2018/08/female-placeholder-300x300.jpg',
    premium: true,
  },
  {
    address: 'Здравствуйте, могу записать вас завтра на 12:00. Будет удобно?',
    name: 'А. Чернецкая',
    avatar:
      'https://cbie.ca/wp-content/uploads/2018/08/female-placeholder-300x300.jpg',
    premium: true,
  },
  {
    address: 'Здравствуйте, могу записать вас завтра на 12:00. Будет удобно?',
    name: 'А. Чернецкая',
    avatar:
      'https://cbie.ca/wp-content/uploads/2018/08/female-placeholder-300x300.jpg',
  },
];

export default function MessagingList({navigation}: any): ReactElement {
  const {t} = useTranslation();

  const navigateTo = (screen: string, params?: object) => {
    navigation.navigate(screen, params);
  };

  return (
    <DefaultBgImageContainer>
      <DefaultHeader title={t('incoming')} dontUseLeftIcon />
      <Body containerStyle={{paddingHorizontal: 0}}>
        <FlatList
          data={items}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={({item, index}) => (
            <ItemChat
              clientName={item.name}
              imageSource={item.avatar}
              lastMessage={item.address}
              premium={item.premium}
              onPress={() => navigateTo('MessagingChat')}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </Body>
    </DefaultBgImageContainer>
  );
}
