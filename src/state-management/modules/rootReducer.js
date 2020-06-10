import { combineReducers } from 'redux';
import { mainContentReducer } from './mainContent';
import { userReducer} from './user';
import { searchReducer} from './search';

const appReducer = combineReducers({
    mainContent: mainContentReducer,
    user: userReducer,
    search: searchReducer
});

export default function(state, action) {
    return appReducer(state, action);
}