import EStyleSheet from 'react-native-extended-stylesheet';
import fonts from 'constants/fonts';

export default EStyleSheet.create({
  H1Black: {
    color: '$black',
    fontFamily: fonts.robotoBold,
    fontSize: '$appFonts.$f28',
    textAlign: 'center',
  },
  H1White: {
    color: '$white',
    fontFamily: fonts.robotoBold,
    fontSize: '$appFonts.$f28',
    textAlign: 'center',
  },
  H4Gray: {
    color: '$gray',
    fontFamily: fonts.robotoReguluar,
    fontSize: '$appFonts.$f15',
    marginVertical: 3,
  },
  H4White: {
    color: '$white',
    fontFamily: fonts.robotoReguluar,
    fontSize: '$appFonts.$f15',
    marginVertical: 3,
  },
  H4GrayMarginVertical: {
    color: '$gray',
    fontFamily: fonts.robotoReguluar,
    fontSize: '$appFonts.$f15',
    marginVertical: '$appHeight.$h20',
  },
  H4Black: {
    color: '$black',
    fontFamily: fonts.robotoReguluar,
    fontSize: '$appFonts.$f15',
    marginVertical: 3,
  },
  horizontalDivider: {
    width: '$appHeight.$h15',
  },
  verticalDividerStyle: {
    height: '$appHeight.$h15',
  },
});
