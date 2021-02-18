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
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
    marginVertical: '$appHeight.$h7',
  },
  buttonStyle: {
    backgroundColor: '$white',
    borderRadius: '$appHeight.$h25',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: '$appHeight.$h15',
  },
  smallButtonStyle: {
    paddingVertical: '$appHeight.$h10',
  },
  coloredButtonStyle: {
    backgroundColor: '$primary',
    borderRadius: '$appHeight.$h25',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: '$appHeight.$h15',
  },
  titleStyle: {
    fontFamily: fonts.robotoReguluar,
    fontSize: RFValue(15),
    color: '$black',
    flex: 1,
    marginHorizontal: '$appHeight.$h15',
  },
  coloredButtonTitleStyle: {
    color: '$white',
  },
  withoutLeftIconTitleStyle: {
    marginLeft: 0,
  },
});

export default styles;
