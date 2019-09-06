import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchPurchaseSignedDocs() {
  try {
    const purchaseSigned = yield axios.get('/api/purchase/signedDocs');
    yield put({ type: 'SET_PURCHASE_SIGNED_DOCS', payload: purchaseSigned.data })
  } catch (error) {
    console.log('error getting purchase signed doc', error);
  }
}



function* getPurchaseSignedDocs() {
  yield takeLatest('GET_PURCHASE_SIGNED_DOCS', fetchPurchaseSignedDocs);

}

export default getPurchaseSignedDocs;
