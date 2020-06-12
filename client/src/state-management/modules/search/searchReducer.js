import * as Actions from './searchActions';
import { pending, success, failure } from '../../reduxPromiseActionNames';

const initialState={
    isLoading: [],
    posts: {}
}

const searchReducer =(state = initialState, action) => {
    const { type, payload }= action;
    
    switch(type){
        case pending(Actions.FETCH_POSTS_BY_SEARCH):
            return{
                ...state,
                isLoading: [...state.isLoading, Actions.FETCH_POSTS_BY_SEARCH]
            }
        case success(Actions.FETCH_POSTS_BY_SEARCH):
        return{
            ...state,
            isLoading: state.isLoading.filter(item => item !== Actions.FETCH_POSTS_BY_SEARCH),
            posts: payload.data
        }
        case failure(Actions.FETCH_POSTS_BY_SEARCH):
        return{
            ...state,
            isLoading: state.isLoading.filter(item => item !== Actions.FETCH_POSTS_BY_SEARCH)
        }
        default:
            return state;
    }
}

export default searchReducer;