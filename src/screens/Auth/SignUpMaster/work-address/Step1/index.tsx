import React from 'react';
import {SafeAreaView} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import Config from 'react-native-config';

import DefaultBgImageContainer from 'components/containers/DefaultBgImageContainer';
import DefaultHeader from 'components/headers/DefaultHeader';
import {setSignUpValue} from 'store/auth';
import Input from 'components/inputs/Input';
import EStyleSheet from 'react-native-extended-stylesheet';

interface ILocation {
  street?: string;
  city: string;
  country: string;
  address: string;
}

const googleInputStyles = {
  textInput: {
    borderRadius: 50,
    height: 50,
  },
  textInputContainer: {
    marginHorizontal: 20,
  },
  listView: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 5,
  },
  container: {
    flex: 1,
  },
};

export default function WorkAddress({navigation}: any) {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const gray = EStyleSheet.value('$gray');

  const setData = (field: string) => (value: string) => {
    dispatch(setSignUpValue(field, value));
  };

  const onSubmit = ({street = '', city, country, address}: ILocation) => {
    setData('street')(street);
    setData('city')(city);
    setData('country')(country);
    setData('address')(address);

    navigation.navigate('WorkAddress2');
  };

  const onPressAddress = (data: any, details: any = null) => {
    const {types, terms, description} = details;

    if (types[0] === 'street_address' || types[0] === 'route') {
      const street = terms[0].value;
      const city = terms[1].value;
      const country = terms[2].value;
      const address = description;

      onSubmit({street, city, country, address});
    } else if (types[0] === 'locality') {
      const city = terms[0].value;
      const country = terms[1].value;
      const address = description;

      onSubmit({city, country, address});
    }
  };
  return (
    <DefaultBgImageContainer>
      <DefaultHeader title={t('workAddress')} />
      <SafeAreaView style={{flex: 1}}>
        <Input
          placeholder="Название компании"
          onChangeText={setData('company_name')}
          containerStyle={{margin: 20, marginBottom: 20}}
        />
        <GooglePlacesAutocomplete
          placeholder={t('enterWorkAddress')}
          onPress={onPressAddress}
          query={{
            key: Config.GOOGLE_MAPS_API,
            language: 'en',
          }}
          textInputProps={{
            placeholderTextColor: gray,
          }}
          styles={googleInputStyles}
        />
      </SafeAreaView>
    </DefaultBgImageContainer>
  );
}
