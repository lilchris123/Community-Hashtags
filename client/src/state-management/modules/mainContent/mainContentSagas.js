import { takeEvery,  takeLeading, all, put, call} from 'redux-saga/effects';
import axios from 'axios';
import { pending, success, failure } from '../../reduxPromiseActionNames';
import * as Actions from './mainContentActions';
import {API_URL, addTokenConfig} from '../../../shared/constants/api';

function* fetchCategories(){
    yield put({type: pending(Actions.FETCH_CATEGORIES)});
    try{
        const data = yield call(axios.get, `${API_URL}/categories`);
        yield put({type: success(Actions.FETCH_CATEGORIES), payload: data});
    }catch(err){
        yield put({type: failure(Actions.FETCH_CATEGORIES), payload: err})
    }
}

function* fetchHashtagsByCategory(action){
    const { category } =action;
    yield put({type: pending(Actions.FETCH_HASHTAGS_BY_NAME)});
    try{
        const data = yield call(axios.get, `${API_URL}/posts/category/${category}`);
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
    
    yield put({type: pending(Actions.LIKE_POST)});
    try{
        yield call(axios.put, `${API_URL}/posts/like`, { postId }, addTokenConfig());
        yield put({type: success(Actions.LIKE_POST)});
    }catch(err){
        yield put({type: failure(Actions.LIKE_POST), payload: err})
    }
}

function* updatePost(action){
    const { post }= action;
    
    yield put({type:pending(Actions.UPDATE_POST)});
    try{
        yield call(axios.put, `${API_URL}/users/posts`, {...post}, addTokenConfig());
        yield put({type: success(Actions.UPDATE_POST), payload: post});
    }catch(err){
        yield put({type: failure(Actions.UPDATE_POST), payload: err});
    }
}

function* removePost(action){
    const { id }= action;
    
    yield put({type:pending(Actions.REMOVE_POST)});
    try{
        yield call(axios.delete, `${API_URL}/users/posts/${id}`, addTokenConfig());
        yield put({type: success(Actions.REMOVE_POST), payload: id});
    }catch(err){
        yield put({type: failure(Actions.REMOVE_POST), payload: err});
    }
}

export default function* mainContentRootSaga(){
    yield all([takeLeading(Actions.FETCH_CATEGORIES, fetchCategories), takeEvery(Actions.FETCH_HASHTAGS_BY_NAME, fetchHashtagsByCategory), takeEvery(Actions.COPIED_HASHTAGS, copiedHashtags), takeEvery(Actions.LIKE_POST, likePost), takeEvery(Actions.UPDATE_POST, updatePost), takeEvery(Actions.REMOVE_POST, removePost)])
}