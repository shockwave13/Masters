import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: '$appHeight.$h25',
    // flex: 1,
  },
  topNavButtonContainerStyle: {
    padding: '$appHeight.$h5',
    marginHorizontal: '$appHeight.$h12',
    backgroundColor: '$white',
    borderRadius: '$appHeight.$h12',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '$appHeight.$h30',
  },
  topNavButtonSelectedContainerStyle: {
    padding: '$appHeight.$h5',
    marginHorizontal: '$appHeight.$h12',
    backgroundColor: '$primary',
    borderRadius: '$appHeight.$h12',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '$appHeight.$h30',
  },
  topNavContainerStyle: {
    flexDirection: 'row',
    paddingHorizontal: '$appHeight.$h25',
    justifyContent: 'space-between',
    height: '$appHeight.$h50',
  },
});
