import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//const only needed for receiving information back 
function* deletePurchaseAnswer(action) {
    try {
       yield axios.delete(`/api/purchase/delete/${action.payload.id}`);
       yield put ({ type: 'PURCHASE_ANSWER_HISTORY' });
    } catch (error) {
        console.log('error deleting purchase_agreement answer for pdf', error);
    }
}

function* deletePurchaseAnswerSaga() {
    yield takeLatest('DELETE_PURCHASE_ANSWER', deletePurchaseAnswer);

}

export default deletePurchaseAnswerSaga;