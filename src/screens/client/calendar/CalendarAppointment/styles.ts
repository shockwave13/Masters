import EStyleSheet from 'react-native-extended-stylesheet';
import fonts from 'constants/fonts';

export default EStyleSheet.create({
  containerStyle: {
    flexGrow: 1,
    paddingHorizontal: '$appWidth.$w15',
  },
  headerTitle: {
    color: '$gray',
    fontFamily: fonts.robotoReguluar,
    fontSize: '$appFonts.$f20',
    fontWeight: '400',
  },
  blockContainer: {
    marginVertical: '$appHeight.$h20',
  },
  rowBlock: {
    alignItems: 'flex-start',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  rowRightBlock: {
    alignItems: 'flex-end',
    flex: 2,
  },

  textStyle: {
    fontFamily: fonts.robotoReguluar,
    fontSize: '$appFonts.$f16',
  },
  hintStyle: {
    fontFamily: fonts.robotoReguluar,
    fontSize: '$appFonts.$f16',
    color: '$gray',
  },
  headerTitleStyle: {
    fontSize: '$appFonts.$f26',
    fontFamily: fonts.robotoBold,
    textAlign: 'center',
    marginBottom: 20,
  },

  buttonContainerStyle: {
    marginTop: '$appHeight.$h20',
  },
});
