import { combineReducers } from 'redux';
import { mainContentReducer } from './mainContent';

const appReducer = combineReducers({
    mainContent: mainContentReducer
});

export default function(state, action) {
    return appReducer(state,action);
}