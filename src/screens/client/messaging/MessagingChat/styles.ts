import fonts from 'constants/fonts';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: '$appHeight.$h10',
    // flex: 1,
  },
  topNavButtonContainerStyle: {
    padding: '$appHeight.$h5',
    marginHorizontal: '$appHeight.$h12',
    backgroundColor: '$white',
    borderRadius: '$appHeight.$h12',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '$appHeight.$h30',
  },
  topNavButtonSelectedContainerStyle: {
    padding: '$appHeight.$h5',
    marginHorizontal: '$appHeight.$h12',
    backgroundColor: '$primary',
    borderRadius: '$appHeight.$h12',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '$appHeight.$h30',
  },
  topNavContainerStyle: {
    flexDirection: 'row',
    paddingHorizontal: '$appHeight.$h25',
    justifyContent: 'space-between',
    height: '$appHeight.$h50',
  },
  masterProfessionTextStyle: {
    color: '$white',
    fontFamily: fonts.robotoReguluar,
    fontSize: '$appFonts.$f15',
  },
  headerContainerStyle: {
    paddingHorizontal: '$appHeight.$h25',
    flexDirection: 'row',
    paddingVertical: '$appHeight.$h10',
  },
  headerTextContainer: {
    flex: 1,
    alignItems: 'flex-end',
    paddingHorizontal: '$appHeight.$h15',
  },
  iconAndNameContainer: {
    width: '100%',
    justifyContent: 'space-between',
  },
});
