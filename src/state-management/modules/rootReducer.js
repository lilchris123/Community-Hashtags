import { combineReducers } from 'redux';
import { mainContentReducer } from './mainContent';
import { registerReducer} from './register';
import { loginReducer} from './login';

const appReducer = combineReducers({
    mainContent: mainContentReducer,
    register: registerReducer,
    login: loginReducer
});

export default function(state, action) {
    return appReducer(state, action);
}