import React, {useState} from 'react';
import {View, Dimensions, Text} from 'react-native';

import styles from './styles';
import RoundedContainerWithShadow from 'components/containers/RoundedContainerWithShadow';
import Row from 'components/containers/Row';
import {useTranslation} from 'react-i18next';
import globalStyles from 'constants/globalStyles';

interface IListDailySchedule {
  data?: any;
}
interface IDayItem {
  schedule?: string;
}
interface IDayItem {
  schedule?: string;
  index?: number;
}

const GetDay = (index) => {
  const {t} = useTranslation();
  const Days = [
    t('monday'),
    t('tuesday'),
    t('wednesday'),
    t('thursday'),
    t('friday'),
    t('saturday'),
    t('sunday'),
  ];
  return Days[index];
};

const DayItem = ({schedule, index}: IDayItem) => (
  <Row containerStyle={styles.dayItemContainerStyle}>
    <RoundedContainerWithShadow containerStyle={styles.dayContainerStyle}>
      <Text style={globalStyles.H4Black} numberOfLines={1}>
        {GetDay(index)}
      </Text>
    </RoundedContainerWithShadow>
    <RoundedContainerWithShadow>
      <Text style={globalStyles.H4Black}>{schedule}</Text>
    </RoundedContainerWithShadow>
  </Row>
);

const renderList = (data: any) => {
  return (
    data &&
    data.map((item: object, index: number) => {
      return <DayItem schedule={item.schedule} index={index} />;
    })
  );
};

const ListDailySchedule = ({data}: IListDailySchedule) => {
  return <View style={styles.containerStyle}>{renderList(data)}</View>;
};

export default ListDailySchedule;
