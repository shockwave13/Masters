import EStyleSheet from 'react-native-extended-stylesheet';
import {RFValue} from 'react-native-responsive-fontsize';
import fonts from 'constants/fonts';

const styles = EStyleSheet.create({
  containerStyle: {
    height: '$appHeight.$h70',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '$appHeight.$h35',
  },
  titleStyle: {
    fontFamily: fonts.robotoBold,
    fontSize: RFValue(26),
    color: '$white',
    textAlign: 'right',
    paddingLeft: 30,
  },
});

export default styles;
