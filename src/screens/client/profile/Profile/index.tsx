import React, {ReactElement} from 'react';
import {View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';

import LinkButton from 'components/buttons/LinkButton';
import UserAvatar from 'components/picker/UserAvatar';
import DefaultBgImageContainer from 'components/containers/DefaultBgImageContainer';
import Body from 'components/containers/Body';
import DefaultHeader from 'components/headers/DefaultHeader';
import RegularButton from 'components/buttons/RegularButton';
import ButtonWithIcons from 'components/buttons/ButtonWithIcons';

import styles from './styles';
import globalStyles from 'constants/globalStyles';

import {setIsMasterValue} from 'store/auth';
import {selectUser} from 'store/user/selectors';

export default function Profile({navigation}: any): ReactElement {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const onPressButton = (screenName: string) => {
    navigation.navigate(screenName);
  };

  const onChangeProfileMode = () => {
    dispatch(setIsMasterValue(1));
  };

  return (
    <DefaultBgImageContainer>
      <DefaultHeader dontUseLeftIcon title={t('myProfile')} />
      <Body>
        <View style={styles.topContainerStyle}>
          <UserAvatar source={user.img?.url} />
          <Text style={globalStyles.H1Black}>
            {/* {`${user.name} ${user.last_name}`} */}
          </Text>
          <LinkButton
            containerStyle={styles.linkButtonContainerStyle}
            title={t('editProfile')}
            titleBold
            onPress={() => onPressButton('ProfileEdit')}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <RegularButton
            whiteButton
            title={t('goToMasterMode')}
            containerStyle={styles.bottomButtonContainerStyle}
            onPress={onChangeProfileMode}
          />
          <ButtonWithIcons
            onPress={() => onPressButton('ProfileSettings')}
            leftIcon={{
              name: 'settings',
              type: 'feather',
            }}
            title={t('goToSettings')}
          />
          <ButtonWithIcons
            // onPress={() => onPressButton('ProfilePremiumPackage')}
            leftIcon={{
              name: 'help-circle',
              type: 'feather',
            }}
            title={t('goToSupportTeam')}
          />
        </View>
      </Body>
    </DefaultBgImageContainer>
  );
}
