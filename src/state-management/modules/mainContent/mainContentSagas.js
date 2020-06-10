import { takeEvery, all, put, call} from 'redux-saga/effects';
import axios from 'axios';
import { pending, success, failure } from '../../reduxPromiseActionNames';
import * as Actions from './mainContentActions';

function* fetchCategories(){
    yield put({type: pending(Actions.FETCH_CATEGORIES)});
    try{
        const data = yield call(axios.get,'http://localhost:8081/categories');
        yield put({type: success(Actions.FETCH_CATEGORIES), payload: data});
    }catch(err){
        yield put({type: failure(Actions.FETCH_CATEGORIES), payload: err})
    }
}

function* fetchHashtagsByCategory(action){
    const { category } =action;
    yield put({type: pending(Actions.FETCH_HASHTAGS_BY_NAME)});
    try{
        const data = yield call(axios.get,`http://localhost:8081/posts/category/${category}`);
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

function* likePost(action){
    const { postId }= action;
    const config={
        headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.token)}`
        }
    }
    yield put({type: pending(Actions.LIKE_POST)});
    try{
        yield call(axios.put,`http://localhost:8081/posts/like`, { postId }, config);
        yield put({type: success(Actions.LIKE_POST)});
    }catch(err){
        yield put({type: failure(Actions.LIKE_POST), payload: err})
    }
}

export default function* mainContentRootSaga(){
    yield all([takeEvery(Actions.FETCH_CATEGORIES, fetchCategories), takeEvery(Actions.FETCH_HASHTAGS_BY_NAME, fetchHashtagsByCategory), takeEvery(Actions.COPIED_HASHTAGS, copiedHashtags), takeEvery(Actions.LIKE_POST, likePost)])
}