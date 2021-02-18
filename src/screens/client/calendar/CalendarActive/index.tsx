import React, {ReactElement, useEffect} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import EmptyRecords from 'components/EmptyRecords';
import ItemRecord from 'components/listItems/ItemRecord';

import styles from './styles';

import {getActiveRecords} from 'store/calendar';
import {selectClientActiveServices} from 'store/calendar/selectors';

export default function CalendarActive({navigation}: any): ReactElement {
  const dispatch = useDispatch();
  const activeRecords = useSelector(selectClientActiveServices);

  useEffect(() => {
    dispatch(getActiveRecords());
  }, []);

  const renderItem = ({item}: any) => {
    return <ItemRecord item={item} navigation={navigation} />;
  };

  return (
    <FlatList
      data={activeRecords}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.contentContainerStyle}
      ListEmptyComponent={EmptyRecords}
    />
  );
}
