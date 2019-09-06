import takeLatest  from 'redux-saga/effects';
import axios from 'axios';


function* postNewDocument(action) {
  try {
    switch (action.type) {
      case "listing":
        yield axios.post('api/listing');
        break;
      case "purchase":
        yield axios.post('api/purchase');
        break;
    }
  } catch (error) {
    console.log('error posting/saving listing_contract answers', error);
  }
}

function* postNewDocumentSaga() {
  yield takeLatest('POST_NEW_DOCUMENT', postNewDocument);

}

export default postNewDocumentSaga;
