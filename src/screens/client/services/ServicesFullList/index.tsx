import React, {ReactElement} from 'react';
import {SectionList, Text} from 'react-native';
import {useTranslation} from 'react-i18next';

import DefaultBgImageContainer from 'components/containers/DefaultBgImageContainer';
import Body from 'components/containers/Body';
import DefaultHeader from 'components/headers/DefaultHeader';

import styles from './styles';
import ItemEntry from 'components/listItems/ItemEntry';

const items = [
  {
    section_title: 'Маникюр',
    data: [
      {
        title: 'Запись на запись',
      },
      {
        title: 'Запись на запись',
      },
      {
        title: 'Запись на запись',
      },
    ],
  },
  {
    section_title: 'Маникюр',
    data: [
      {
        title: 'Запись на запись',
      },
      {
        title: 'Запись на запись',
      },
      {
        title: 'Запись на запись',
      },
    ],
  },
];

export default function ServicesFullList({navigation}: any): ReactElement {
  const {t} = useTranslation();

  const navigateTo = (screen: string, params?: object) => {
    navigation.navigate(screen, params);
  };

  return (
    <DefaultBgImageContainer>
      <DefaultHeader title={t('servicesList')} />

      <Body containerStyle={styles.bodyContainerStyle}>
        <SectionList
          contentContainerStyle={styles.contentContainerStyle}
          sections={items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <ItemEntry
              onPressItem={() => navigateTo('ServicesAboutService')}
              title={item.title}
              priceFirst={150}
              durationFirst={30}
              useButtons
              isClientSide
            />
          )}
          stickySectionHeadersEnabled={false}
          renderSectionHeader={({section: {section_title}}) => (
            <Text style={styles.sectionTitleStyle}>{section_title}</Text>
          )}
        />
      </Body>
    </DefaultBgImageContainer>
  );
}
