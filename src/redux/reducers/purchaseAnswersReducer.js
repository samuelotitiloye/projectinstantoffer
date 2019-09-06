const purchaseAnswersReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_PURCHASE_ANSWERS':
        return { ...state, ...action.payload };
      case 'RESET_PURCHASE_ANSWERS':
        return {}
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.userReducer
  export default purchaseAnswersReducer;