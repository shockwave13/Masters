// import colors from 'constants/colors';
import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import Collapsible from 'react-native-collapsible';
import {ISwitchButton} from '../types';

import styles from './styles';
import globalStyles from 'constants/globalStyles';

const ButtonWithSwitch = ({
  title,
  onPress,
  titleStyle,
  buttonStyle,
  containerStyle,
  content,
}: ISwitchButton) => {
  const [switchValue, setSwitchValue] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <TouchableOpacity
        style={[styles.buttonStyle, buttonStyle]}
        onPress={() => setIsCollapsed(!isCollapsed)}>
        <Text
          style={[
            switchValue ? globalStyles.H4Black : globalStyles.H4Gray,
            titleStyle,
          ]}>
          {title}
        </Text>
        <ToggleSwitch
          isOn={switchValue}
          onColor="#fff"
          offColor="#fff"
          size="medium"
          onToggle={(isOn: boolean) => setSwitchValue(isOn)}
          trackOnStyle={styles.trackOnStyle}
          trackOffStyle={styles.trackOffStyle}
          thumbOffStyle={styles.thumbOffStyle}
          thumbOnStyle={styles.thumbOnStyle}
        />
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>{content}</Collapsible>
    </View>
  );
};

export default ButtonWithSwitch;
