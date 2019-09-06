const draftsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_DRAFTS':
      return action.payload
    case 'REMOVE_DRAFT':
      return state.filter((value, index, arr) => {
        return value.id != action.payload;
      })
    default:
      return state;
  }
}

export default draftsReducer;
