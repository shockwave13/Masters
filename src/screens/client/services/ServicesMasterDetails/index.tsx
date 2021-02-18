import React, {ReactElement} from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import UserAvatar from 'components/picker/UserAvatar';
import ListHorizontalPhotoCarousel from 'components/lists/ListHorizontalPhotoCarousel';
import DefaultBgImageContainer from 'components/containers/DefaultBgImageContainer';
import Body from 'components/containers/Body';
import ButtonRoundIcon from 'components/buttons/ButtonRoundIcon';
import ItemEntry from 'components/listItems/ItemEntry';
import styles from './styles';
import globalStyles from 'constants/globalStyles';

import {Icon} from 'react-native-elements';
import StarRating from 'react-native-star-rating';
import Switcher from 'components/switchers/Switcher';
import LinkButton from 'components/buttons/LinkButton';
import RoundedContainerWithShadow from 'components/containers/RoundedContainerWithShadow';
import Row from 'components/containers/Row';
import ButtonIcon from 'components/buttons/ButtonIcon';
import ListDailySchedule from 'components/lists/ListDailySchedule';
import ListResponses from 'components/lists/ListResponses';

const items = [
  {
    title: 'Запись на запись',
    name: 'А. Чернецкая',
    date: '10 марта 2020 в 12:00',
    avatar:
      'https://cbie.ca/wp-content/uploads/2018/08/female-placeholder-300x300.jpg',
  },
  {
    title: 'Запись на запись',
    name: 'А. Чернецкая',
    date: '10 марта 2020 в 12:00',
    avatar:
      'https://cbie.ca/wp-content/uploads/2018/08/female-placeholder-300x300.jpg',
  },
  {
    title: 'Запись на запись',
    name: 'А. Чернецкая',
    date: '10 марта 2020 в 12:00',
    avatar:
      'https://cbie.ca/wp-content/uploads/2018/08/female-placeholder-300x300.jpg',
  },
];
const daysData = [
  {
    id: 0,
    schedule: '08:00 (12:00-13:00) 18:00',
  },
  {
    id: 1,
    schedule: '08:00 (12:00-13:00) 18:00',
  },
  {
    id: 2,
    schedule: '08:00 (12:00-13:00) 18:00',
  },
  {
    id: 3,
    schedule: '08:00 (12:00-13:00) 18:00',
  },
  {
    id: 4,
    schedule: '08:00 (12:00-13:00) 18:00',
  },
];
const responsesData = [
  {
    id: 0,
    user: {
      id: 0,
      first_name: 'Ахз',
      last_name: 'Чернецкая',
    },
    date: '27 января 2019',
    rating: 4,
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 2,
    user: {
      id: 0,
      first_name: 'Ахз',
      last_name: 'Чернецкая',
    },
    date: '27 января 2019',
    rating: 4,
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 3,
    user: {
      id: 0,
      first_name: 'Ахз',
      last_name: 'Чернецкая',
    },
    date: '27 января 2019',
    rating: 4,
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];
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

export default function ServicesMasterDetails({navigation}: any): ReactElement {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const communicationsTypes = [
    {
      id: 0,
      icon: {
        name: 'phone',
        color: 'white',
      },
      title: t('call'),
    },
    {
      id: 1,
      icon: {name: 'message', color: 'white'},
      title: t('write'),
    },
  ];

  const renderHeader = () => (
    <View style={styles.headerContainerStyle}>
      <Icon
        name="arrow-left"
        type="feather"
        size={EStyleSheet.value('$appFonts.$f35')}
        color={EStyleSheet.value('$primary')}
        onPress={() => navigation.goBack()}
      />
      <StarRating
        maxStars={5}
        rating={4.5}
        starSize={EStyleSheet.value('$appFonts.$f28')}
        fullStarColor={EStyleSheet.value('$primary')}
        emptyStarColor={EStyleSheet.value('$primary')}
        starStyle={styles.starStyle}
        containerStyle={styles.starRatingContainer}
      />
      <ButtonIcon
        iconName="heart"
        iconType="feather"
        iconColor="white"
        iconSize={20}
        containerStyle={styles.heartIconContainer}
      />
    </View>
  );

  const navigateTo = (screen: string, params?: object) => {
    navigation.navigate(screen, params);
  };

  const onPressSwitch = (id: number) => {};

  return (
    <DefaultBgImageContainer>
      <Body containerStyle={styles.bodyContainerStyle}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContentContainerStyle}>
          {renderHeader()}
          <View style={styles.topContainerStyle}>
            <UserAvatar smallAvatar />
            <View style={styles.masterNameContainerStyle}>
              <Text style={globalStyles.H1Black}>John Doe</Text>
              <Text
                style={[globalStyles.H4Black, {textAlign: 'center', flex: 1}]}>
                Тренер по фитнесу
              </Text>
            </View>
          </View>

          <ListHorizontalPhotoCarousel data={imagesList} />
          <View style={styles.generalElementsContainerStyle}>
            <Switcher
              activeAll
              items={communicationsTypes}
              onPress={(id: number) => onPressSwitch(id)}
            />
            <Text style={globalStyles.H4GrayMarginVertical}>
              {t('servicesProvided')}
            </Text>
            <FlatList
              data={items}
              contentContainerStyle={styles.contentContainerStyle}
              renderItem={({item}) => (
                <ItemEntry
                  onPressItem={() => null}
                  title={item.title}
                  priceFirst={150}
                  priceSecond={290}
                  durationFirst={30}
                  durationSecond={1}
                  durationPreparation={15}
                  useButtons
                  isClientSide
                />
              )}
              keyExtractor={(item, index) => item.title + index}
              ListFooterComponentStyle={styles.listFooterComponentStyle}
              ListFooterComponent={
                <LinkButton
                  title={t('showFullServicesList')}
                  onPress={() => navigateTo('ServicesFullList')}
                />
              }
            />
            <Text style={globalStyles.H4GrayMarginVertical}>
              {t('description')}
            </Text>
            <Text style={globalStyles.H4Black}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
            <Text style={globalStyles.H4GrayMarginVertical}>
              {t('servicePlaceOnMap')}
            </Text>
            <Row>
              <RoundedContainerWithShadow>
                <Text style={globalStyles.H4Black}>
                  Улица Кн. Ольги 100К/2/85
                </Text>
                <Text style={globalStyles.H4Gray}>Львов, Украина</Text>
              </RoundedContainerWithShadow>
              <ButtonRoundIcon
                iconName="not-listed-location"
                title={t('route.')}
                align="right"
              />
            </Row>
            <Text style={globalStyles.H4GrayMarginVertical}>
              {t('graphAndSchedule')}
            </Text>
            <ListDailySchedule data={daysData} />
            <Text style={globalStyles.H4GrayMarginVertical}>
              {t('responses')}
            </Text>
            <ListResponses
              data={responsesData}
              footerButton
              onPressFooterButton={() =>
                navigateTo('ServicesResponsesFullList')
              }
            />
          </View>
        </ScrollView>
      </Body>
    </DefaultBgImageContainer>
  );
}
