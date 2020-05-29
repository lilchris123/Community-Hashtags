import * as Actions from './mainContentActions';
import { pending, success, failure } from '../../reduxPromiseActionNames';

const initialState={
    isLoading: [],
    categories: [],
    categoryData: {},
    copiedHashtags: null
}

const mainContentReducer = (state= initialState, action) => {
    const { type, payload }= action;
    
    switch(type){
        case pending(Actions.FETCH_CATEGORIES):
            return{
                ...state,
                isLoading: [...state.isLoading, Actions.FETCH_CATEGORIES]
            }
        case success(Actions.FETCH_CATEGORIES):
        return{
            ...state,
            isLoading: state.isLoading.filter(item => item !== Actions.FETCH_CATEGORIES),
            categories: payload.data
        }
        case failure(Actions.FETCH_CATEGORIES):
        return{
            ...state,
            isLoading: state.isLoading.filter(item => item !== Actions.FETCH_CATEGORIES)
        }
        case pending(Actions.FETCH_HASHTAGS_BY_NAME):
            return{
                ...state,
                isLoading: [...state.isLoading, Actions.FETCH_HASHTAGS_BY_NAME]
            }
        case success(Actions.FETCH_HASHTAGS_BY_NAME):
        return{
            ...state,
            isLoading: state.isLoading.filter(item => item !== Actions.FETCH_HASHTAGS_BY_NAME),
            categoryData: payload.data
        }
        case failure(Actions.FETCH_HASHTAGS_BY_NAME):
        return{
            ...state,
            isLoading: state.isLoading.filter(item => item !== Actions.FETCH_HASHTAGS_BY_NAME)
        }
        case pending(Actions.COPIED_HASHTAGS):
            return{
                ...state,
                isLoading: [...state.isLoading, Actions.COPIED_HASHTAGS]
            }
        case success(Actions.COPIED_HASHTAGS):
        return{
            ...state,
            isLoading: state.isLoading.filter(item => item !== Actions.COPIED_HASHTAGS),
            copiedHashtags: payload
        }
        case failure(Actions.COPIED_HASHTAGS):
        return{
            ...state,
            isLoading: state.isLoading.filter(item => item !== Actions.COPIED_HASHTAGS)
        }
        default:
            return state;
    }
}

export default mainContentReducer;