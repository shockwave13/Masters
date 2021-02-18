import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  containerStyle: {},
  imageContainer: {
    height: '$appHeight.$h68',
    width: 100,
  },
  itemContainerStyle: {
    flexDirection: 'row',
    height: '$appHeight.$h68',
    //marginHorizontal: 10,
    marginVertical: 7.5,
    borderRadius: '$appHeight.$h20',
    backgroundColor: 'white',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 4,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 5,
    // elevation: 8,
    alignItems: 'center',
    overflow: 'hidden',
    paddingRight: 15,
  },
});

export default styles;
