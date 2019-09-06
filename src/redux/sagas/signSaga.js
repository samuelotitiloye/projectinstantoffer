import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';


// this saga sends/posts the signature to the database as base64 file
function* sendSignatureToDatabase(action) {
    console.log('we made it to the sagas, we can save to the database');
    try {
        yield axios.post('/api/listing/signature', action.payload)
        console.log(action.payload);
        //then run below code to retrieve the signature from db to bed place on our document
        // const returnedSignature = yield axios.get('/api/Listing_Contract')
        // yield put({ type: 'SET_SIGNATURE', payload: returnedSignature.data })
        //    console.log(returnedSignature.data);
    } catch (error) {
        console.log('ERROR making the POST request to the database', error);
    }
}





// our combined sagas will live here.
//POST_SIGNATURE is our action dispatched from signature.js on the onClick to save signature
function* thisRootSaga() {
    yield takeLatest('POST_SIGNATURE', sendSignatureToDatabase); // 
}


export default thisRootSaga;