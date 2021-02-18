import fonts from 'constants/fonts';
import EStyleSheet from 'react-native-extended-stylesheet';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = EStyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  itemContainerStyle: {
    flexDirection: 'row',
    height: '$appHeight.$h60',
    marginRight: '$appHeight.$h15',
    marginVertical: '$appHeight.$h7',
    borderRadius: '$appHeight.$h25',
    alignItems: 'center',
    padding: '$appHeight.$h7',
    flex: 1,
  },
  textContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: '$appHeight.$h20',
  },
  iconContainerStyle: {
    backgroundColor: '$gray',
    borderRadius: '$appHeight.$h20',
    width: '$appHeight.$h15',
    height: '$appHeight.$h15',
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
  lastMessageTextStyle: {
    marginTop: 4,
    color: '$gray',
    fontFamily: fonts.robotoReguluar,
    fontSize: RFValue(13),
  },
  lastMessageTextPremiumStyle: {
    fontFamily: fonts.robotoBold,
    color: '$primary',
  },
});

export default styles;
