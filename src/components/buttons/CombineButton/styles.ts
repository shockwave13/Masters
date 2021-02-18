import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  containerStyle: {},
  buttonContainerStyle: {
    backgroundColor: 'white',
    height: '$appHeight.$h46',
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  titleStyle: {
    textAlign: 'center',
  },
});

export default styles;
