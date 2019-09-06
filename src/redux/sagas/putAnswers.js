import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* saveAnswers(action) {
    console.log('action', action)
    try {
        yield axios.put(`/api/listing/update`, action.payload);
        yield put({ type: 'SET_LISTING_ANSWERS', payload: action.payload.answers })
    } catch (error) {
        console.log('error in putAnswers saga', error);
    }
}



function* putAnswers() {
    yield takeLatest('SAVE_ANSWERS', saveAnswers);

  }
  
  export default putAnswers;