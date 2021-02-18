import React, {ReactElement, useEffect} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import ItemRecord from 'components/listItems/ItemRecord';
import EmptyRecords from 'components/EmptyRecords';

import styles from './styles';

import {getArchiveRecords} from 'store/calendar';
import {selectClientArchiveServices} from 'store/calendar/selectors';

export default function CalendarArchive({navigation}: any): ReactElement {
  const dispatch = useDispatch();
  const archiveRecords = useSelector(selectClientArchiveServices);

  useEffect(() => {
    dispatch(getArchiveRecords());
  }, []);

  const renderItem = ({item}: any) => {
    return <ItemRecord item={item} navigation={navigation} />;
  };

  return (
    <FlatList
      data={archiveRecords}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.contentContainerStyle}
      ListEmptyComponent={EmptyRecords}
    />
  );
}
