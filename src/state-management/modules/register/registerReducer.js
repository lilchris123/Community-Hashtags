import * as Actions from './registerActions';
import { pending, success, failure } from '../../reduxPromiseActionNames';

const initialState ={
    isLoading: [],
    user: {}
}
const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type){
        case pending(Actions.REGISTER_USER):
            return{
                ...state,
                isLoading: [...state.isLoading, Actions.REGISTER_USER]
            }
        
        case success(Actions.REGISTER_USER):
            return{
                ...state,
                isLoading: state.isLoading.filter(item => item !== Actions.REGISTER_USER),
                user: payload.data
            }
         case failure(Actions.REGISTER_USER):
            return{
                ...state,
                isLoading: state.isLoading.filter(item => item !== Actions.REGISTER_USER)
            }
        default:
            return state;
    }
}
 
export default reducer;