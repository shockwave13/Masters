import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  scrollContentContainerStyle: {
    flexGrow: 1,
    paddingBottom: '$appHeight.$h35',
    paddingTop: '$appHeight.$h15',
  },
  topContainerStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '$appHeight.$h25',
    marginBottom: '$appHeight.$h15',
  },
  bodyContainerStyle: {
    paddingBottom: 0,
    paddingHorizontal: 0,
    paddingTop: 0,
  },
  headerContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '$appHeight.$h25',
    marginVertical: '$appHeight.$h10',
  },
  starStyle: {
    marginRight: 5,
  },
  starRatingContainer: {
    justifyContent: 'flex-start',
  },
  heartIconContainer: {
    backgroundColor: '$primary',
    padding: 5,
    borderRadius: 20,
    marginRight: 3,
  },
  masterNameContainerStyle: {
    marginHorizontal: '$appHeight.$h15',
  },
  generalElementsContainerStyle: {
    paddingHorizontal: '$appHeight.$h25',
  },
  listFooterComponentStyle: {
    alignItems: 'center',
    marginTop: '$appHeight.$h15',
  },
});
