import { all } from 'redux-saga/effects';
import { mainContentSaga } from './mainContent';
import { registerSaga } from './register';
import { loginSaga } from './login';

export default function* rootSaga(){
    yield all([mainContentSaga(), registerSaga(),loginSaga()]);
}