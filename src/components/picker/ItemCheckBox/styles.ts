import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  containerStyle: {},
  itemContainerStyle: {
    flexDirection: 'row',
    height: '$appHeight.$h68',
    marginVertical: 7.5,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    //overflow: 'hidden',
    paddingRight: 15,
    paddingLeft: 15,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 5,
  },
});

export default styles;
