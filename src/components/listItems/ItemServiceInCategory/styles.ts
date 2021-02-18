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
    marginVertical: 10,
  },
  imageContainerStyle: {
    height: '$appHeight.$h190',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: 'hidden',
  },
  bottomContainerStyle: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  titleStyle: {
    fontFamily: fonts.robotoReguluar,
    fontSize: '$appFonts.$f20',
  },
  qualityStyle: {
    fontFamily: fonts.robotoReguluar,
    fontSize: '$appFonts.$f20',
    color: '$gray',
    marginRight: 5,
  },
  iconContainerStyle: {
    backgroundColor: '$primary',
    borderRadius: 25,
    padding: 5,
  },
});

export default styles;
