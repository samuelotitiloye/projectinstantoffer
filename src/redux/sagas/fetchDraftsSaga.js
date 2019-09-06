import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getDrafts(action) {
  try {
    const drafts = yield axios.get(`api/${action.payload}/drafts`);
    yield put({ type: 'SET_DRAFTS', payload: drafts.data });
  } catch (error) {
    console.log('error posting/saving drafts', error);
  }
}

function* fetchDraftsSaga() {
  yield takeLatest('GET_DRAFTS', getDrafts);
}

export default fetchDraftsSaga;
