import fonts from 'constants/fonts';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  searchIconContainerStyle: {
    backgroundColor: '$primary',
    width: '$appHeight.$h48',
    height: '$appHeight.$h48',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '$appHeight.$h48',
  },
  bodyContainerStyle: {
    paddingHorizontal: 0,
  },
  topInputContainerStyle: {
    marginBottom: '$appHeight.$h20',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '$appWidth.$w15',
  },
  sectionTitleStyle: {
    marginVertical: '$appHeight.$h15',
  },
  listContentContainerStyle: {
    paddingHorizontal: '$appHeight.$h25',
    marginVertical: '$appHeight.$h25',
    paddingBottom: '$appHeight.$h45',
  },
  searchInputContainerStyle: {
    marginHorizontal: '$appWidth.$w15',
    flex: 1,
  },
  paddingHorizontal: {
    paddingHorizontal: '$appHeight.$h25',
  },

  searchBoxContainer: {
    paddingHorizontal: '$appWidth.$w15',
    marginBottom: '$appHeight.$h10',
  },

  headerTitleStyle: {
    color: '$gray',
    fontFamily: fonts.robotoReguluar,
    fontWeight: '400',
    fontSize: '$appFonts.$f20',
    marginBottom: 10,
  },
});
