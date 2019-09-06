const listingSignedDocsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_LISTING_SIGNED_DOCS':
      return action.payload
    case 'DELETE_LISTING_CONTRACT':
      console.log('inDeleteListingContract')
      return state.filter((value, index, arr) => {
        return value.id !== action.payload;
      })
    default:
      return state;
  }
}

export default listingSignedDocsReducer;
