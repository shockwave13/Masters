import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
const screenWidth = Dimensions.get('screen').width;

const styles = EStyleSheet.create({
  imageStyle: {
    height: screenWidth * 0.48,
    width: screenWidth * 0.81,
    borderRadius: '$appHeight.$h20',
  },
  containerStyle: {
    // marginHorizontal: '$appHeight.$h7',
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
    bottom: '$appHeight.$h15',
    right: '$appHeight.$h15',
  },
});

export default styles;
