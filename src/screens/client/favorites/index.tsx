import React, {ReactElement, useEffect} from 'react';
import {FlatList} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';

import DefaultBgImageContainer from 'components/containers/DefaultBgImageContainer';
import Body from 'components/containers/Body';
import DefaultHeader from 'components/headers/DefaultHeader';
import FavoriteMaster from '../../../components/listItems/FavoriteMaster';
import RegularButton from 'components/buttons/RegularButton';

import styles from './styles';

import {getFavorites} from 'store/client/favorites/actions';
import {selectFavorites} from 'store/client/favorites/selectors';
import {ISpecialist} from 'store/client/favorites/types';

export default function Favorites({navigation}: any): ReactElement {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const favoritesList = useSelector(selectFavorites);

  const renderFavoriteMaster = ({item}: {item: ISpecialist}) => {
    const {user} = item.specialist;
    const {specialist} = item;
    return (
      <FavoriteMaster
        imagesList={user.photos}
        masterName={`${user.name} ${user.last_name}`}
        rating={specialist.rating}
        serviceName={specialist.description}
        distance={1.5}
      />
    );
  };

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  return (
    <DefaultBgImageContainer>
      <DefaultHeader title={t('favorites')} dontUseLeftIcon />

      <Body containerStyle={styles.bodyContainerStyle}>
        <FlatList
          data={favoritesList}
          renderItem={renderFavoriteMaster}
          ListFooterComponent={
            <RegularButton
              title={t('goToSearch')}
              containerStyle={styles.bottomButtonContainerStyle}
            />
          }
          contentContainerStyle={styles.listContentContainerStyle}
          keyExtractor={(item) => item.id.toString()}
        />
      </Body>
    </DefaultBgImageContainer>
  );
}
