import React, {ReactElement} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useTranslation} from 'react-i18next';
import moment from 'moment';

import RegularButton from 'components/buttons/RegularButton';
import Row from 'components/containers/Row';

import styles from './styles';

const Block = ({title, children}: {title: string; children: any}) => (
  <View>
    <Text style={styles.headerTitle}>{title}</Text>
    <View style={styles.blockContainer}>{children}</View>
  </View>
);

export default function CalendarAppointment({
  route,
  navigation,
}: any): ReactElement {
  const {t} = useTranslation();

  const {service} = route.params;

  const {price, hours, minutes, service: serviceData} = service.specialist_time;
  const {city, country, street} = service.specialist;

  const onCancelRecord = () => {
    navigation.goBack();
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.containerStyle}>
      <Text style={styles.headerTitleStyle}>{serviceData.description}</Text>

      <Block title={t('dateTime')}>
        <Row containerStyle={styles.rowBlock}>
          <Text>{moment(service.recorded).format('DD MMMM YYYY')}</Text>
          <Text>{moment(service.recorded).format('HH:MM')}</Text>
        </Row>
      </Block>

      <Block title={t('information')}>
        <Row containerStyle={styles.rowBlock}>
          <View style={{flex: 3}}>
            <Text style={styles.textStyle}>{`${hours} часов`}</Text>
            <Text style={styles.textStyle}>{`${minutes} минут`}</Text>
            <Text
              style={styles.textStyle}>{`${street}, ${city}, ${country}`}</Text>
          </View>
          <View style={styles.rowRightBlock}>
            <Text style={styles.hintStyle}>{price}грн.</Text>
            <Text style={styles.hintStyle}>
              {serviceData.prepare_time}мин. подгот.
            </Text>
          </View>
        </Row>
      </Block>

      <Text>Статус услуги: {service.status}</Text>

      <RegularButton
        whiteButton
        title={t('cancelAppointment')}
        containerStyle={styles.buttonContainerStyle}
        onPress={onCancelRecord}
      />
    </ScrollView>
  );
}
