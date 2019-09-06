import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchPurchaseDetails(action) {
    try {
        var answers = yield axios.get(`/api/purchase/answers/${action.payload}`);
        answers = answers.data[0]
        delete answers.id
        yield put({ type: 'SET_PURCHASE_ANSWERS', payload: answers })
        console.log('purchase_agreement_answers:');
    } catch (error) {
        console.log('error getting purchase_agreement answers on DOM', error);
    }
}

function* fetchPurchaseAnswers() {
    yield takeLatest('PURCHASE_ANSWERS', fetchPurchaseDetails);
  }
  
  export default fetchPurchaseAnswers;