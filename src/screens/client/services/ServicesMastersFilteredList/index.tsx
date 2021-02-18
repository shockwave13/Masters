import React, {ReactElement} from 'react';
import {FlatList, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import DefaultBgImageContainer from 'components/containers/DefaultBgImageContainer';
import Body from 'components/containers/Body';
import DefaultHeader from 'components/headers/DefaultHeader';
import styles from './styles';
import FavoriteMaster from 'components/listItems/FavoriteMaster';
import ButtonIcon from 'components/buttons/ButtonIcon';
import Input from 'components/inputs/Input';
import Row from 'components/containers/Row';

const services = [
  {
    id: 0,
    user: {
      name: 'User',
      last_name: 'Name',
      photos: [
        {
          id: 0,
          url:
            'https://wowslider.com/sliders/demo-34/data1/images/mountain690104.jpg',
        },
        {
          id: 1,
          url:
            'https://wowslider.com/sliders/demo-34/data1/images/mountain690104.jpg',
        },
        {
          id: 2,
          url:
            'https://wowslider.com/sliders/demo-34/data1/images/mountain690104.jpg',
        },
        {
          id: 3,
          url:
            'https://wowslider.com/sliders/demo-34/data1/images/mountain690104.jpg',
        },
      ],
    },
    description: 'Мастер маникюра',
    rating: 3.5,
  },
];

export default function ServicesMastersFilteredList({
  navigation,
}: any): ReactElement {
  const {t} = useTranslation();

  const renderHeader = () => (
    <View>
      <DefaultHeader title={t('mastersList')} />
      <Row containerStyle={styles.searchBoxContainer}>
        <ButtonIcon
          iconName="filter-list"
          containerStyle={styles.searchIconContainerStyle}
          onPress={() => navigateTo('ServicesSearchFilters')}
        />
        <Input
          containerStyle={styles.searchInputContainerStyle}
          placeholder={t('typeYourRequest')}
        />
        <ButtonIcon
          iconName="search"
          containerStyle={styles.searchIconContainerStyle}
          onPress={() => navigateTo('ServicesSearchResult')}
        />
      </Row>
    </View>
  );

  const navigateTo = (screen: string, params?: object) => {
    navigation.navigate(screen, params);
  };

  const renderServices = ({item}: any) => {
    const {user, rating, description} = item;
    return (
      user && (
        <FavoriteMaster
          imagesList={user.photos}
          masterName={`${user.name} ${user.last_name}`}
          rating={rating}
          distance={1.5}
          serviceName={description}
          onPress={() => navigateTo('ServicesMasterDetails')}
        />
      )
    );
  };

  return (
    <DefaultBgImageContainer>
      {renderHeader()}
      <Body containerStyle={styles.bodyContainerStyle}>
        <FlatList
          data={services}
          renderItem={renderServices}
          contentContainerStyle={styles.flContainerStyle}
        />
      </Body>
    </DefaultBgImageContainer>
  );
}
