import { combineReducers } from 'redux';
import { mainContentReducer } from './mainContent';
import { userReducer} from './user';

const appReducer = combineReducers({
    mainContent: mainContentReducer,
    user: userReducer
});

export default function(state, action) {
    return appReducer(state, action);
}