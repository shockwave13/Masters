import EStyleSheet from 'react-native-extended-stylesheet';

import colors from 'constants/colors';

const styles = EStyleSheet.create({
  containerStyle: {
    // flexDirection: 'row',
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
    height: '$appHeight.$h50',
    backgroundColor: '$white',
    borderRadius: '$appHeight.$h20',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '$appHeight.$h20',
    flexDirection: 'row',
  },

  trackOnStyle: {
    borderWidth: 1,
    borderColor: colors.IconGray,
    height: 26,
    width: 50,
    alignItems: 'center',
    padding: 0,
    borderRadius: 5,
  },
  trackOffStyle: {
    borderWidth: 1,
    borderColor: colors.IconGray,
    height: 26,
    width: 50,
    alignItems: 'center',
    padding: 0,
    borderRadius: 5,
  },
  thumbOffStyle: {
    borderWidth: 0,
    backgroundColor: colors.IconGray,
    width: 20,
    height: 20,
    borderRadius: 5,
  },
  thumbOnStyle: {
    backgroundColor: colors.Primary,
    width: 20,
    height: 20,
    borderRadius: 5,
  },
});

export default styles;
