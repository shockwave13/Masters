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

const imagesList = [
  {
    id: 0,
    uri: 'https://eskipaper.com/images/northern-lights-11.jpg',
  },
  {
    id: 1,
    uri: 'https://eskipaper.com/images/northern-lights-11.jpg',
  },
  {
    id: 2,
    uri: 'https://eskipaper.com/images/northern-lights-11.jpg',
  },
  {
    id: 3,
    uri: 'https://eskipaper.com/images/northern-lights-11.jpg',
  },
];

export default function ServicesAboutService({navigation}: any): ReactElement {
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

          <ListHorizontalPhotoCarousel data={imagesList} />
          <View style={styles.generalElementsContainerStyle}>
            <ItemEntry
              priceFirst={150}
              priceSecond={290}
              durationFirst={30}
              durationSecond={1}
              durationPreparation={15}
            />
            <Text style={globalStyles.H4GrayMarginVertical}>
              {t('detailedDescription')}
            </Text>
            <Text style={globalStyles.H4Black}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
            <RegularButton
              title={t('makeAnAppointment')}
              containerStyle={styles.buttonContainerStyle}
              onPress={() => {
                navigateTo('ServicesMakeAppointment');
              }}
            />
          </View>
        </ScrollView>
      </Body>
    </DefaultBgImageContainer>
  );
}
