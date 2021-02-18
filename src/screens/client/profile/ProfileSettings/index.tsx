import React, {ReactElement} from 'react';
import {View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import DefaultBgImageContainer from 'components/containers/DefaultBgImageContainer';
import ModalContainer from 'components/containers/ModalContainer';

import DefaultHeader from 'components/headers/DefaultHeader';

import styles from './styles';
import globalStyles from 'constants/globalStyles';
import {Icon} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';
import RegularButton from 'components/buttons/RegularButton';
import ButtonWithIcons from 'components/buttons/ButtonWithIcons';
import colors from 'constants/colors';

export default function ProfileSettings({navigation}: any): ReactElement {
  const {t} = useTranslation();

  const onPressButton = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <DefaultBgImageContainer>
      <DefaultHeader title={t('settings')} />
      <ModalContainer>
        <View style={styles.buttonsContainer}>
          <ButtonWithIcons
            smallButton
            onPress={() => onPressButton('ProfileChangePassword')}
            leftIcon={{
              name: 'shield',
              type: 'feather',
            }}
            title={t('changePassword')}
          />
          <ButtonWithIcons
            smallButton
            onPress={() => onPressButton('ProfileNotificationSettings')}
            leftIcon={{
              name: 'bell',
              type: 'feather',
            }}
            title={t('customizeNotifications')}
          />
        </View>
        <RegularButton whiteButton title={t('signOutFromAcc')} />
      </ModalContainer>
    </DefaultBgImageContainer>
  );
}
