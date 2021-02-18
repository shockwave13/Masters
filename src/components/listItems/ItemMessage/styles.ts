import fonts from 'constants/fonts';
import EStyleSheet from 'react-native-extended-stylesheet';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = EStyleSheet.create({
  containerStyle: {
    width: '100%',
  },

  messageStyleIncoming: {
    alignSelf: 'flex-start',
    backgroundColor: '$white',
    marginVertical: 3,
    marginRight: '$appHeight.$h35',
    borderRadius: '$appHeight.$h25',
    borderBottomLeftRadius: 0,
    padding: '$appHeight.$h10',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  messageStyleOutgoing: {
    alignSelf: 'flex-end',
    backgroundColor: '$primary',
    marginVertical: 3,
    marginLeft: '$appHeight.$h35',
    borderRadius: '$appHeight.$h25',
    borderBottomRightRadius: 0,
    padding: '$appHeight.$h10',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  messageContainerStyleIncoming: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  messageContainerStyleOutgoing: {
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
  },
  dateStyle: {
    color: '$gray',
    fontFamily: fonts.robotoReguluar,
    fontSize: '$appFonts.$f15',
    marginVertical: '$appHeight.$h15',
    alignSelf: 'center',
  },
  incomingMessageUserAvatarStyle: {
    width: '$appHeight.$h15',
    height: '$appHeight.$h15',
    borderRadius: '$appHeight.$h15',
    marginRight: '$appHeight.$h5',
  },
  outgoingMessageIconStyle: {
    width: '$appHeight.$h15',
    height: '$appHeight.$h15',
    borderRadius: '$appHeight.$h15',
    marginLeft: '$appHeight.$h5',
    backgroundColor: '$gray',
    justifyContent: 'center',
  },
});

export default styles;
