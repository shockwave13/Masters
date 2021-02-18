import EStyleSheet from 'react-native-extended-stylesheet';
import {RFValue} from 'react-native-responsive-fontsize';
import fonts from 'constants/fonts';

export default EStyleSheet.create({
  topBlocStyle: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 15,
  },
  logoImageStyle: {
    width: 28,
    height: 32,
  },
  logoImageContainerStyle: {
    width: '$appHeight.$h63',
    height: '$appHeight.$h63',
    backgroundColor: '$primary',
    borderRadius: '$appHeight.$h10',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleTextStyle: {
    color: '$white',
    fontFamily: fonts.robotoBold,
    fontSize: RFValue(40),
    marginVertical: 15,
  },
  subTitleTextStyle: {
    color: '$white',
    fontFamily: fonts.robotoReguluar,
    fontSize: RFValue(15),
  },
  containerStyle: {
    flex: 0,
  },
  smallButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
