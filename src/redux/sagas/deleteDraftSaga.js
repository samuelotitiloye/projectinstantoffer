import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//const only needed for receiving information back 
function* deleteDraft(action) {
  try {
    const id = action.payload.id;
    yield axios.delete(`/api/${action.payload.docType}/delete/${id}`);
    console.log("aw")
    yield put ({ type: 'REMOVE_DRAFT', payload: id });
  } catch (error) {
    console.log('error deleting draft', error);
  }
}

function* deleteDraftSaga() {
  yield takeLatest('DELETE_DRAFT', deleteDraft);

}

export default deleteDraftSaga;
