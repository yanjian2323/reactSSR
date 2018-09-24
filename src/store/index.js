import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as homeReducer } from '../pages/home/store';

let reducer = combineReducers({
	home: homeReducer
});

let getStore = () => {
	return createStore(reducer, applyMiddleware(thunk));
}

let getClientStore = () => {
	let initState = window.context;
	return createStore(reducer, initState, applyMiddleware(thunk));
};

export {
	getStore,
	getClientStore
}