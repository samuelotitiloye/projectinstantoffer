import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//const only needed for receiving information back 
function* deleteListingDoc(action) {
  try {
    yield axios.delete(`/api/listing/delete/${action.payload.id}`);
    yield put ({ type: 'DELETE_LISTING_CONTRACT', payload: action.payload.id });
  } catch (error) {
    console.log('error deleting listing_contract for pdf', error);
  }
}

function* deleteListingDocSaga() {
  yield takeLatest('DELETE_LISTING_DOC', deleteListingDoc);
}

export default deleteListingDocSaga;

