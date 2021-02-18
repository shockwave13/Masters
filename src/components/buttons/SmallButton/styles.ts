import fonts from 'constants/fonts';
import EStyleSheet from 'react-native-extended-stylesheet';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = EStyleSheet.create({
  containerStyle: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
    paddingHorizontal: 5,
  },
  buttonStyle: {
    height: '$appHeight.$h75',
    backgroundColor: '$primary',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    fontFamily: fonts.robotoReguluar,
    fontSize: RFValue(15),
    color: '$white',
  },
});

export default styles;
