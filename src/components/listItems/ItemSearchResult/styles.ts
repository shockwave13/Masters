import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  containerStyle: {},
  buttonStyle: {
    justifyContent: 'center',
    paddingHorizontal: '$appHeight.$h15',
    borderBottomWidth: 1,
    borderBottomColor: '$gray',
    paddingTop: '$appHeight.$h20',
    paddingBottom: '$appHeight.$h10',
  },
  serviceItemContainerStyle: {
    paddingVertical: '$appHeight.$h10',
  },
  serviceItemsContainerStyle: {
    paddingTop: '$appHeight.$h10',
    paddingHorizontal: '$appHeight.$h25',
  },
});

export default styles;
