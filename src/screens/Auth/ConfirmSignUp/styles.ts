import fonts from 'constants/fonts';
import EStyleSheet from 'react-native-extended-stylesheet';
import {RFValue} from 'react-native-responsive-fontsize';

export default EStyleSheet.create({
  smallInputsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  inputContainerStyle: {
    flex: 1,
  },
  inputStyle: {
    textAlign: 'center',
    fontSize: RFValue(28),
    fontFamily: fonts.robotoMedium,
  },
});
