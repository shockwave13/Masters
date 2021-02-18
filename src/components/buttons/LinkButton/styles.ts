import fonts from 'constants/fonts';
import EStyleSheet from 'react-native-extended-stylesheet';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = EStyleSheet.create({
  titleStyle: {
    fontFamily: fonts.robotoReguluar,
    fontSize: RFValue(15),
    color: '$primary',
  },
});

export default styles;
