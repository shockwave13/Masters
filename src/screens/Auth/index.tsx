import React, {ReactElement, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Icon} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';

import SmallButton from 'components/buttons/SmallButton';
import DefaultBgImageContainer from 'components/containers/DefaultBgImageContainer';
import Body from 'components/containers/Body';

import styles from './styles';
import globalStyles from 'constants/globalStyles';
import images from 'constants/images';

export default function Auth({navigation}: any): ReactElement {
  const {t} = useTranslation();
  const [isMaster, setIsMaster] = useState(false);

  const onPressClient = () => {
    navigation.navigate('SignUp');
  };

  const onPressMaster = () => {
    setIsMaster(true);
  };

  const onPressSignIn = () => {
    navigation.navigate('SignIn');
  };

  const onPressSignUp = () => {
    navigation.navigate('SignUpMaster');
  };

  return (
    <DefaultBgImageContainer>
      <View style={styles.topBlocStyle}>
        <View style={styles.logoImageContainerStyle}>
          <Image style={styles.logoImageStyle} source={images.logo} />
        </View>
        <Text style={styles.titleTextStyle}>Masters</Text>
        <Text style={styles.subTitleTextStyle}>{t('bestMasters')}</Text>
      </View>
      <Body containerStyle={styles.containerStyle}>
        <Text style={[globalStyles.H1Black, {textAlign: 'center'}]}>
          {t('whoAreYou')}
        </Text>
        <Text
          style={[
            globalStyles.H4Gray,
            {textAlign: 'center', marginVertical: 20},
          ]}>
          {t('choseHow')}
        </Text>
        {isMaster ? (
          <View style={styles.smallButtonsContainer}>
            <SmallButton
              onPress={onPressSignIn}
              title={t('signIn')}
              icon={
                <Icon name="account-circle" color={'#fff'} size={RFValue(30)} />
              }
            />

            <SmallButton
              onPress={onPressSignUp}
              title={t('registration')}
              icon={
                <Icon
                  name="supervised-user-circle"
                  color={'#fff'}
                  size={RFValue(30)}
                />
              }
            />
          </View>
        ) : (
          <View style={styles.smallButtonsContainer}>
            <SmallButton
              onPress={onPressClient}
              title={t('client')}
              icon={
                <Icon name="account-circle" color={'#fff'} size={RFValue(30)} />
              }
            />

            <SmallButton
              onPress={onPressMaster}
              title={t('specialist')}
              icon={
                <Icon
                  name="supervised-user-circle"
                  color={'#fff'}
                  size={RFValue(30)}
                />
              }
            />
          </View>
        )}

        <View style={{flex: 1}}></View>
      </Body>
    </DefaultBgImageContainer>
  );
}
