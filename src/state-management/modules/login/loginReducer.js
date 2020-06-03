import * as Actions from './loginActions';
import {pending, success, failure} from '../../reduxPromiseActionNames'

const intialState= {
    isLoading: [],
    user: {}
}
const reducer = (state = intialState, action) => {
    const {type, payload} =action;
    switch(type){
        case pending(Actions.LOGIN_USER):
            return{
                ...state,
                isLoading: [state.isLoading, Actions.LOGIN_USER]
            }
        case success(Actions.LOGIN_USER):
            return{
                ...state,
                isLoading: state.isLoading.filter(item => item !== Actions.LOGIN_USER),
                user: payload.data
            }
        case failure(Actions.LOGIN_USER):
            return{
                ...state,
                isLoading: state.isLoading.filter(item => item !== Actions.LOGIN_USER)
            }
    default:
        return state;
    }
}
 
export default reducer;