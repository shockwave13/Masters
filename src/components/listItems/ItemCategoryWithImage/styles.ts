import fonts from 'constants/fonts';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  containerStyle: {
    marginRight: 20,
    marginTop: 10,
    marginBottom: 20,
    width: '$appWidth.$w165',
    height: '$appHeight.$h160',
    borderRadius: 20,
    overflow: 'hidden',
  },

  titleContainerStyle: {
    backgroundColor: '$white',
    height: '$appHeight.$h30',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedTitleContainerStyle: {
    height: '$appHeight.$h30',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$primary',
  },
  selectedTitleStyle: {
    color: '$white',
  },
  label: {
    color: '$black',
    fontFamily: fonts.robotoReguluar,
    fontSize: '$appFonts.$f10',
  },
  selectedLabel: {
    color: '#fff',
    fontFamily: fonts.robotoReguluar,
    fontSize: '$appFonts.$f10',
  },
});

export default styles;
