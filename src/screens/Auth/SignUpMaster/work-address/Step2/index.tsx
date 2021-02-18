import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import DefaultBgImageContainer from 'components/containers/DefaultBgImageContainer';
import DefaultHeader from 'components/headers/DefaultHeader';
import Body from 'components/containers/Body';
import Input from 'components/inputs/Input';
import RegularButton from 'components/buttons/RegularButton';
import globalStyles from 'constants/globalStyles';
import Switcher from 'components/switchers/Switcher';

import {selectSignUpData} from 'store/auth/selectors';
import {IStore} from 'store/types';
import {setSignUpValue} from 'store/auth';

import styles from './styles';

export default function WorkAddress({navigation}: any) {
  const {t} = useTranslation();
  const signUpState = useSelector((state: IStore) => selectSignUpData(state));
  const dispatch = useDispatch();
  const {street, city, address, region, country, show_full} = signUpState;

  const confidenceList = [
    {
      id: 0,
      icon: {
        name: 'crosshairs-gps',
        type: 'material-community',
        color: 'white',
      },
      title: t('onlyCity'),
    },
    {
      id: 1,
      icon: {name: 'map', type: 'material-community', color: 'white'},
      title: t('fullAddress'),
    },
  ];

  const setData = (field: string) => (value: any) => {
    dispatch(setSignUpValue(field, value));
  };

  const onPressNext = () => {
    navigation.navigate('WorkAddress3');
  };

  return (
    <DefaultBgImageContainer>
      <DefaultHeader title={t('workAddress')} />

      <Body>
        <SafeAreaView style={{flex: 1}}>
          <View style={{flex: 1}}>
            <Text style={globalStyles.H4Gray}>{t('confirmWorkAddress')}</Text>
            <Input
              placeholder={t('region')}
              value={region}
              onChangeText={setData('region')}
            />
            <Input
              placeholder={t('city')}
              value={city}
              onChangeText={setData('city')}
            />
            <Input
              placeholder={t('street')}
              value={street}
              onChangeText={setData('street')}
            />
            <Input
              placeholder={t('room')}
              value={address}
              onChangeText={setData('room')}
            />
            <Text style={globalStyles.H4Gray}>{t('selectConfidence')}</Text>
            <Switcher
              selectedItem={show_full}
              items={confidenceList}
              onPress={setData('show_full')}
            />
          </View>
          <RegularButton title={t('next')} onPress={onPressNext} />
        </SafeAreaView>
      </Body>
    </DefaultBgImageContainer>
  );
}
