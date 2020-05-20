import { takeEvery, all, put, call} from 'redux-saga/effects';
import axios from 'axios';
import { pending, success, failure } from '../../reduxPromiseActionNames';
import * as Actions from './mainContentActions';

function* fetchHashtags(){
    yield put({type: pending(Actions.FETCH_HASHTAGS)});
    try{
        const data = yield call(axios.get,'http://localhost:8081/api/data/hashtags');
        // console.log(data.data);
        yield put({type: success(Actions.FETCH_HASHTAGS), payload: data});
    }catch(err){
        yield put({type: failure(Actions.FETCH_HASHTAGS), payload: err})
    }
}

function* fetchHashtagsByCategory(action){
    const { category } =action;
    yield put({type: pending(Actions.FETCH_HASHTAGS_BY_NAME)});
    try{
        const data = yield call(axios.get,`http://localhost:8081/api/data/hashtags/${category}`);
        // console.log(data.data);
        yield put({type: success(Actions.FETCH_HASHTAGS_BY_NAME), payload: data});
    }catch(err){
        yield put({type: failure(Actions.FETCH_HASHTAGS_BY_NAME), payload: err})
    }
}

function* copiedHashtags(action){
    const { tagId }= action;
    yield put({type: pending(Actions.COPIED_HASHTAGS)});
    try{
        yield put({type: success(Actions.COPIED_HASHTAGS), payload: tagId});
    }catch(err){
        yield put({type: failure(Actions.COPIED_HASHTAGS), payload: err})
    }
}

export default function* mainContentRootSaga(){
    yield all([takeEvery(Actions.FETCH_HASHTAGS, fetchHashtags), takeEvery(Actions.FETCH_HASHTAGS_BY_NAME, fetchHashtagsByCategory), takeEvery(Actions.COPIED_HASHTAGS, copiedHashtags)])
}