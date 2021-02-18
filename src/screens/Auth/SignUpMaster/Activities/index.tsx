import React, {useEffect} from 'react';
import {Text, FlatList, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';

import DefaultBgImageContainer from 'components/containers/DefaultBgImageContainer';
import DefaultHeader from 'components/headers/DefaultHeader';
import Body from 'components/containers/Body';
import ItemWithImage from 'components/listItems/ItemWithImage';

import globalStyles from 'constants/globalStyles';

import {getCategories} from 'store/catalogs/actions';
import {selectCategories} from 'store/catalogs/selectors';
import {IStore} from 'store/types';

export default function Activities({navigation}: any) {
  const {t} = useTranslation();
  const activities = useSelector((state: IStore) => selectCategories(state));
  const dispatch = useDispatch();

  const onPressActivities = (id: number) => {
    navigation.navigate('Profession', {
      activitiesId: id,
    });
  };

  const renderItemWithImage = ({item}: any) => (
    <ItemWithImage
      image={item.photo.url}
      title={item.title}
      onPress={() => onPressActivities(item.id)}
    />
  );

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <DefaultBgImageContainer>
      <DefaultHeader title={t('activities')} />

      <Body>
        <Text style={globalStyles.H4Gray}>{t('selectActivities')}</Text>
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={activities}
            renderItem={renderItemWithImage}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{flexGrow: 1}}
          />
        </View>
      </Body>
    </DefaultBgImageContainer>
  );
}
