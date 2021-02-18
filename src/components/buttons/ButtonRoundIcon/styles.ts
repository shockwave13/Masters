import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  containerIconStyle: {
    borderRadius: '$appHeight.$h35',
    width: '$appHeight.$h45',
    height: '$appHeight.$h45',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$primary',
  },
  containerRightStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    marginLeft: '$appHeight.$h15',
  },
  containerLeftStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    marginRight: '$appHeight.$h15',
  },
  containerStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
});
