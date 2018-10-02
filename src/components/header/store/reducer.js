import * as constants from './constants';

const defaultState = {
	isLogin: false
};

export default (state = defaultState, action) => {
	if (action.type === constants.CHANGE_LOGIN) {
		return {
			...state,
			isLogin: action.isLogin
		};
	}
	return state;
};