import {takeEvery, put, call, all} from 'redux-saga/effects';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import {pending, success, failure} from '../../reduxPromiseActionNames';
import * as Actions from './userActions';

function* getUserFromToken(){
    yield put({type:pending(Actions.USER_FROM_TOKEN)});
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
        const result= yield call(axios.post, 'http://localhost:8081/users/login', {...userDetails});
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
        const data= yield call(axios.post, 'http://localhost:8081/users/register', {...user});
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
    yield put({type:pending(Actions.FETCH_USER_POSTS)});
    try{
        const data= yield call(axios.get, 'http://localhost:8081/users/posts');
        yield put({type: success(Actions.FETCH_USER_POSTS), payload: data});
    }catch(err){
         yield put({type: failure(Actions.FETCH_USER_POSTS), payload: err});
    }
}
export default function* userRootSaga(){
    yield all([takeEvery(Actions.USER_FROM_TOKEN, getUserFromToken), takeEvery(Actions.LOGIN_USER, loginUser),
         takeEvery(Actions.REGISTER_USER, registerUser), takeEvery(Actions.LOGOUT_USER, logoutUser), takeEvery(Actions.FETCH_USER_POSTS, fetchUserPosts)]);
}