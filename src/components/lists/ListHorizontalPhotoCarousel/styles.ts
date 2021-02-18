import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
const screenWidth = Dimensions.get('screen').width;

const styles = EStyleSheet.create({
  dotStyle: {
    width: '$appHeight.$h25',
    height: '$appHeight.$h12',
    borderRadius: '$appHeight.$h10',
    marginHorizontal: '$appHeight.$h3',
    backgroundColor: '$primary',
  },
  inactiveDotStyle: {
    width: '$appHeight.$h15',
    height: '$appHeight.$h15',
    borderRadius: '$appHeight.$h15',
    marginHorizontal: '$appHeight.$h3',
    backgroundColor: '$gray',
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
