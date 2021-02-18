import fonts from 'constants/fonts';
import EStyleSheet from 'react-native-extended-stylesheet';
import {RFValue} from 'react-native-responsive-fontsize';

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
    flex: 1,
  },
  buttonStyle: {
    height: '$appHeight.$h75',
    backgroundColor: '$primary',
    borderRadius: '$appHeight.$h25',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleStyle: {
    fontFamily: fonts.robotoReguluar,
    fontSize: RFValue(16),
    color: '$white',
  },
});

export default styles;
