import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  itemContainerStyle: {
    flexDirection: 'row',
    height: '$appHeight.$h75',
    marginRight: '$appHeight.$h15',
    marginVertical: '$appHeight.$h7',
    borderRadius: '$appHeight.$h25',
    backgroundColor: '$white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    alignItems: 'center',
    padding: '$appHeight.$h20',
    flex: 1,
  },
  textContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    marginLeft: '$appHeight.$h20',
  },
  iconContainerStyle: {
    backgroundColor: '$primary',
    borderRadius: '$appHeight.$h50',
    width: '$appHeight.$h50',
    height: '$appHeight.$h50',
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
});

export default styles;
