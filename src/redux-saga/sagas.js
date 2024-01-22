// sagas.js
import { put, takeEvery, delay } from 'redux-saga/effects';
import { ActionTypes, incrementAsyncSuccess } from './actions';

function* incrementAsyncSaga() {
  yield delay(1000); // Simulate an asynchronous operation
  yield put(incrementAsyncSuccess());
}

function* watchIncrementAsync() {
  yield takeEvery(ActionTypes.INCREMENT_ASYNC, incrementAsyncSaga);
}

export default function* rootSaga() {
  yield watchIncrementAsync();
}
