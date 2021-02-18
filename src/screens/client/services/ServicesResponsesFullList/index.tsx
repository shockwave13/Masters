import React, {ReactElement} from 'react';
import {SectionList, Text} from 'react-native';
import {useTranslation} from 'react-i18next';

import DefaultBgImageContainer from 'components/containers/DefaultBgImageContainer';
import Body from 'components/containers/Body';
import DefaultHeader from 'components/headers/DefaultHeader';

import styles from './styles';

import ListResponses from 'components/lists/ListResponses';
import RegularButton from 'components/buttons/RegularButton';

const responsesData = [
  {
    id: 0,
    user: {
      id: 0,
      first_name: 'Ахз',
      last_name: 'Чернецкая',
    },
    date: '27 января 2019',
    rating: 4,
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 2,
    user: {
      id: 0,
      first_name: 'Ахз',
      last_name: 'Чернецкая',
    },
    date: '27 января 2019',
    rating: 4,
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 3,
    user: {
      id: 0,
      first_name: 'Ахз',
      last_name: 'Чернецкая',
    },
    date: '27 января 2019',
    rating: 4,
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

export default function ServicesResponsesFullList({
  navigation,
}: any): ReactElement {
  const {t} = useTranslation();

  const navigateTo = (screen: string, params?: object) => {
    navigation.navigate(screen, params);
  };

  return (
    <DefaultBgImageContainer>
      <DefaultHeader title={t('responsesList')} />
      <Body containerStyle={styles.bodyContainerStyle}>
        <ListResponses data={responsesData} />
        <RegularButton
          title={t('writeResponse')}
          onPress={() => navigateTo('ServicesCreateResponse')}
        />
      </Body>
    </DefaultBgImageContainer>
  );
}
