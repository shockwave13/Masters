import fonts from 'constants/fonts';
import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  containerStyle: {
    marginVertical: 10,
    height: '$appHeight.$h290',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 25,
    elevation: 5,
  },
  imageStyle: {
    flex: 1,
  },
  imagesContainerStyle: {
    flex: 1,
    backgroundColor: '$background',
    overflow: 'hidden',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  footerContainerStyle: {
    padding: 15,
    backgroundColor: 'white',
    overflow: 'hidden',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  paginationContainerStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeDotStyle: {
    width: 30,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
    backgroundColor: '$primary',
  },
  inactiveDotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
    backgroundColor: 'white',
  },
  starStyle: {
    marginRight: 15,
  },
  starRatingContainer: {
    justifyContent: 'flex-start',
  },
  masternameStyle: {
    fontFamily: fonts.robotoReguluar,
    fontWeight: '400',
    fontSize: '$appFonts.$f15',
  },
  heartIconContainer: {
    backgroundColor: '$primary',
    padding: 5,
    borderRadius: 20,
    marginRight: 3,
  },
  rowContainer: {
    marginBottom: 5,
  },
  emptyImageContainer: {
    justifyContent: 'flex-end',
  },
  emptyImageStyle: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  descriptionStyle: {
    fontFamily: fonts.robotoReguluar,
    color: '$gray',
    fontSize: '$appFonts.$f15',
  },
});

export default styles;
