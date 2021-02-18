import React, {ReactElement} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';

import ListHorizontalPhotoCarousel from 'components/lists/ListHorizontalPhotoCarousel';
import DefaultBgImageContainer from 'components/containers/DefaultBgImageContainer';
import Body from 'components/containers/Body';

import styles from './styles';
import globalStyles from 'constants/globalStyles';
import DefaultHeader from 'components/headers/DefaultHeader';
import ItemEntry from 'components/listItems/ItemEntry';
import RegularButton from 'components/buttons/RegularButton';

export default function ServicesMakeAppointment({
  navigation,
}: any): ReactElement {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const navigateTo = (screen: string, params?: object) => {
    navigation.navigate(screen, params);
  };

  return (
    <DefaultBgImageContainer>
      <DefaultHeader title={t('aboutService')} />
      <Body containerStyle={styles.bodyContainerStyle}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContentContainerStyle}>
          <View style={styles.serviceNameContainerStyle}>
            <Text style={globalStyles.H1Black}>Combined manicure</Text>
          </View>

          <View style={styles.generalElementsContainerStyle}>
            <ItemEntry
              priceFirst={150}
              priceSecond={290}
              durationFirst={30}
              durationSecond={1}
              durationPreparation={15}
              address={'Улица Кн. Ольги 100К/2/85'}
            />
            <RegularButton
              whiteButton
              title={t('choseTimeAndDate')}
              containerStyle={styles.buttonContainerStyle}
            />
            {/* <Text style={globalStyles.H4GrayMarginVertical}>
              {t('detailedDescription')}
            </Text> */}
          </View>
          <RegularButton
            disabled
            title={t('makeAnAppointment')}
            containerStyle={styles.bottomButtonContainerStyle}
          />
        </ScrollView>
      </Body>
    </DefaultBgImageContainer>
  );
}
