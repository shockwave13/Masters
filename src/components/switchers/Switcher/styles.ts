import fonts from 'constants/fonts';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  containerStyle: {},
  itemContainerStyle: {
    flex: 1,
    height: '$appHeight.$h75',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    margin: 5,
  },
  itemTitleStyle: {
    fontFamily: fonts.robotoReguluar,
    fontSize: 15,
  },
  activeTitle: {
    color: '$white',
  },
  inactiveTitle: {
    color: '$gray',
  },
  activeItem: {
    backgroundColor: '$primary',
  },
  inactiveItem: {
    backgroundColor: 'white',
  },
});

export default styles;
