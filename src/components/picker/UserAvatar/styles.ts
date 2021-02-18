import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  imageStyle: {
    height: '$appHeight.$h95',
    width: '$appHeight.$h95',
    borderRadius: 100,
  },
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },

  containerStyle: {
    height: '$appHeight.$h95',
    width: '$appHeight.$h95',
    borderRadius: 100,
    backgroundColor: '$white',
    overflow: 'hidden',
  },
  smallAvatarContainerStyle: {
    height: '$appHeight.$h60',
    width: '$appHeight.$h60',
    overflow: 'hidden',
  },
  editIconContainerStyle: {
    height: '$appHeight.$h25',
    width: '$appHeight.$h25',
    borderRadius: 20,
    backgroundColor: '#54D3C2',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

export default styles;
