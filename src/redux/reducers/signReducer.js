const signReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_SIGNATURE':
            console.log('inside set signature', action.payload);
            return action.payload
        default:
            return state;
    }
}


// const signReducer = combineReducers({
//     sign
// })



export default signReducer;
