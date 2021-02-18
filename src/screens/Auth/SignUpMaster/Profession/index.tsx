import React from 'react';
import {FlatList, SafeAreaView, View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';

import DefaultBgImageContainer from 'components/containers/DefaultBgImageContainer';
import DefaultHeader from 'components/headers/DefaultHeader';
import Body from 'components/containers/Body';
import ItemCheckBox from 'components/picker/ItemCheckBox';
import RegularButton from 'components/buttons/RegularButton';

import globalStyles from 'constants/globalStyles';

import {selectCategories} from 'store/catalogs/selectors';
import {selectSignUpData} from 'store/auth/selectors';
import {setSignUpValue} from 'store/auth';

export default function Profession({navigation, route}: any) {
  const {t} = useTranslation();
  const {activitiesId} = route.params;
  const dispatch = useDispatch();
  const activities = useSelector(selectCategories);
  const categoryId = useSelector(selectSignUpData).category_id;

  const professions = activities.find((item) => item.id === activitiesId)?.subs;

  const setData = (value: number[]) => {
    dispatch(setSignUpValue('category_id', value));
  };

  const onSelectProfession = (id: number, isSelected: boolean) => {
    if (isSelected) {
      setData(categoryId.filter((profession) => profession !== id));
    } else {
      setData([...categoryId, id]);
    }
  };

  const onPressProfession = () => {
    navigation.navigate('WorkAddress1');
  };

  const renderProfession = ({item}: any) => {
    const isSelected = Boolean(
      categoryId.find((profession) => profession === item.id),
    );
    return (
      <ItemCheckBox
        id={item.id}
        title={item.title}
        onPress={() => onSelectProfession(item.id, isSelected)}
        isActive={isSelected}
      />
    );
  };

  return (
    <DefaultBgImageContainer>
      <DefaultHeader title={t('profession')} />
      <Body>
        <SafeAreaView style={{flex: 1}}>
          <Text style={globalStyles.H4Gray}>{t('selectProfession')}</Text>
          <View style={{flex: 1}}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={professions}
              renderItem={renderProfession}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>

          <RegularButton title={t('next')} onPress={onPressProfession} />
        </SafeAreaView>
      </Body>
    </DefaultBgImageContainer>
  );
}
