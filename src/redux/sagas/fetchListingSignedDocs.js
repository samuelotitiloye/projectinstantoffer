import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchListingSignedDocs() {
    try {
        const listingSigned = yield axios.get('/api/listing/signedDocs');
        console.log('listing_signed_documents:', listingSigned);
        yield put({ type: 'SET_LISTING_SIGNED_DOCS', payload: listingSigned.data })
    } catch (error) {
        console.log('error getting listing answers', error);
    }
}



function* getListingSignedDocs() {
    yield takeLatest('GET_LISTING_SIGNED_DOCS', fetchListingSignedDocs);

  }
  
  export default getListingSignedDocs;