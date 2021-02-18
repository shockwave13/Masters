import EStyleSheet from 'react-native-extended-stylesheet';

import fonts from 'constants/fonts';

const styles = EStyleSheet.create({
  itemContainerStyle: {
    flexDirection: 'row',
    minHeight: '$appHeight.$h135',
    marginVertical: '$appHeight.$h7',
    borderRadius: 25,
    backgroundColor: '$white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    padding: '$appHeight.$h20',
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 1,
    marginLeft: 20,
    justifyContent: 'space-around',
  },
  dateTimeStyle: {
    color: '$gray',
    fontFamily: fonts.robotoReguluar,
    fontSize: '$appFonts.$f12',
  },
  descriptionStyle: {
    color: '$black',
    fontFamily: fonts.robotoReguluar,
    fontSize: '$appFonts.$f15',
  },
});

export default styles;
