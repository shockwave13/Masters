import React, {ReactElement, useState} from 'react';
import {View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';

import DefaultBgImageContainer from 'components/containers/DefaultBgImageContainer';
import Body from 'components/containers/Body';
import DefaultHeader from 'components/headers/DefaultHeader';

import styles from './styles';
import globalStyles from 'constants/globalStyles';

import RegularButton from 'components/buttons/RegularButton';

import ButtonWithSwitch from 'components/buttons/ButtonWithSwitch';

export default function ProfileNotificationSettings({
  navigation,
}: any): ReactElement {
  const {t} = useTranslation();

  const inChat = [
    {
      id: 0,
      title: t('pushNotification'),
      enabled: false,
    },
    {
      id: 1,
      title: t('smsNotification'),
      enabled: false,
    },
    {
      id: 2,
      title: t('email'),
      enabled: false,
    },
  ];
  const forWrite = [
    {
      id: 0,
      title: t('pushNotification'),
      enabled: false,
    },
    {
      id: 1,
      title: t('smsNotification'),
      enabled: false,
    },
    {
      id: 2,
      title: t('email'),
      enabled: false,
    },
  ];

  const renderContent = () => {
    return (
      <View>
        <Text>'123</Text>
      </View>
    );
  };

  const RenderElements = (data: any) => {
    return data.map((item: any, index: number) => {
      return (
        <ButtonWithSwitch
          containerStyle={styles.buttonWithSwitchContainerStyle}
          title={item.title}
          key={index.toString()}
          content={renderContent()}
        />
      );
    });
  };

  return (
    <DefaultBgImageContainer>
      <DefaultHeader title={t('customizeNotifications')} />
      <Body>
        <Text style={globalStyles.H4Gray}>{t('messagesInChat')}</Text>
        <View style={styles.buttonsContainer}>{RenderElements(inChat)}</View>
        <Text style={globalStyles.H4Gray}>{t('messagesAboutWrites')}</Text>
        <View style={styles.buttonsContainer}>{RenderElements(forWrite)}</View>
        <View style={styles.bottomButtonContainer}>
          <RegularButton title={t('save')} />
        </View>
      </Body>
    </DefaultBgImageContainer>
  );
}
