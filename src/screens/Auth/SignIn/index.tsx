import React, {ReactElement, useState} from 'react';
import {View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';

import RegularButton from 'components/buttons/RegularButton';
import LinkButton from 'components/buttons/LinkButton';
import DefaultBgImageContainer from 'components/containers/DefaultBgImageContainer';
import Body from 'components/containers/Body';
import Input from 'components/inputs/Input';
import DefaultHeader from 'components/headers/DefaultHeader';

import styles from './styles';
import globalStyles from 'constants/globalStyles';

import {signIn} from 'store/auth';
import {getLoginField} from 'utils/validation';

type IData = {
  phone: any;
  email: any;
  password: string;
};

export default function SignIn({navigation}: any): ReactElement {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    phone: undefined,
    email: undefined,
    password: '',
  } as IData);

  const setValue = (field: string) => (value: string) => {
    if (field === 'email') {
      setData({...data, ...getLoginField(value)});
    } else {
      setData({...data, [field]: value});
    }
  };

  const onPressSubmit = () => {
    dispatch(signIn(data));
  };

  return (
    <DefaultBgImageContainer>
      <DefaultHeader dontUseLeftIcon title={t('signIn')} />
      <Body>
        <View style={styles.topContainerStyle}>
          <RegularButton
            title="Facebook"
            containerStyle={styles.socialButtonContainerStyle}
            buttonStyle={{backgroundColor: '#4267B2'}}
          />
          <View style={globalStyles.horizontalDivider} />
          <RegularButton
            title="Google"
            containerStyle={styles.socialButtonContainerStyle}
            buttonStyle={{backgroundColor: '#DB4437'}}
          />
        </View>
        <Text
          style={[
            globalStyles.H4Gray,
            {textAlign: 'center', marginVertical: 20},
          ]}>
          {t('orUseMail')}
        </Text>

        <Input
          autoCapitalize="none"
          placeholder={t('phoneNumberOr')}
          onChangeText={setValue('email')}
        />

        <Input
          placeholder={t('password')}
          typeField="secure"
          onChangeText={setValue('password')}
        />
        <LinkButton
          containerStyle={styles.linkButtonContainerStyle}
          title={t('forgotPassword?')}
          onPress={() => navigation.navigate('ForgotPassword')}
        />

        <View style={styles.bottomContainerStyle}>
          <RegularButton title={t('login')} onPress={onPressSubmit} />
          <View style={styles.bottomTextContainerStyle}>
            <Text
              style={[
                globalStyles.H4Gray,
                {textAlign: 'center', marginVertical: 20},
              ]}>
              {t('alreadyHaveAcc')}
            </Text>
            <LinkButton
              title={t('registerNow')}
              onPress={() => navigation.navigate('SignUp')}
            />
          </View>
        </View>
      </Body>
    </DefaultBgImageContainer>
  );
}
