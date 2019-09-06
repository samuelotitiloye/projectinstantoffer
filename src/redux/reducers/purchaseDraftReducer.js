const purchaseDraftReducer = (state = [], action) => {
    switch (action.type) {
            case 'SET_PURCHASE_DRAFTS':
                        return action.payload.filter((value, index, arr) => {
                                return value.id !== 1;
                        })
            case 'DELETE_PURCHASE_DRAFT':
                    return state.filter((value, index, arr) => {
                            return value.id !== action.payload;
                    })
            default:
                    return state;
    }
}

export default purchaseDraftReducer;