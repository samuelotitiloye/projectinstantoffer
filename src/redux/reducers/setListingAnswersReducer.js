const setListingAnswersReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_LISTING_INDIVIDUAL_ANSWERS':
        return action.payload;
      default:
        return state;
    }
  };
  
  
  export default setListingAnswersReducer;