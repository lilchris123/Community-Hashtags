import * as Actions from './userActions';
import {pending, success, failure} from '../../reduxPromiseActionNames'

const intialState= {
    isLoading: [],
    user: {},
    isLoggedIn: false
}
const reducer = (state = intialState, action) => {
    const {type, payload} =action;
    switch(type){
        case pending(Actions.USER_FROM_TOKEN):
            return{
                ...state,
                isLoading: [state.isLoading, Actions.USER_FROM_TOKEN]
            }
        case success(Actions.USER_FROM_TOKEN):
            return{
                ...state,
                isLoading: state.isLoading.filter(item => item !== Actions.USER_FROM_TOKEN),
                user: payload,
                isLoggedIn: !!payload
            }
        case failure(Actions.USER_FROM_TOKEN):
            return{
                ...state,
                isLoading: state.isLoading.filter(item => item !== Actions.USER_FROM_TOKEN)
            }
        case pending(Actions.LOGIN_USER):
            return{
                ...state,
                isLoading: [state.isLoading, Actions.LOGIN_USER]
            }
        case success(Actions.LOGIN_USER):
            return{
                ...state,
                isLoading: state.isLoading.filter(item => item !== Actions.LOGIN_USER),
                user: payload,
                isLoggedIn: true
            }
        case failure(Actions.LOGIN_USER):
            return{
                ...state,
                isLoading: state.isLoading.filter(item => item !== Actions.LOGIN_USER)
            }
        case pending(Actions.REGISTER_USER):
            return{
                ...state,
                isLoading: [...state.isLoading, Actions.REGISTER_USER]
            }
        
        case success(Actions.REGISTER_USER):
            return{
                ...state,
                isLoading: state.isLoading.filter(item => item !== Actions.REGISTER_USER)
            }
         case failure(Actions.REGISTER_USER):
            return{
                ...state,
                isLoading: state.isLoading.filter(item => item !== Actions.REGISTER_USER)
            }
        case pending(Actions.LOGOUT_USER):
            return{
                ...state,
                isLoading: [state.isLoading, Actions.LOGOUT_USER]
            }
        case success(Actions.LOGOUT_USER):
            return{
                ...state,
                isLoading: state.isLoading.filter(item => item !== Actions.LOGOUT_USER),
                user: {},
                isLoggedIn: false
            }
        case failure(Actions.LOGOUT_USER):
            return{
                ...state,
                isLoading: state.isLoading.filter(item => item !== Actions.LOGOUT_USER)
            }
    default:
        return state;
    }
}
 
export default reducer;