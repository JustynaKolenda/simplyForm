import {combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as reduxFormReducer} from 'redux-form';
import {messageReducer,messageState} from './MessageReducer'

export type StateRoot = {
    form:any,
    message:messageState
}

const reducer = combineReducers<StateRoot>({
    form: reduxFormReducer,
    message:messageReducer
});

const middleware = compose(
    applyMiddleware(thunk),
    (window['__REDUX_DEVTOOLS_EXTENSION__' as any]) ? composeWithDevTools() : (f: Function) => f
)

export const store = createStore(reducer,middleware as any)
