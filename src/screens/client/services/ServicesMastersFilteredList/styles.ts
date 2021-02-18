import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  bodyContainerStyle: {
    paddingHorizontal: 0,
  },
  flContainerStyle: {
    paddingHorizontal: 15,
  },
  searchIconContainerStyle: {
    backgroundColor: '$primary',
    width: '$appHeight.$h48',
    height: '$appHeight.$h48',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '$appHeight.$h48',
  },
  searchBoxContainer: {
    paddingHorizontal: '$appWidth.$w15',
    marginBottom: '$appHeight.$h10',
  },
  searchInputContainerStyle: {
    marginHorizontal: '$appWidth.$w15',
    flex: 1,
  },
});
