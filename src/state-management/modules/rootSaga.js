import { all } from 'redux-saga/effects';
import { mainContentSaga } from './mainContent';

export default function* rootSaga(){
    yield all([mainContentSaga()]);
}