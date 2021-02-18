import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import DefaultBgImageContainer from 'components/containers/DefaultBgImageContainer';
import DefaultHeader from 'components/headers/DefaultHeader';
import Body from 'components/containers/Body';
import Label from 'components/texts/Label';
import Input from 'components/inputs/Input';
import Row from 'components/containers/Row';
import RegularButton from 'components/buttons/RegularButton';

import styles from './styles';

import {selectUser} from 'store/user/selectors';
import {updateProfile} from 'store/user';

interface IData {
  name: string;
  last_name: string;
  phone: string | null;
  email: string | null;
}

export default function ProfileEdit() {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [data, setData] = useState({
    name: user.name,
    last_name: user.last_name,
    phone: user.phone,
    email: user.email,
  } as IData);

  const setValue = (field: string) => (value: string) => {
    setData({
      ...data,
      [field]: value,
    });
  };

  const onSubmit = () => {
    dispatch(updateProfile(data));
  };

  return (
    <DefaultBgImageContainer>
      <DefaultHeader title={t('contacts')} />
      <Body>
        <View style={{flex: 1}}>
          <Label title="Уточните ваш рабочий адрес" />
          <Row>
            <Input
              value={data.name}
              onChangeText={setValue('name')}
              placeholder={t('name')}
              containerStyle={styles.nameContainerStyle}
            />
            <Input
              value={data.last_name}
              onChangeText={setValue('last_name')}
              placeholder={t('secondName')}
              containerStyle={styles.lastnameContainerStyle}
            />
          </Row>
          <Input
            value={data.email ? data.email : ''}
            onChangeText={setValue('email')}
            placeholder={t('email')}
          />
          <Input
            value={data.phone ? data.phone : ''}
            onChangeText={setValue('phone')}
            placeholder={t('phone')}
          />
        </View>

        <RegularButton title={t('next')} onPress={onSubmit} />
      </Body>
    </DefaultBgImageContainer>
  );
}
