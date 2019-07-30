import {combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formreducer} from 'redux-form';

const reducer = combineReducers({
    form: formreducer

});

const middleware = compose(
    applyMiddleware(thunk),
    composeWithDevTools( )
)

export const store = createStore(reducer,middleware)
