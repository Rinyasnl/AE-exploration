// sagas.ts
import { put, takeLatest, call } from 'redux-saga/effects';
import { ActionTypes, fetchDataSuccess, fetchDataFailure } from './actions';
import * as api from './services/api';

interface DataItem {
  id: number;
  name: string;
}

function* fetchDataSaga() {
  try {
    const data: DataItem[] = yield call(api.fetchData);
    yield put(fetchDataSuccess(data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

export function* watchFetchData() {
  yield takeLatest(ActionTypes.FETCH_DATA_REQUEST, fetchDataSaga);
}

export default function* rootSaga() {
  yield watchFetchData();
}
