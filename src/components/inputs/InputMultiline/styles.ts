import fonts from 'constants/fonts';
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
    minHeight: '$appHeight.$h150',
    fontSize: 15,
    fontFamily: fonts.robotoReguluar,
    paddingTop: '$appHeight.$h15',
    paddingBottom: '$appHeight.$h15',
  },
});

export default styles;
