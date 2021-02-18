import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  searchIconContainerStyle: {
    backgroundColor: '$primary',
    width: '$appHeight.$h48',
    height: '$appHeight.$h48',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '$appHeight.$h48',
  },
  bodyContainerStyle: {
    paddingHorizontal: 0,
  },
  topInputContainerStyle: {
    marginBottom: '$appHeight.$h20',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: '$appHeight.$h35',
  },
  sectionTitleStyle: {
    marginVertical: '$appHeight.$h15',
  },
  listContentContainerStyle: {
    paddingHorizontal: '$appWidth.$w25',
    marginVertical: '$appHeight.$h25',
  },
  searchInputContainerStyle: {
    marginHorizontal: '$appHeight.$h20',
    flex: 1,
  },
  paddingHorizontal: {
    paddingHorizontal: '$appHeight.$h25',
  },
  bottomButtonContainerStyle: {
    marginVertical: '$appHeight.$h25',
  },
});
