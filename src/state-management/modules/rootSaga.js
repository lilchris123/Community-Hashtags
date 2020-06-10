import { all } from 'redux-saga/effects';
import { mainContentSaga } from './mainContent';
import { searchSaga} from './search';
import { userSaga } from './user';

export default function* rootSaga(){
    yield all([mainContentSaga(), userSaga(), searchSaga()]);
}