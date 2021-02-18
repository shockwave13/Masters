import fonts from 'constants/fonts';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    width: '100%',
  },
  itemContainerStyle: {
    flexDirection: 'row',
    height: '$appHeight.$h135',

    marginVertical: '$appHeight.$h7',
    borderRadius: '$appHeight.$h25',
    backgroundColor: '$white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    alignItems: 'center',
    padding: '$appHeight.$h20',
    flex: 1,
  },
  textContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    marginLeft: '$appHeight.$h20',
  },
  iconContainerStyle: {
    backgroundColor: '$primary',
    borderRadius: '$appHeight.$h50',
    width: '$appHeight.$h50',
    height: '$appHeight.$h50',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  iconsContainer: {
    // flex: 1,
    marginLeft: '$appHeight.$h15',
    justifyContent: 'space-evenly',
  },
  usernameStyle: {
    fontFamily: fonts.robotoReguluar,
    fontSize: '$appFonts.$f15',
  },
  dateStyle: {
    fontFamily: fonts.robotoReguluar,
    fontSize: '$appFonts.$f10',
    color: '$gray',
  },
  descriptionStyle: {
    fontFamily: fonts.robotoReguluar,
    fontSize: '$appFonts.$f13',
  },
  headerTitleStyle: {
    marginVertical: 24,
  },
  titleStyle: {
    fontFamily: fonts.robotoReguluar,
    fontSize: '$appFonts.$f15',
    color: '$gray',
  },
});

export default styles;
