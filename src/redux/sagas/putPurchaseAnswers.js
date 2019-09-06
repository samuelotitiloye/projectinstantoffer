import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* saveAnswers(action) {
    try {
        console.log('axios call for api/purchase/update')
        yield axios.put(`/api/purchase/update`, action.payload);
        yield put({ type: 'SET_PURCHASE_ANSWERS', payload: action.payload.answers })
    } catch (error) {
        console.log('error in putAnswers purchase saga', error);
    }
}



function* putPurchaseAnswers() {
    yield takeLatest('SAVE_ANSWERS_FOR_PURCHASE', saveAnswers);

  }
  
  export default putPurchaseAnswers;