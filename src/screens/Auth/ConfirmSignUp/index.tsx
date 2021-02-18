import React, {ReactElement, useState} from 'react';
import {View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';

import LinkButton from 'components/buttons/LinkButton';
import DefaultBgImageContainer from 'components/containers/DefaultBgImageContainer';
import Body from 'components/containers/Body';
import Input from 'components/inputs/Input';
import DefaultHeader from 'components/headers/DefaultHeader';
import Button from 'components/buttons/RegularButton';

import styles from './styles';
import globalStyles from 'constants/globalStyles';
import {IScreenProps} from 'types';
import {sendCodeOnPhone, submitSignUp} from 'store/auth';

export default function ConfirmSignUp({
  navigation,
  route,
}: IScreenProps): ReactElement {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const {phone, data} = route.params;
  const [code, setCode] = useState([] as string[]);

  const onSubmit = () => {
    if (code.length === 4) {
      const userCode = code.reduce(
        (code: string, currentValue: string) => code + currentValue,
      );

      dispatch(submitSignUp(phone, userCode, data, navigation));
    }
  };

  const setData = (index: number) => (value: string) => {
    const tempCode = [...code];

    tempCode[index] = value;

    setCode(tempCode);
  };

  const resendCode = () => {
    dispatch(sendCodeOnPhone(phone, () => {}));
  };

  return (
    <DefaultBgImageContainer>
      <DefaultHeader title={t('confirming')} />
      <Body>
        <Text style={globalStyles.H1Black}>{phone}</Text>
        <Text style={[globalStyles.H4Gray, {marginVertical: 20}]}>
          {t('weSentSms')}
        </Text>
        <View style={styles.smallInputsContainer}>
          <Input
            keyboardType="number-pad"
            inputStyle={styles.inputStyle}
            containerStyle={styles.inputContainerStyle}
            maxLength={1}
            value={code[0]}
            onChangeText={setData(0)}
          />
          <View style={globalStyles.horizontalDivider} />
          <Input
            keyboardType="number-pad"
            inputStyle={styles.inputStyle}
            containerStyle={styles.inputContainerStyle}
            maxLength={1}
            value={code[1]}
            onChangeText={setData(1)}
          />
          <View style={globalStyles.horizontalDivider} />
          <Input
            keyboardType="number-pad"
            inputStyle={styles.inputStyle}
            containerStyle={styles.inputContainerStyle}
            maxLength={1}
            value={code[2]}
            onChangeText={setData(2)}
          />
          <View style={globalStyles.horizontalDivider} />
          <Input
            keyboardType="number-pad"
            inputStyle={styles.inputStyle}
            containerStyle={styles.inputContainerStyle}
            maxLength={1}
            value={code[3]}
            onChangeText={setData(3)}
          />
        </View>
        <LinkButton
          title={t('sendAgain')}
          containerStyle={{alignSelf: 'center'}}
          onPress={resendCode}
        />

        <Button
          title={t('next')}
          onPress={onSubmit}
          containerStyle={{marginVertical: 10}}
        />
      </Body>
    </DefaultBgImageContainer>
  );
}
