import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  containerStyle: {
    marginVertical: '$appHeight.$h7',
  },
  inputContainerStyle: {
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 9.65,
    elevation: 8,
    alignItems: 'center',
    paddingHorizontal: 14,
    borderRadius: '$appHeight.$h25',
  },
  inputStyle: {
    flex: 1,
    height: '$appHeight.$h50',
    fontSize: 15,
  },
});

export default styles;
