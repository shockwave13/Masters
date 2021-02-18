import AsyncStorage from '@react-native-async-storage/async-storage';

export const setDataToStore = async (key: string, value: string | object) => {
  try {
    if (typeof value === 'string') {
      await AsyncStorage.setItem(key, value);
    } else {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    }
  } catch (e) {
    console.log('Error to async storage', e);
  }
};

export const getDataFromStore = async (
  key: string,
  isJsonValue: boolean = false,
) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      if (isJsonValue) {
        return JSON.parse(value);
      } else {
        return value;
      }
    }
  } catch (e) {
    console.log('Error reading from async storage', e);
  }
};
