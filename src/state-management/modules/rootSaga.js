import { all } from 'redux-saga/effects';
import { mainContentSaga } from './mainContent';
import { userSaga } from './user';

export default function* rootSaga(){
    yield all([mainContentSaga(), userSaga()]);
}