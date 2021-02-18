import React, {ReactElement} from 'react';
import {FlatList} from 'react-native';
import {useTranslation} from 'react-i18next';
import DefaultBgImageContainer from 'components/containers/DefaultBgImageContainer';
import ModalContainer from 'components/containers/ModalContainer';

import DefaultHeader from 'components/headers/DefaultHeader';

import styles from './styles';

import ButtonWithIcons from 'components/buttons/ButtonWithIcons';

const data = [
  {
    id: 0,
    title: 'Львів',
  },
  {
    id: 1,
    title: 'Львів',
  },
  {
    id: 2,
    title: 'Львів',
  },
  {
    id: 3,
    title: 'Львів',
  },
  {
    id: 4,
    title: 'Львів',
  },
  {
    id: 5,
    title: 'Львів',
  },
];

export default function ServicesLocationDistrictFilter({
  navigation,
}: any): ReactElement {
  const {t} = useTranslation();

  const navigateTo = (screen: string, params?: object) => {
    navigation.navigate(screen, params);
  };

  const CityRenderItem = ({item}: any) => (
    <ButtonWithIcons
      onPress={() => navigateTo('ServicesMastersFilteredList')}
      title={item.title}
      containerStyle={styles.cityItemContainerStyle}
      smallButton
    />
  );

  return (
    <DefaultBgImageContainer>
      <DefaultHeader title={t('location')} />
      <ModalContainer bodyStyle={styles.bodyStyle}>
        <FlatList
          data={data}
          contentContainerStyle={styles.flatListContentContainerStyle}
          renderItem={({item}) => <CityRenderItem item={item} />}
        />
      </ModalContainer>
    </DefaultBgImageContainer>
  );
}
