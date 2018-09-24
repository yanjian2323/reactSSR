import { CHANGE_LIST } from './constants';

let defaultState = {
	name: 'yanjian',
	list: []
};
export default (state = defaultState, action) => {
	if (action.type === CHANGE_LIST) {
		let newState = {
			...state,
			list: action.list
		};
		return newState;
	}
	return state;
};