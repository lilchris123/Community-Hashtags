import {takeEvery, put, call, all} from 'redux-saga/effects';
import axios from 'axios';
import {pending, success, failure} from '../../reduxPromiseActionNames';
import * as Actions from './loginActions';

function* loginUser(action){
    const { userDetails }= action;
    yield put({type:pending(Actions.loginUser)});
    try{
        const data= yield call(axios.post, 'http://localhost:8081/users/login', {...userDetails});
        yield put({type: success(Actions.LOGIN_USER), payload: data})
    }catch(err){
        yield put({type: failure(Actions.LOGIN_USER), payload: err});
    }
}

export default function* loginRootSaga(){
    yield all([takeEvery(Actions.LOGIN_USER, loginUser)]);
}