import {takeEvery, call, put, all} from 'redux-saga/effects'
import axios from 'axios';
import { pending, success, failure } from '../../reduxPromiseActionNames';
import * as Actions from './registerActions';

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

export default function* registerUserRootSaga(){
    yield all([takeEvery(Actions.REGISTER_USER, registerUser)]);
}