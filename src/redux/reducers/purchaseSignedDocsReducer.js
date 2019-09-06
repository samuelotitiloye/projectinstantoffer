const purchaseSignedDocsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PURCHASE_SIGNED_DOCS':
      return action.payload
    case 'DELETE_PURCHASE_AGREEMENT':
      return state.filter((value, index, arr) => {
        return value.id !== action.payload;
      })
    default:
      return state;
  }
}

export default purchaseSignedDocsReducer;