// import colors from 'constants/colors';
import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Collapsible from 'react-native-collapsible';

import styles from './styles';
import globalStyles from 'constants/globalStyles';
import EStyleSheet from 'react-native-extended-stylesheet';

interface IItemSearchResult {
  onPress: () => void;
  title: string;
  content?: any;
}

const ItemSearchResult = ({title, onPress, content}: IItemSearchResult) => {
  const [switchValue, setSwitchValue] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const RenderContent = () => {
    return content.map((item: any, index: number) => {
      return (
        <TouchableOpacity
          key={index.toString()}
          style={styles.serviceItemContainerStyle}>
          <Text style={globalStyles.H4Gray}>{item.name}</Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <View style={styles.containerStyle}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => setIsCollapsed(!isCollapsed)}>
        <Text
          style={[
            globalStyles.H4Black,
            !isCollapsed && {
              color: EStyleSheet.value('$primary'),
              fontWeight: 'bold',
            },
          ]}>
          {title}
        </Text>
      </TouchableOpacity>
      <Collapsible
        style={styles.serviceItemsContainerStyle}
        collapsed={isCollapsed}>
        {RenderContent()}
      </Collapsible>
    </View>
  );
};

export default ItemSearchResult;
