import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';

import fetchListingAnswers from './fetchListingAnswers';
import fetchPurchaseAnswers from './fetchPurchaseAnswers';
import fetchDraftsSaga from './fetchDraftsSaga';
import deleteDraftSaga from './deleteDraftSaga';

import getListingSignedDocs from './fetchListingSignedDocs';
import getPurchaseSignedDocs from './fetchPurchaseSignedDocs';

import newPurchaseAgreementForm from './newPurchaseAgreementForm';

import pdfListing from './pdfListing';
import pdfOffer from './pdfOffer';

import deleteListingDoc from './deleteListingDoc';
import deletePurchaseDoc from './deletePurchaseDoc';
import putAnswers from './putAnswers';
import thisRootSaga from './signSaga';
import putPurchaseAnswers from './putPurchaseAnswers';


// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    fetchDraftsSaga(),
    deleteDraftSaga(),
    fetchListingAnswers(),
    fetchPurchaseAnswers(),
    getListingSignedDocs(),
    getPurchaseSignedDocs(),
    newPurchaseAgreementForm(),
    pdfListing(),
    pdfOffer(),
    putAnswers(),
    thisRootSaga(),
    putPurchaseAnswers(),
    deleteListingDoc(),
    deletePurchaseDoc(),
  ]);
}
