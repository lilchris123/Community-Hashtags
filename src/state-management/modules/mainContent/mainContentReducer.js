import * as Actions from './mainContentActions';
import { pending, success, failure } from '../../reduxPromiseActionNames';

const initialState={
    isLoading: [],
    hashtags: [],
    categoryHashtags: [],
    copiedHashtags: null
}

const mainContentReducer = (state= initialState, action) => {
    const { type, payload }= action;
    
    switch(type){
        case pending(Actions.FETCH_HASHTAGS):
            return{
                ...state,
                isLoading: [...state.isLoading, Actions.FETCH_HASHTAGS]
            }
        case success(Actions.FETCH_HASHTAGS):
        return{
            ...state,
            isLoading: state.isLoading.filter(item => item !== Actions.FETCH_HASHTAGS),
            hashtags: payload.data
        }
        case failure(Actions.FETCH_HASHTAGS):
        return{
            ...state,
            isLoading: state.isLoading.filter(item => item !== Actions.FETCH_HASHTAGS)
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
            categoryHashtags: payload.data.tags
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