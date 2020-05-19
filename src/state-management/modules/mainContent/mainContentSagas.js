import { takeEvery, all, put, call} from 'redux-saga/effects';
import axios from 'axios';
import {pending, success, failure } from '../../reduxPromiseActionNames';
import * as Actions from './mainContentActions';

function* fetchTopHashtags(){
    yield put({type: pending(Actions.FETCH_TOPHASHTAGS)});
    try{
        const data = yield call(axios.get,'http://localhost:8081/api/data/topHashtags');
  
        yield put({type: success(Actions.FETCH_TOPHASHTAGS), payload: data});
    }catch(err){
        yield put({type: failure(Actions.FETCH_TOPHASHTAGS), payload: err})
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
    yield all([takeEvery(Actions.FETCH_TOPHASHTAGS, fetchTopHashtags), takeEvery(Actions.COPIED_HASHTAGS, copiedHashtags)])
}