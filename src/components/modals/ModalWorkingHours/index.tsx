import React from 'react';
import {Modal, View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';
import moment from 'moment';

import styles from './styles';

interface IWorkHour {
  start: string;
  end: string;
}

interface IModalWorkingHoursProps {
  isModalVisible: boolean;
  selectedDate: object;
  onHideModal: () => void;
}

export default function ModalWorkingHours({
  isModalVisible,
  selectedDate,
  onHideModal,
}: IModalWorkingHoursProps) {
  const renderWorkHours = () => {
    const {workTime} = selectedDate;
    let start = moment(workTime.start);
    const diff = moment(workTime.end).diff(start, 'hours');
    const workHours = [];

    for (let i = 0; i <= diff; i++) {
      let temp_result = start.clone().add(i, 'hours');
      workHours.push(temp_result);
    }

    return workHours.map((hour, index) => (
      <View key={index} style={styles.hourContainer}>
        <Text style={styles.hourTitle}>{hour.format('HH:mm')}</Text>
      </View>
    ));
  };

  return (
    <Modal visible={isModalVisible} transparent>
      <View style={styles.backgroundContainer}>
        <View style={styles.windowContainer}>
          <Icon
            name="close"
            color={EStyleSheet.value('$primary')}
            containerStyle={styles.closeIconContainer}
            onPress={onHideModal}
          />
          <View style={styles.workingHoursContainer}>
            {selectedDate.workTime ? renderWorkHours() : null}
          </View>
        </View>
      </View>
    </Modal>
  );
}
