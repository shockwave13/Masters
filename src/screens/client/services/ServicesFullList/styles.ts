import fonts from 'constants/fonts';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: '$appHeight.$h25',
  },
  sectionTitleStyle: {
    color: '$gray',
    fontFamily: fonts.robotoReguluar,
    fontSize: '$appFonts.$f15',
    marginVertical: '$appHeight.$h15',
  },
  bodyContainerStyle: {paddingHorizontal: 0},
});
