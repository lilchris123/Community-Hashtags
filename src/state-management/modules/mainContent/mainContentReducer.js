import * as Actions from './mainContentActions';
import {pending, success, failure} from '../../reduxPromiseActionNames';

const initialState={
    isLoading: [],
    topTags: [],
    copiedHashtags: null
}

const mainContentReducer = (state= initialState, action) => {
    const { type, payload }= action;
    
    switch(type){
        case pending(Actions.FETCH_TOPHASHTAGS):
            return{
                ...state,
                isLoading: [...state.isLoading, Actions.FETCH_TOPHASHTAGS]
            }
        case success(Actions.FETCH_TOPHASHTAGS):
        return{
            ...state,
            isLoading: state.isLoading.filter(item => item !== Actions.FETCH_TOPHASHTAGS),
            topTags: payload.data.tags
        }
        case failure(Actions.FETCH_TOPHASHTAGS):
        return{
            ...state,
            isLoading: state.isLoading.filter(item => item !== Actions.FETCH_TOPHASHTAGS)
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