import fonts from 'constants/fonts';
import EStyleSheet from 'react-native-extended-stylesheet';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = EStyleSheet.create({
  hourContainer: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
    //paddingHorizontal: 10,
    //paddingVertical: 5,
    borderRadius: 25,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 1,
  },
  hourTitle: {
    fontFamily: fonts.robotoReguluar,
    fontSize: RFValue(10),
  },
  backgroundContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    paddingHorizontal: '10%',
  },
  windowContainer: {
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 25,
    paddingTop: 40,
  },
  closeIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  workingHoursContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default styles;
