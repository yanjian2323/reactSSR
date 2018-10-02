import * as constants from './constants';

function changeList (list) {
	return {
		type: constants.CHANGE_LIST,
		list
	};
}

export function getTranlationList () {
	return (dispatch, getState, request) => {
		return request('/api/translations.json').then((res) => {
			if (res.data.success) {
				dispatch(changeList(res.data.data));
			} else {
				dispatch(changeList([]));
			}
			
		});
	};
}