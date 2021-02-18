import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  bodyContainerStyle: {
    paddingHorizontal: 0,
  },

  sectionTitleStyle: {
    marginVertical: '$appHeight.$h15',
  },
  listContentContainerStyle: {
    paddingHorizontal: '$appHeight.$h25',
    marginVertical: '$appHeight.$h25',
  },
  sliderContainerStyle: {
    paddingHorizontal: '$appHeight.$h25',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '$appHeight.$h25',
  },
  sliderTrackStyle: {
    height: 3,
  },
  sliderSelectedStyle: {
    backgroundColor: '$primary',
  },
  markersContainerStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  markersValueStyle: {
    position: 'absolute',
    bottom: 35,
  },
  markersIconsContainerStyle: {
    width: 30,
    height: 30,
    backgroundColor: '$primary',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderWidth: 4,
    borderColor: '$white',
  },
  switchButtonsContainerStyle: {
    paddingHorizontal: '$appHeight.$h20',
    marginVertical: '$appHeight.$h25',
  },
  paddingHorizontal: {
    paddingHorizontal: '$appHeight.$h25',
  },
  marginVertical: {
    marginVertical: '$appHeight.$h25',
  },
  filterItemContainerStyle: {
    height: '$appHeight.$h48',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 7,
    elevation: 4,
  },
  filtersListContentContainerStyle: {
    paddingHorizontal: '$appHeight.$h20',
    marginVertical: '$appHeight.$h25',
  },
});
