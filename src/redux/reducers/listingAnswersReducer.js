const listingAnswersReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_LISTING_ANSWERS':
      return { ...state, ...action.payload };
    case 'RESET_LISTING_ANSWERS':
      return {}
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.userReducer
export default listingAnswersReducer;
