import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* newPurchaseAgreement(action) {
    try {
        const { data } = yield axios.post('/api/purchase/save', action.payload);
        console.log(data);
        yield put({type: 'SET_PURCHASE_AGREEMENT_FORM' , payload: data[0]})
    } catch (error) {
        console.log('error posting/saving purchase_agreement answers', error);
    }
}

function* newPurchaseAgreementForm() {
    yield takeLatest('CREATE_NEW_PURCHASE_AGREEMENT_FORM', newPurchaseAgreement);

}

export default newPurchaseAgreementForm;