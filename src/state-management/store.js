import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer, rootSaga } from './modules';

const initialState = {};
const enhancers = [];
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const composedEnhancers =compose(
    applyMiddleware(...middleware),
    // eslint-disable-next-line no-underscore-dangle
    ...enhancers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const store= createStore(rootReducer, initialState, composedEnhancers);
sagaMiddleware.run(rootSaga);

export default store;