import { takeEvery, all, put, call} from 'redux-saga/effects';
import axios from 'axios';
import { pending, success, failure } from '../../reduxPromiseActionNames';
import * as Actions from './searchActions';


function* fetchPostsBySearch(action){
    const { query } =action;
    console.log(query);
    yield put({type: pending(Actions.FETCH_POSTS_BY_SEARCH)});
    try{
        const data = yield call(axios.get,`http://localhost:8081/api/posts/search/${query}`);
        yield put({type: success(Actions.FETCH_POSTS_BY_SEARCH), payload: data});
    }catch(err){
        yield put({type: failure(Actions.FETCH_POSTS_BY_SEARCH), payload: err})
    }
}

export default function* searchRootSaga(){
    yield all([takeEvery(Actions.FETCH_POSTS_BY_SEARCH, fetchPostsBySearch)]);
}