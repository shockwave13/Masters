import React, {ReactElement, useState} from 'react';
import {View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';

import Input from 'components/inputs/Input';
import DefaultHeader from 'components/headers/DefaultHeader';
import RegularButton from 'components/buttons/RegularButton';
import LinkButton from 'components/buttons/LinkButton';
import DefaultBgImageContainer from 'components/containers/DefaultBgImageContainer';
import Body from 'components/containers/Body';
import Switcher from 'components/switchers/Switcher';

import styles from './styles';
import globalStyles from 'constants/globalStyles';

import {IUser} from 'store/auth/types';
import {IStore} from 'store/types';
import {selectIsMaster} from 'store/auth/selectors';

import {getLoginField} from 'utils/validation';

import {setIsMasterValue, signUp} from 'store/auth';

export default function SignUp({navigation}: any): ReactElement {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const isMaster = useSelector((state: IStore) => selectIsMaster(state));

  const usersList = [
    {
      id: 0,
      icon: {
        name: 'account-circle',
        type: 'material-community',
        color: 'white',
      },
      title: t('client'),
    },
    {
      id: 1,
      icon: {
        name: 'supervised-user-circle',

        color: 'white',
      },
      title: t('specialist'),
    },
  ];
  const [data, setData] = useState({} as IUser);

  const setValue = (field: string) => (value: string) => {
    if (field === 'email') {
      setData({
        ...data,
        ...getLoginField(value),
      });
    } else {
      setData({
        ...data,
        [field]: value,
      });
    }
  };

  const setIsMaster = (id: number) => {
    dispatch(setIsMasterValue(id));
  };

  const onSubmit = () => {
    dispatch(
      signUp(data, (phone: string) => {
        navigation.navigate('ConfirmSignUp', {
          phone,
          data,
        });
      }),
    );
  };

  return (
    <DefaultBgImageContainer>
      <DefaultHeader dontUseLeftIcon title={t('registration')} />
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
        <View style={styles.smallInputsContainer}>
          <Input
            placeholder={t('firstName')}
            containerStyle={{flex: 1}}
            onChangeText={setValue('name')}
          />
          <View style={globalStyles.horizontalDivider} />
          <Input
            placeholder={t('secondName')}
            containerStyle={{flex: 1}}
            onChangeText={setValue('last_name')}
          />
        </View>
        <Input
          autoCapitalize="none"
          placeholder={t('phoneNumberOr')}
          onChangeText={setValue('email')}
        />
        <Input
          autoCapitalize="none"
          typeField="secure"
          placeholder={t('password')}
          onChangeText={setValue('password')}
        />
        <Switcher
          selectedItem={isMaster}
          items={usersList}
          onPress={setIsMaster}
        />
        <View style={styles.bottomContainerStyle}>
          <RegularButton title={t('createAcc')} onPress={onSubmit} />
          <View style={styles.bottomTextContainerStyle}>
            <Text
              style={[
                globalStyles.H4Gray,
                {textAlign: 'center', marginVertical: 20},
              ]}>
              {t('alreadyHaveAcc')}
            </Text>
            <LinkButton
              title={t('comeIn')}
              onPress={() => navigation.navigate('SignIn')}
            />
          </View>
        </View>
      </Body>
    </DefaultBgImageContainer>
  );
}
