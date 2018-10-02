import * as constants from './constants';

const defaultState = {
	list: []
};

export default (state = defaultState, action) => {
	if (action.type === constants.CHANGE_LIST) {
		return {
			...state,
			list: action.list
		};
	}
	return state;
};