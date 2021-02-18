import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  topContainerStyle: {
    alignItems: 'center',
  },
  linkButtonContainerStyle: {
    alignSelf: 'center',
    marginTop: 15,
  },
  shareIconContainerStyle: {
    position: 'absolute',
    right: 0,
  },
  buttonsContainer: {
    marginVertical: '$appHeight.$h15',
  },
  bottomButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  dividerStyle: {
    height: '$appHeight.$h15',
  },
  buttonWithSwitchContainerStyle: {
    marginBottom: '$appHeight.$h15',
  },
});
