import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  scrollContentContainerStyle: {
    flexGrow: 1,
    paddingBottom: '$appHeight.$h35',
    paddingTop: '$appHeight.$h15',
  },
  serviceNameContainerStyle: {
    alignItems: 'center',
    marginBottom: '$appHeight.$h15',
  },
  bodyContainerStyle: {
    paddingBottom: 0,
    paddingHorizontal: 0,
    paddingTop: 0,
  },
  generalElementsContainerStyle: {
    paddingHorizontal: '$appHeight.$h25',
    flex: 1,
  },
  buttonContainerStyle: {
    marginTop: '$appHeight.$h15',
  },
  bottomButtonContainerStyle: {
    marginTop: '$appHeight.$h15',
    paddingHorizontal: '$appHeight.$h25',
  },
});
