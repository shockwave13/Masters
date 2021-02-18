import fonts from 'constants/fonts';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  containerStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  buttonStyle: {
    height: '$appHeight.$h45',
    backgroundColor: '$primary',
    borderRadius: '$appHeight.$h25',
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledButtonStyle: {
    height: '$appHeight.$h45',
    backgroundColor: '$gray',
    borderRadius: '$appHeight.$h25',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteButtonStyle: {
    height: '$appHeight.$h45',
    backgroundColor: '$white',
    borderRadius: '$appHeight.$h25',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    fontFamily: fonts.robotoReguluar,
    fontSize: '$appFonts.$f15',
    color: '$white',
  },
  whiteButtonTitleStyle: {
    fontFamily: fonts.robotoReguluar,
    fontSize: '$appFonts.$f15',
    color: '$black',
  },
});

export default styles;
