import * as constants from './constants';

const changeLogin = (isLogin) => {
	return {
		type: constants.CHANGE_LOGIN,
		isLogin
	};
};

export const login = () => {
	return (dispatch, getState, request) => {
		return request('/api/login.json').then(() => {
			dispatch(changeLogin(true));
		});
	};
};

export const logout = () => {
	return (dispatch, getState, request) => {
		return request('/api/logout.json').then(() => {
			dispatch(changeLogin(false));
		});
	};
};

export const isLogin = () => {
	return (dispatch, getState, request) => {
		return request('/api/isLogin.json').then((res) => {
			dispatch(changeLogin(res.data.data.login));
		});
	};
};