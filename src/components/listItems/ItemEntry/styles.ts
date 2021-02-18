import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    width: '100%',
  },
  itemContainerStyle: {
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
    padding: '$appHeight.$h20',
    flex: 1,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  iconsContainer: {
    justifyContent: 'center',
  },
  buttonsContainerStyle: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
});

export default styles;
