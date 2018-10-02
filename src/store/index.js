import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as headerReducer } from '../components/header/store';
import { reducer as translationReducer } from '../pages/translation/store';
import clientAxios from '../client/request';
import serverAxios from '../server/request';

let reducer = combineReducers({
	home: homeReducer,
	header: headerReducer,
	translation: translationReducer
});

let getStore = (req) => {
	// 用withWxtraArgument来传参
	return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios(req))));
}

let getClientStore = () => {
	// 脱水
	let initState = window.context;
	// 用withWxtraArgument来传参
	return createStore(reducer, initState, applyMiddleware(thunk.withExtraArgument(clientAxios)));
};

export {
	getStore,
	getClientStore
}