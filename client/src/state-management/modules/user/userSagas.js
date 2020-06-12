import {takeEvery, put, call, all} from 'redux-saga/effects';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import {pending, success, failure} from '../../reduxPromiseActionNames';
import * as Actions from './userActions';

function* getUserFromToken(){
    yield put({type: pending(Actions.USER_FROM_TOKEN)});
    try{
        const token = JSON.parse(localStorage.getItem('token'));
        const user= jwt.decode(token);
        yield put({type: success(Actions.USER_FROM_TOKEN), payload: user});
    }catch(err){
        yield put({type: failure(Actions.USER_FROM_TOKEN), payload: err});
    }
}

function* loginUser(action){
    const { userDetails }= action;
    yield put({type:pending(Actions.LOGIN_USER)});
    try{
        const result= yield call(axios.post, 'http://localhost:8081/api/users/login', {...userDetails});
        localStorage.setItem('token', JSON.stringify(result.data.token));
        const data= jwt.decode(result.data.token);
        yield put({type: success(Actions.LOGIN_USER), payload: data});
    }catch(err){
        yield put({type: failure(Actions.LOGIN_USER), payload: err});
    }
}

function* registerUser(action){
    const { user } = action;
    yield put({type: pending(Actions.REGISTER_USER)});

    try{
        const data= yield call(axios.post, 'http://localhost:8081/api/users/register', {...user});
        yield put({type: success(Actions.REGISTER_USER), payload: data});
    }catch(err){
        yield put({type: failure(Actions.REGISTER_USER), payload: err});
    }
}

function* logoutUser(){
    yield put({type:pending(Actions.LOGOUT_USER)});
    localStorage.removeItem('token');
    try{
        yield put({type: success(Actions.LOGOUT_USER)});
    }catch(err){
        yield put({type: failure(Actions.LOGOUT_USER), payload: err});
    }
}

function* fetchUserPosts(){
    const config={
        headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.token)}`
        }
    }
    yield put({type:pending(Actions.FETCH_USER_POSTS)});
    try{
        const data= yield call(axios.get, 'http://localhost:8081/api/users/posts', config);
        yield put({type: success(Actions.FETCH_USER_POSTS), payload: data});
    }catch(err){
         yield put({type: failure(Actions.FETCH_USER_POSTS), payload: err});
    }
}

function* likePost(action){
    const { postId }= action;
    const config={
        headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.token)}`
        }
    }
    yield put({type: pending(Actions.LIKE_USER_POST)});
    try{
        yield call(axios.put,`http://localhost:8081/api/posts/like`, { postId }, config);
        yield put({type: success(Actions.LIKE_USER_POST)});
    }catch(err){
        yield put({type: failure(Actions.LIKE_USER_POST), payload: err})
    }
}

function* removePost(action){
    const { id }= action;
    const config={
        headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.token)}`
        }
    }
    yield put({type:pending(Actions.REMOVE_USER_POST)});
    try{
        yield call(axios.delete, `http://localhost:8081/api/users/posts/${id}`, config);
        yield put({type: success(Actions.REMOVE_USER_POST), payload: id});
    }catch(err){
        yield put({type: failure(Actions.REMOVE_USER_POST), payload: err});
    }
}

function* createPost(action){
    const { post }= action;
    const config={
        headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.token)}`
        }
    }
    yield put({type:pending(Actions.CREATE_USER_POST)});
    try{
       const data= yield call(axios.post, `http://localhost:8081/api/users/posts`, {...post}, config);
        yield put({type: success(Actions.CREATE_USER_POST), payload: data});
    }catch(err){
        yield put({type: failure(Actions.CREATE_USER_POST), payload: err});
    }
}

function* updatePost(action){
    const { post }= action;
    const config={
        headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.token)}`
        }
    }
    yield put({type:pending(Actions.UPDATE_USER_POST)});
    try{
        yield call(axios.put, `http://localhost:8081/api/users/posts`, {...post}, config);
        yield put({type: success(Actions.UPDATE_USER_POST), payload: post});
    }catch(err){
        yield put({type: failure(Actions.UPDATE_USER_POST), payload: err});
    }
}

export default function* userRootSaga(){
    yield all([takeEvery(Actions.USER_FROM_TOKEN, getUserFromToken), takeEvery(Actions.LOGIN_USER, loginUser),
         takeEvery(Actions.REGISTER_USER, registerUser), takeEvery(Actions.LOGOUT_USER, logoutUser), takeEvery(Actions.FETCH_USER_POSTS,
        fetchUserPosts), takeEvery(Actions.REMOVE_USER_POST, removePost), takeEvery(Actions.CREATE_USER_POST, createPost), takeEvery(Actions.UPDATE_USER_POST, updatePost), takeEvery(Actions.LIKE_USER_POST, likePost)]);
}