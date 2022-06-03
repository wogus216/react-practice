import { combineReducers } from '../../node_modules/@reduxjs/toolkit/dist/index';
import auth, { authSaga } from './auth';
import { all } from 'redux-saga/effects';
import loading from './loading';
import user, { userSaga } from './user';
const rootReducer = combineReducers({
  auth,
  loading,
  user,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga()]);
}

export default rootReducer;
