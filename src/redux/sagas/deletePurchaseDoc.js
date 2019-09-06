import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//const only needed for receiving information back 
function* deletePurchaseDoc(action) {
  try {
    yield axios.delete(`/api/purchase/delete/${action.payload.id}`);
    yield put ({ type: 'DELETE_PURCHASE_AGREEMENT', payload: action.payload.id});
  } catch (error) {
    console.log('error deleting purchase_agreement for pdf', error);
  }
}

function* deletePurchaseDocSaga() {
  yield takeLatest('DELETE_PURCHASE_DOC', deletePurchaseDoc);
}

export default deletePurchaseDocSaga;

