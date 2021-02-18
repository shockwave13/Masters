import React, {ReactElement, useState} from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';

import DefaultBgImageContainer from 'components/containers/DefaultBgImageContainer';
import ModalContainer from 'components/containers/ModalContainer';
import DefaultHeader from 'components/headers/DefaultHeader';
import RegularButton from 'components/buttons/RegularButton';
import Input from 'components/inputs/Input';

import styles from './styles';
import {changePassword} from 'store/user';

export default function ProfileChangePassword({navigation}: any): ReactElement {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    old_password: '',
    new_password: '',
  });

  const setValue = (field: string) => (value: string) => {
    setData({
      ...data,
      [field]: value,
    });
  };

  const onPressSubmit = () => {
    dispatch(changePassword(data, onSuccess));
  };

  const onSuccess = () => {
    navigation.goBack();
  };

  return (
    <DefaultBgImageContainer>
      <DefaultHeader title={t('changePassword')} />
      <ModalContainer>
        <View style={styles.buttonsContainer}>
          <Input
            typeField="secure"
            autoCapitalize="none"
            placeholder={t('previousPassword')}
            value={data.old_password}
            onChangeText={setValue('old_password')}
          />
          <Input
            typeField="secure"
            autoCapitalize="none"
            placeholder={t('newPassword')}
            value={data.new_password}
            onChangeText={setValue('new_password')}
          />
        </View>
        <RegularButton title={t('save')} onPress={onPressSubmit} />
      </ModalContainer>
    </DefaultBgImageContainer>
  );
}
