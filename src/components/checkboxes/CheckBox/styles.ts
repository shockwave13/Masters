import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderColor: '$gray',
    height: 24,
    width: 24,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeContainer: {
    backgroundColor: '$primary',
    width: 18,
    height: 18,
    borderRadius: 3,
  },
});

export default styles;
