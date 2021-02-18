import React, {ReactElement, useState} from 'react';
import {Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';

import RegularButton from 'components/buttons/RegularButton';
import DefaultBgImageContainer from 'components/containers/DefaultBgImageContainer';
import Body from 'components/containers/Body';
import Input from 'components/inputs/Input';
import DefaultHeader from 'components/headers/DefaultHeader';

import globalStyles from 'constants/globalStyles';
import {isPhone} from 'utils/validation';
import {resetPassword} from 'store/auth';

type IData = {
  email: any;
  phone: any;
};

export default function ForgotPassword({navigation}: any): ReactElement {
  const {t} = useTranslation();
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const onSubmit = () => {
    if (isPhone(value)) {
      dispatch(resetPassword('phone', value));
    } else {
      dispatch(resetPassword('email', value));
    }
  };

  return (
    <DefaultBgImageContainer>
      <DefaultHeader title={t('forgotPassword')} />
      <Body>
        <Text
          style={[
            globalStyles.H4Gray,
            {textAlign: 'center', marginVertical: 20},
          ]}>
          {t('enterYourPhoneOrEmail')}
        </Text>
        <Input
          value={value}
          placeholder={t('phoneNumberOr')}
          inputContainerStyle={{marginBottom: 25}}
          onChangeText={(text) => setValue(text)}
        />
        <RegularButton title={t('send')} onPress={onSubmit} />
      </Body>
    </DefaultBgImageContainer>
  );
}
